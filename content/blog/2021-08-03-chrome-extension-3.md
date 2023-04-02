---
author: FrogApp
title: "Chrome 拡張機能を作って公開しよう③　〜形にする〜"
description: 1回15分でサクッと開発。いよいよ形にしていきます！
categories: プログラミング
tags:
- プログラミング
- Chrome拡張機能
- HTML
- JavaScript
thumbnail: /img/2021-08-03-mac.jpg
series: Chrome 拡張機能を作ろう
series_title: 仕様に沿って開発
photoCredits: '<a href="https://unsplash.com/@jantined?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Jantine Doornbos</a>'
photoSource: '<a href="https://unsplash.com/s/photos/develop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'
date: 2021-08-03
slug: chromechrome-extension-3
---


こんにちは。1回15分で拡張機能を作るシリーズ、第3弾です。

今回は、前回作成したファイルをもとに、拡張機能を形にしていきます。

今回はボリュームが大きいので、15分で終わらないかもしれません。その時はごめんなさい。

## 仕様

まずは今回の拡張機能の仕様を紹介します。

- 2つの独立したテキストボックスに、URL・ページタイトルをそれぞれ代入する
- URL・ページタイトルは、それぞれコピーできる
- URLとページタイトルを両方コピーすることもできる
- Facebook や Twitter、LINE へのシェア機能も実装する

とりあえずこのような仕様でいきます。

## ポップアップの作成

前回作ったものは、「Hello, world」と出力するだけのものでしたが、今回は更に拡張機能っぽくしていきます。

なお、今から記述していく HTML と CSS は簡単なものなのでコピペで済ませて構いません。後半の JavaScript が難しいので...

では、まずは HTML から。`popup.html`の中身をすべて消して、以下の内容を記述してください。

```HTML
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="popup.css">
</head>

<body>
  <div class="content">
  <label for="pageTitle" class="column">タイトル</label>
  <div class="grid">
    <div class="text">
      <input type="text" id="pageTitle" class="column" readonly>
    </div>
  </div>
</div>
<div class="content">
  <label for="pageURL" class="column">URL</label>
  <div class="grid">
    <div class="text">
      <input type="url" id="pageURL" class="column" readonly>
    </div>
  </div>
  </div>

  <script src="popup.js" defer></script>
</body>

</html>
```

HTML を保存したら、ポップアップを開いてみてください。

以下のようになっていれば OK です。

![ポップアップHTMLのみ](https://user-images.githubusercontent.com/75155258/127944612-843ffb47-c4f0-451e-bbd2-8fab15a2c3a6.png)

しかし、これでは味気ないので、CSS の登場です！`popup.css`の中身をすべて消して、以下の内容を記述してください。

```CSS
body {
    letter-spacing: .15em;
    width: 400px;
    font-size: 16px;
}

* {
    color: #606c76;
    box-sizing: border-box;
    font-family: -apple-system, blinkMacSystemFont, "Helvetica Neue", "Segoe UI", "Arial", "Roboto", "Hiragino Kaku Gothic ProN", YuGothicM, YuGothic, Meiryo, 'Noto Sans JP', sans-serif;
}

@font-face {
    font-family: YuGothicM;
    font-weight: normal;
    src: local("YuGothic-Medium"), local("Yu Gothic Medium"), local("YuGothic-Regular");
    /* Windows8.1ではMediumがないのでRegularを指定 */
}

@font-face {
    font-family: YuGothicM;
    font-weight: bold;
    src: local("YoGothic-Bold"), local("Yu Gothic");
}

.content{
    margin: 2em 0;
}

.grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.2em 1em;
    width: 100%;
    margin-top: .3em;
}

.text {
    position: relative;
}

.text input {
    color: #727d86;
    font: 16px sans-serif;
    width: 100%;
    padding: 0;
    padding-bottom: .1em;
    letter-spacing: 1px;
    border: 0;
}

.text input:focus {
    outline: none;
}

.text input:focus::after {
    outline: none;
}

.text::after {
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 0;
    content: '';
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: #4c3cda;
}

.text .column {
    width: 100%;
    height: 100%;
}
```

これでポップアップを開いてみると...?

![CSS付きポップアップ](https://user-images.githubusercontent.com/75155258/127944766-bfad7d69-102b-4e28-a51f-3d0c0afd0ca1.png)

いい感じになっています！

## JavaScript で動きをつける

さあ、続いて JavaScript の記述です！まずは、`popup.js`の中身を消して、「タイトル」を表示させる要素と「URL」を表示させる要素を取得して定数に代入します。

```JavaScript
const title = document.getElementById("pageTitle");
const url = document.getElementById("pageURL");
```

テキストボックスにテキストを代入するには、`element.value = (代入したい文字列)` を使えばよいのでした。きっと多くの人が下記のプログラムを思いついたでしょう。

```JavaScript
const title = document.getElementById("pageTitle");
const url = document.getElementById("pageURL");

/* ココから追記分 */
title.value = document.title;// タイトルを代入
url.value = location.href;  //URLを代入
/* ココまで追記分 */
```

しかし、実行してみると...

![失敗例](https://user-images.githubusercontent.com/75155258/127945540-7e5e38d8-9f3a-413f-80fa-daab11eda5c4.png)

このように、このポップアップの HTML の URL とタイトルが代入されてしまいます。

(URL は人によって異なるかもしれません。また、ポップアップに `<title>` タグが指定されていないため、「タイトル」欄は空白になっています。)

そこで、用いるのが、`chrome.tabs.query`メソッドです！これは、Chrome の拡張機能のみが使用することができるメソッドとなっています。

このメソッドを使うためには、`manifest.json`に以下の内容を書き加えて、「この拡張機能は開いているタブの情報を必要とするから教えてくれ」ということをブラウザに伝える必要があります。

```JSON
  "permissions": [
    "tabs"
  ],
```

このメソッドを用いてプログラムを書き換えると、以下のようになります。「ここは削除！」とコメントしてある部分は、削除してください。

```JavaScript
const title = document.getElementById("pageTitle");
const url = document.getElementById("pageURL");

/*========================= ここは削除！

title.value = document.title;// タイトルを代入
url.value = location.href;  //URLを代入

===========================*/


/*ココから追記分*/
chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
    title.value = tabs[0].title;
    url.value = tabs[0].url;
});
```

では、`chrome.tabs.query` について詳しく説明していきます。

`chrome.tabs.query`は、条件に合うタブの情報を、NodeList 形式で返してくれるメソッドです。NodeList がよくわからない人は、普通の JavaScript の配列やオブジェクトと同じようなものと覚えておいてください。

```JavaScript
chrome.tabs.query({/*条件を記述*/}, tabs => {
});
```

例えば、上記のプログラムを実行した場合、`/*条件を記述*/` のところに記述した条件に合うタブの情報が格納された NodeList が、`tabs`に代入されます。

`tabs => {}` という書き方を初めて見る方もいらっしゃるかもしれませんが、`function (tabs) {}`と同じです。これは「アロー関数」と呼ばれるものです。気になる方は調べてみてください。

それでは、肝心の条件式について見ていきます。

条件式はオブジェクト形式で、`{項目1: true/false, 項目2: true/false, ...}` のように書いていきます。

主な「項目」は以下のとおりです。

| 項目 | 説明 |
| :---: | :--- |
| `active` | ウインドウ中のアクティブなタブか |
| `currentWindow` | 現在のウインドウにあるタブか |
| `muted` | ミュートになっているタブか |
| `pinned` | 固定されているタブか |
| `lastFocusedWindow` | 最後にフォーカスしたウインドウにあるか |

その他の「項目」については、以下の公式サイトをご覧ください。

<a href="https://developer.chrome.com/docs/extensions/reference/tabs/#method-query" target="_blank" rel="noopener noreferrer">chrome.tabs - Chrome Developers</a>

`tabs[0].url` で、条件に適したタブのうち1番目のURLを得ることができ、`tabs[0].title` で、条件に適したタブのうち1番目のタイトルを得ることができます。

この NodeList は「オブジェクト」の「配列」になっているため、配列の1番目(といっても配列の長さは1だけですが)であることを明確にする必要があります。

ここで、先程のコードを読み返してみましょう。

```JavaScript
chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
    title.value = tabs[0].title;
    url.value = tabs[0].url;
});
```

条件の部分は、`{ 'active': true, 'lastFocusedWindow': true }`となっています。これは、「ウインドウの中のアクティブなタブ」かつ「最後に開いたウインドウの中にあるタブ」ということなので、「現在見ているタブ」を指していることが分かります。

まあ、これだけ説明しておいて、`chrome.tabs.query` は後ほど削除するのですが... 理由は後ほど。

ということで、JavaScript のコード全体は以下のようになります。

```JavaScript
const title = document.getElementById("pageTitle");
const url = document.getElementById("pageURL");

chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
    title.value = tabs[0].title;
    url.value = tabs[0].url;
})
```

このコードを動かしてみると...

![成功](https://user-images.githubusercontent.com/75155258/127961499-a2e9e83a-d34c-4c1a-b68f-25aeb550070f.png)

いい感じですね！

では、今日はこの辺にして、次回はメインの「コピー機能」と SNS への「シェア機能」を実装していきます。お楽しみに！

## 問題点と予告

実は、このコードにはまだ問題があります。この画像は、Chrome の拡張機能の管理画面のスクリーンショットです。

![権限多すぎ](https://user-images.githubusercontent.com/75155258/127963556-97d4558d-cb67-40f7-8ac4-cf119b9a35bc.png)

この画像からわかるように、権限が多すぎるのです。この程度のプログラムであれば、「閲覧履歴の読み取り」をしなくとも実装できますが、結果的にユーザーを不安にさせてしまうような権限になってしまいました。

これについては、次々回で対処していきます！

## まとめ

- `chrome.tabs.query` でタブの検索が行える。

今日はお疲れさまでした！次回をお楽しみに。

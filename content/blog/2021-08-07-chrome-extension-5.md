---
author: FrogApp
title: "Chrome 拡張機能を作って公開しよう⑤　〜権限多すぎ問題を解決〜"
description: 1回15分でサクッと開発。今回は「権限多すぎ問題」を解決していきます。
categories: プログラミング
series: Chrome 拡張機能を作ろう
series_title: 権限を減らす
tags: プログラミング Chrome拡張機能 JSON JavaScript
thumbnail: /img/2021-08-07-debug.jpg
photoCredits: '<a href="https://unsplash.com/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Sigmund</a>'
photoSource: '<a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'
---

## お詫びと訂正
[本連載第4回 「コピー機能の実装」](https://blog.frogapp.net/2021-08/chrome-extension-4)のコードの一部に誤りがありました。お詫びして訂正いたします。

誤

```JavaScript
document.getElementById("LINE").addEventListener("click", ()=>{
    windowOpen("https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(tabTitle));
}, false);
```

正

```JavaScript
document.getElementById("LINE").addEventListener("click", ()=>{
    windowOpen("https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(tabUrl));
}, false);
```

## 権限を少なくする
では、本題に入ります。

前回まで書いてきたコードですが、まだ課題があります。

![権限多すぎ](https://user-images.githubusercontent.com/75155258/127963556-97d4558d-cb67-40f7-8ac4-cf119b9a35bc.png)

これは、Chrome の拡張機能の管理画面のスクリーンショットです。権限が、「閲覧履歴の読み取り」と、この拡張機能の機能に対して過大であることがわかります。

今回は、これを修正します。

やり方は簡単です。`manifest.json` の `permissions` を以下のように書き換えてください。

```JSON
"permissions": ["activeTab"],
```

`chrome://extensions` を開き、更新ボタンを押します。

![更新ボタン](https://user-images.githubusercontent.com/75155258/128589985-e072d29d-d87e-4f11-afa6-9d66016b6c7f.png)

「詳細」ボタンをクリックして、「権限」欄を見てください。

![権限](https://user-images.githubusercontent.com/75155258/128590010-5027b476-f5c0-4f95-b410-529b31257a3c.png)

「この拡張機能に特別な権限は必要ありません」と表示されていれば OK です。

## 不具合を修正する

しかし、これだけで今日の記事が終わってしまってはあっけないので、もう一つやります。

`chrome://extension` 画面で拡張機能を開き、Facebook でシェアしてみてください。

![エラー](https://user-images.githubusercontent.com/75155258/128590126-b4a4a56f-6064-4450-ad2a-e6aef655e92c.png)

エラーになります。どうやら、URL に `http://` か `https://` が含まれていないとリクエストを拒否する仕様になっているようです。

そこで、URL にこれらが存在するか調べる機能を実装していきます。

### HTML の修正
「Facebook のシェアボタン」〜「LINE で送るボタン」までを、`<div id="sns">`で囲んでください。

### JavaScript の修正

`popup.js` の `chrome.tabs.query` の中の末尾に以下のコードを追加してください。

```JavaScript
if(!/http\:\/\/|https\:\/\//.test(tabUrl)) {
    const element = document.getElementById("sns");
    element.style.marginTop = "1.5em";
    element.textContent = "このページでは SNS を用いたシェア機能をご利用になれません。ご了承ください。";
}
```

このコードに登場する `test` は、とある文字列の中に指定した文字列が含まれているかを、`true` または `false` で返すものです。

`test` の前に検索したい文字列を正規表現で指定します。正規表現について、詳しくは説明しませんが、このコードに関わっているルールを説明します。

1. 正規表現は2つの `/` (スラッシュ)の間に書く
2. `|` は「または」という意味。`/りんご|みかん/` と書いた場合、「りんご」または「みかん」が含まれているか、という意味となる
3. 正規表現の中に登場する `/`(スラッシュ)や`:`(コロン)、`;`(セミコロン)が含まれている場合、これらの文字がプログラムのコマンドと誤認識されないよう、直前に `\`(バッククオート)を入れる。

上記のコードの場合、「`http://` か `https://` が含まれているか」という意味になる。

もし、`http://` も `https://` も含まれていない場合、先程 `popup.html` に追加した`<div id="sns">` の上に余白を追加し、中のテキストを変更するようになっています。

これで、SNS でシェアした際にエラーになるのを防ぐことができます。

今日は以上です！

## まとめ
- `tabs` の代わりに `activeTab` を指定することで、権限が無駄に多くなることが防げる。
- `test` を用いると、文字列を検索することができる。

本日もお疲れさまでした！

次回は Web ストアに出品する予定でしたが、予定を変更してもう一つ機能を実装していきます。

また、今回扱ったコードは、[こちら](https://github.com/r-40021/copy_title-URL/tree/lesson_5)から見られます。

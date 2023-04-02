---
author: FrogApp
title: "Chrome 拡張機能を作って公開しよう②　〜ポップアップの作成〜"
description: 1回15分でサクッと開発。今回はポップアップの作成。
categories: プログラミング
series: Chrome 拡張機能を作ろう
series_title: ポップアップ作成
tags: プログラミング Chrome拡張機能 HTML JavaScript CSS
thumbnail: /img/2021-08-02-html.jpg
photoCredits: '<a href="https://unsplash.com/@jacksonsophat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Jackson So</a>'
photoSource: '<a href="https://unsplash.com/s/photos/html%2Fcss?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'
---
拡張機能を作るシリーズ第2弾！今回は拡張機能のポップアップを作成していきます！

これでかなり拡張機能っぽくなります。

## ポップアップとは

拡張機能のアイコンをクリックした時に出てくるもののことです。ここから拡張機能の設定や操作を行うことができます。拡張機能を使ったことがあれば、一度は目にしたことがあるでしょう。

実は、このポップアップは、**HTMLとCSSでできています**！

ということで、サクッと作っちゃいましょう！

## 今回作っていくもの

前回、「作るものはお楽しみ」と言っておきましたが、今回作っていく拡張機能が、ついに決まりました。

それは、「開いているページのタイトルとURLをコピーする拡張機能」です。

イメージはこんな感じです↓

![拡張機能のイメージ](https://user-images.githubusercontent.com/75155258/132938279-2307d4da-f781-4d5c-b5e9-2f355cf59ff1.png)

では、早速作っていきましょう！

## 設定ファイルを作る

ブラウザに、「これはこのような拡張機能ですよ」と教えてあげるための、設定ファイルを作っていきます。

拡張機能開発用のフォルダを作って、`manifest.json` を作成してください。その後、下のコードを記述してください。

```json
{
    "name": "タイトルとURLをコピー",
    "subheading": "ページのタイトルとURLを簡単にコピーできます。",
    "version": "1.0",
    "manifest_version": 3,
    "icons": {
      "16": "icon_16x16.png",
      "48": "icon_48x48.png",
      "128": "icon_128x128.png"
  },
    "action": {
      "default_title": "タイトルとURLをコピー",
      "default_icon": "icon_48x48.png",
      "default_popup": "popup.html"
    }
  }
  ```

では、この`manifest.json`について解説していきます。

| 名称 | 説明 |
| :---: | :--- |
| `name` | 拡張機能の名称 |
| `subheading` | 拡張機能の説明。ブラウザの「拡張機能の管理」ページなどに表示される。 |
| `version` | 拡張機能のバージョン。　1.0→1.0.1→1.0.2→...→1.1→...→2.0 のように新しくなっていく。アップデートのたびにバージョン番号を新しくしていく。 |
| `manifest_version` | この設定ファイル(`manifest.json`)の仕様のバージョン。ここでは最新の `3` を指定。 |
| `icons` | 拡張機能のアイコン。`16x16`、`48x48`、`128x128`の3種類の大きさを用意しなくてはならない。アイコンの画像は後ほど配布します。 |
| `action` | ポップアップに関する設定。<br><br>`default_title`で、拡張機能のアイコンにカーソルをホバーした時に表示されるテキストを指定。<br><br>`default_icon`で、ブラウザのURLバーの右側に表示される、拡張機能のアイコンを指定。ここでは、先程の`icons`で指定した`48x48`の画像を流用。<br><br>`default_popup`で、ポップアップとして表示させるHTMLファイルを指定。 |

## アイコン

アイコンは下のリンクからダウンロードできます。

`.zip`形式ですので、解凍して拡張機能の開発用フォルダの一番上の階層に、3つの画像を配置してください。

[ダウンロード](https://github.com/r-40021/raw/main/assets/2021-08-02-icon.zip)

今回は、「ICOOON MONO」様からお借りしました。この場をお借りして御礼申し上げます。

<a href="https://icooon-mono.com/15757/" target="_blank" rel="noopener noreferrer">本家様</a>

なお、現在のフォルダの中身はこのようになっています。

![フォルダ](https://user-images.githubusercontent.com/75155258/127797042-5be976a0-d12a-4653-a309-3afe987167fb.png)

## HTML ファイルの作成

それでは、HTML ファイルを記述してポップアップを作っていきます。

開発用フォルダの一番上の階層に、`popup.html` を作成し、以下のコードを記述してください。

```HTML
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="popup.css">
</head>
<body>
    <p class="hello">Hello, world</p>
    <script src="popup.js" defer></script>
</body>
</html>
```

同様に、`popup.css`も作成し、以下のコードを記述してください。

```CSS
body{
    width: 400px;
}
.hello{
    color: #333;
    font-size: 30px;
}
```

最後に、`popup.js`を作成し、以下のコードを記述してください。

```JavaScript
setTimeout(() => {
    alert("Hello, world! (from js)");
}, 700);
```

現時点でのフォルダの中身はこのようになっています。

![ファルダの中身](https://user-images.githubusercontent.com/75155258/127799634-641102be-ddef-43c8-9b93-80e54d0c24a7.png)

## テストする

ここまで、

- 設定ファイル(`manifest.json`)
- HTMLファイル(`popup.html`)
- CSSファイル(`popup.css`)
- JavaScriptファイル(`popup.js`)

を作成してきました。

それでは、ちゃんと動作するかテストしてみましょう。

テストの手順は以下のとおりです。

1. Chrome で `chrome://extensions` を開く
2. 画面右上の「デベロッパーモード」をオン
3. 「パッケージ化されていない拡張機能を読み込む」
4. 拡張機能の開発用フォルダを「開く」

このように、拡張機能がリストに追加されていれば成功です。

![拡張機能のリスト](https://user-images.githubusercontent.com/75155258/127798492-4675f125-a582-471d-bef1-b5ac7d2e1051.png)

リストに追加されていることを確認できたら、URLバーの右側にある「パズルのピースのマーク」をクリックすると表示される拡張機能の一覧に、「タイトルとURLをコピー」という拡張機能が追加されているはずなので、クリックして開いてみてください。

このようなものが表示された後、「Hello, world! (from js)」というアラートが表示されたら完璧です！

![ポップアップ](https://user-images.githubusercontent.com/75155258/127800066-956b1e03-1684-4c93-8aa3-8360e03fd955.png)

なお、拡張機能の一覧のピンのマークをクリックすると、URLバーの右側に固定されるので、今後テストをする際に便利です。

![拡張機能をピン留め](https://user-images.githubusercontent.com/75155258/127799053-701f68c1-05f0-4ebf-86d6-2a9f8843346d.png)

## まとめ

- ポップアップ付き拡張機能の作成には、`manifest.json`、HTMLファイル、JavaScript ファイル、CSS ファイルが必要である。
- `manifest.json`は拡張機能の情報を、ブラウザに伝えるためのファイルである。
- HTML、CSS、JavaScript でポップアップを作成する。ここは、普通のWebアプリと変わらない。
- Chromeの「デベロッパーモード」を使えば、拡張機能を簡単にテストできる。

いかがでしたか？

次回は、このポップアップを更に充実させていきます！お楽しみに！

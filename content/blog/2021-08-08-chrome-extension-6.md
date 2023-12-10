---
author: FrogApp
title: "Chrome 拡張機能を作って公開しよう⑥　〜コンテキストメニューを作る〜"
description: 1回15分でサクッと開発。今回は、拡張機能をコンテキストメニューからも起動できるようにします。
categories: プログラミング
series: Chrome 拡張機能を作ろう
series_title: コンテキストメニューの作成
tags:
- プログラミング
- Chrome拡張機能
- JSON
- JavaScript
thumbnail:
  url: /img/2023/12/10/context.webp
date: 2021-08-08
slug: chrome-extension-6
---


1回15分で拡張機能を作るシリーズ、第6弾！

拡張機能も完成に近づいてきました！今回は、更に利便性を向上させるため、コンテキストメニュー(右クリックで開けるメニュー)からも拡張機能を起動できるようにします。

## background.js の作成

開発用フォルダの一番上の階層に、`background.js` を作成してください。

これは、バックグラウンドで動く JavaScript ファイルで、ここからコンテキストメニューを作成することができます。

また、これを使用するにあたって、`manifest.json` の変更が必要になります。

## manifest.json の書き換え

`manifest.json` の `permissions` を以下のように書き換えてください。

```JSON
"permissions": ["activeTab","scripting","contextMenus"],
```

`scripting` は、`background.js` が、表示しているページに対してスクリプトを実行するために必要な権限です。通常、`background.js` は DOM にアクセスできないのですが、この権限を追加することにより、多少不便ではありますが、DOM にアクセスすることが可能になります。

`contextMenus` は、コンテキストメニューを使用するために必要な権限です。

また、以下の内容を追記してください。`background.js` を使用することを明示します。

```JSON
"background": {
  "service_worker": "background.js"
}
```

全体で以下のようになります。

```JSON
{
  "name": "タイトルとURLをコピー",
  "description": "ページのタイトルとURLを簡単にコピーできます。",
  "version": "1.0",
  "manifest_version": 3,
  "icons": {
    "16": "icon_16x16.png",
    "48": "icon_48x48.png",
    "128": "icon_128x128.png"
  },
  "permissions": ["activeTab","scripting","contextMenus"],
  "action": {
    "default_title": "タイトルとURLをコピー",
    "default_icon": "icon_48x48.png",
    "default_popup": "popup.html"
  },
  "background": {
    "service_worker": "background.js"
  }
}
```

## コンテキストメニューの作成

`background.js` に以下の内容を記述してください。

```JavaScript
/* コンテキストメニューを作成 */
const parent = chrome.contextMenus.create({
  id: "share",
  title: "ページを共有",
  contexts: ["all"],
});
```

ここまでできたら、コードを保存して、`chrome://extensions` を開き、更新ボタンをクリックしてください。

※以下、この操作を「拡張機能を更新する」と表現します。

![更新](https://user-images.githubusercontent.com/75155258/128589985-e072d29d-d87e-4f11-afa6-9d66016b6c7f.png)

下の画像のように、コンテキストメニューに「ページを共有」という項目が現れたでしょうか。

![コンテキストメニュー](https://user-images.githubusercontent.com/75155258/128617746-3cc15158-0ac1-47e3-b52e-ca9b637a2c23.png)

もしも現れない場合は、

- `chrome://extensions` の更新ボタンを押したか
- 書いたプログラムを保存したか
- `manifest.json` の記述は正しいか

を確認してみてください。

### コードの解説

`chrome.contextMenus.create` でコンテキストメニューを作成することができます。また、この時にコンテキストメニューの設定をオブジェクト形式で行います。

| 項目 | 説明 |
| :---: | :--- |
| `id` | 後で参照する時に用いる ID |
| `title` | コンテキストメニューに表示する文字列 |
| `contexts` | どこを右クリックした際のコンテキストメニューに追加するか。<br><a href="https://developer.chrome.com/docs/extensions/reference/contextMenus/#type-ContextType" target="_blank" rel="noopener noreferrer">詳細情報</a> |

## 子コンテキストメニューを作成する

それでは、コンテキストメニューの一つ下の階層を作っていきましょう。

やり方は簡単。先程のコードに `parentId` プロパティを追加して、親コンテキストメニューを指定するだけです。

以下のコードを追加してください。

```JavaScript
chrome.contextMenus.create({
  parentId: parent,
  id: "title",
  title: "ページタイトルをコピー",
  contexts: ["all"],
});
chrome.contextMenus.create({
  parentId: parent,
  id: "URL",
  title: "URL をコピー",
  contexts: ["all"],
});
chrome.contextMenus.create({
  parentId: parent,
  id: "both",
  title: "ページタイトルと URL をコピー",
  contexts: ["all"],
});
chrome.contextMenus.create({
  parentId: parent,
  id: "FB",
  title: "Facebook でシェア",
  contexts: ["all"],
});
chrome.contextMenus.create({
  parentId: parent,
  id: "tweet",
  title: "ツイート",
  contexts: ["all"],
});
chrome.contextMenus.create({
  parentId: parent,
  id: "LINE",
  title: "LINE で送る",
  contexts: ["all"],
});
```

## インストール・更新時にのみ実行する

(2021/08/28追記) インストール・更新時にのみ実行するようにしないとエラーが発生し、動作しなくなることが判明したため、このセクションを追加しました。記述するべきコードが抜けてしまっていたことをお詫び申し上げます。

コンテキストメニューを作成する処理を何度も行ってしまうと、エラーを引き起こすため、拡張機能をインストール / 更新したときのみ実行されるようにします。

`background.js` を以下のように変更してください。

```JavaScript
chrome.runtime.onInstalled.addListener(function (details) {
    /* コンテキストメニューを作成 */
    const parent = chrome.contextMenus.create({
      id: "share",
      title: "ページを共有",
      contexts: ["all"],
    });
 
    // (中略)
});

```

ここまでできたら、拡張機能を更新してください。

下の画像のようなコンテキストメニューになったでしょうか。

![階層化したコンテキストメニュー](https://user-images.githubusercontent.com/75155258/128617869-6ef85ba5-1362-4bc1-b351-1f46fc1a36f2.png)

## 動作をつける

`background.js` に以下のコードを追加してください。

```JavaScript
/* コンテキストメニューがクリックされた時の処理 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "title":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: title,
      });
      break;

    case "URL":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: URL,
      });
      break;

    case "both":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: both,
      });
      break;

    case "FB":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: FB,
      });
      break;

    case "tweet":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: tweet,
      });
      break;

    case "LINE":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: LINE,
      });
      break;
  }
});
function title() {
  const element = document.createElement("textarea");
  element.value = document.title;
  document.body.append(element);
  element.select();
  document.execCommand("copy");
  element.remove();
}

function URL() {
  const element = document.createElement("textarea");
  element.value = location.href;
  document.body.append(element);
  element.select();
  document.execCommand("copy");
  element.remove();
}

function both() {
  const element = document.createElement("textarea");
  element.value = document.title + "\n" + location.href;
  document.body.append(element);
  element.select();
  document.execCommand("copy");
  element.remove();
}

function FB() {
  window.open(
    "https://www.facebook.com/share.php?u=" + encodeURIComponent(location.href),
    "tweetwindow",
    "width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1"
  );
}
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(document.title) +
      "%0a&url=" +
      encodeURIComponent(location.href),
    "tweetwindow",
    "width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1"
  );
}
function LINE() {
  window.open(
    "https://social-plugins.line.me/lineit/share?url=" +
      encodeURIComponent(location.href),
    "tweetwindow",
    "width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1"
  );
}
```

### コードの解説

`chrome.contextMenus.onClicked.addListener((info, tab) => {})` で、コンテキストメニューがクリックされた際の処理を指定できます。

引数の `info` にクリックされたコンテキストメニューの情報が、`tab` に現在のタブの情報が格納されています。

`info.menuItemId` に、先程コンテキストメニューを作成した際に指定した ID が格納されているので、それで処理を分けます。

`switch` 文は `if ... else if ... else if ... else ...` と同じような処理が簡単に行える文です。
<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/switch" target="_blank" rel="noopener noreferrer">詳細情報</a>

`chrome.scripting.executeScript` で、指定したタブに指定した JavaScript のコードを挿入できます。

これを用いることで、`background.js` から DOM を操作することができます。

タブを指定する際にはタブの ID を用いるのですが、これは `chrome.contextMenus.onClicked.addListener((info, tab) => {})` の引数 `tab` 内に格納されているため、`tab.id` で参照できます。

これが `target: { tabId: tab.id }` の部分に当たります。

`function:` で、挿入する JavaScript の関数を指定します。

これで、拡張機能を更新すると、コンテキストメニューからも各種操作が行えるようになります。

## まとめ

- `background.js` でコンテキストメニューを作成できる。
- `background.js` から DOM を操作するには、`scripting` 権限が必要である。`chrome.contextMenus.onClicked.addListener((info, tab) => {})` で JavaScript コードを指定のタブに挿入できる。

今回扱ったコードは <a href="https://github.com/r-40021/copy_title-URL/tree/lesson_6" target="_blank" rel="noopener noreferrer">こちら</a> から見られます。ぜひ参考にしてみてください。

## 次回予告

次回はいよいよ、作成した拡張機能を Web ストアに出品していきます。

以下のものが必要になるので、次回までに用意しておいてください。

- Google アカウント(できれば開発用に新しく作ったほうが良い[^1])
- 5ドル(Web ストアに開発者登録をする際に必要)
- クレジットカードまたはデビットカード　本人確認を済ませた LINE プリペイドカードでも可

それでは、次回をお楽しみに！本日もお疲れさまでした！

[^1]:問い合わせ用のメールアドレスが必要になります。これは公開されるので、本名を隠したい人は匿名の Google アカウントを用意しておいてください。

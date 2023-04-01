---
author: FrogApp
title: "Chrome 拡張機能を作って公開しよう④　〜コピー機能の実装〜"
description: 1回30分でサクッと開発。要となるコピー機能の実装を行います
categories: プログラミング
series: Chrome 拡張機能を作ろう
series_title: コピー機能実装
tags: プログラミング Chrome拡張機能 JavaScript
thumbnail: /img/2021-08-04-twitter.jpg
photoCredits: '<a href="https://unsplash.com/@alexbemore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Alexander Shatov</a>'
photoSource: '<a href="https://unsplash.com/s/photos/twitter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'
---

こんにちは！1回30分で拡張機能を作るシリーズ、第4弾です。今回は、この拡張機能の要、「コピー機能」を実装していきます。

「あれ？15分じゃなかったのかよ！」と気づかれた方、そうです。1回分のボリュームが15分に収まりきらないということで、誠に勝手ながら30分に延長させていただきました。

「15分しか時間がない」という方、ご安心ください。最後にも触れますが、明日・明後日の連載はお休みします。ということで、ゆとりを持って取り組んでみてください。

では、本題に入っていきましょう。(切り替えが早い)

## コピーボタンの配置
`popup.html` を次のように書き換えてください。
`<!--ここから-->` という部分から、`<!--ここまで-->` という部分までが追加する分です。追加する部分は2箇所あります。

```HTML
<div class="text">
 <input type="text" id="pageTitle" class="column" readonly>
</div>


<!--ここから-->
<div class="copy">
  <button title="ページタイトルをコピー" id="copyTitle">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16" aria-label="ページタイトルをコピー">
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>
  </button>
</div>
<!--ここまで-->


<!--省略-->

<div class="text">
  <input type="url" id="pageURL" class="column" readonly>
</div>


<!--ここから-->
<div class="copy">
  <button title="URLをコピー" id="copyURL">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16" aria-label="URLをコピー">
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>
  </button>
</div>
<!--ここまで-->
```

また、`<script>` タグの直前に、以下のコードを追記してください。

```HTML
<div class="content">
    <div class="both">
      <button title="タイトルとURLをコピー" id="copyBoth">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard withText" viewBox="0 0 16 16" aria-label="タイトルとURLをコピー">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>タイトルと URL をコピー
      </button>
    </div>
  </div>
```

このままではボタンがむき出しになっていてかっこ悪いので、`popup.css` に以下の内容を追記してください。

一応、コメントに解説のようなものを載せました。よかったら参考にしてください。

```CSS
/*ボタンに適用するCSS*/
button {
  appearance: none; /*デフォルトの見た目を無効に*/
  -webkit-appearance: none; /*あまり意味はないが、古いブラウザ向け。デフォルトの見た目を無効にする。*/
  border: 0; /*枠線を消す*/
  background-color: #4c3cda; /*背景色を指定*/
  color: #fff;/*文字色を白に*/
  padding: 8px 16px; /*内側の余白を指定*/
  font-size: 16px; /*フォントサイズを16pxに*/
  border-radius: 5px; /*角を丸くする*/
  cursor: pointer; /*カーソルを手のひらの形状にする*/
  transition: background-color .2s; /*背景色が変わるときにアニメーション*/
}
button:hover {
/*カーソルがボタンに乗っているとき*/
  background-color: #2f22a3; /*背景色を変更*/
}
button:focus {
/*tabキーなどで、ボタンがフォーカスされているとき*/
  outline: none; /*デフォルトの枠線を消す*/
  box-shadow: 0 0 0 4px #cbd6ee; /*代わりの枠線*/
}

/*ボタンの中のアイコンに適用するCSS*/
button svg {
  fill: #fff; /*ボタンの中のアイコンの色を白色にする*/
}
svg.withText{
    vertical-align: middle; /*隣接するテキストを、アイコンの上下中央にラインに配置*/
    margin-right: .7em; /*右側に余白をあける*/
}
```

ここまでやると、以下の画像のようになります。ボタンにスタイルが適用されていて、いい感じですね！

![CSS適用後](https://user-images.githubusercontent.com/75155258/128103219-9d6ebeaa-f9c2-42da-83da-5e7b2d233983.png)

## コピー機能の実装

それでは、本題の「コピー機能の実装」に移ります。

流れとしては、
1. コピーボタンをクリックする
2. クリップボードに URL またはタイトルがコピーされる

「コピーボタンをクリックしたとき」は、`addEventListener` を使えばいけそうです。

また、クリップボードにコピーするという動作は、`navigator.clipboard.writeText(コピーしたい文字列)` でできます。

それでは、これを組み合わせてみましょう。`popup.js` に、以下のようにコードを追加してください。`/*ここから*/` から、`/*ここまで*/` の部分が追加するコードです。

```JavaScript
chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
    title.value = tabs[0].title;
    url.value = tabs[0].url;
 
 
    /*ここから*/
   document.getElementById("copyTitle").addEventListener("click",()=>{
        navigator.clipboard.writeText(tabs[0].title);
    }, false);
    document.getElementById("copyURL").addEventListener("click",()=>{
        navigator.clipboard.writeText(tabs[0].url);
    }, false);
    document.getElementById("copyBoth").addEventListener("click",()=>{
        navigator.clipboard.writeText(tabs[0].title + "\n" + tabs[0].url);
    }, false);
    /*ここまで*/
 
 
});
```

それでは、「コピー」ボタンを押して、動作を確認してみてください！

ちなみに、「タイトルとURLを両方コピー」した場合は、タイトルとURLの間に改行が入ります。これが、上記のコードの `\n` に当たる部分です。JavaScriptでは、`\n` を使うと文字列を改行させることができます。

## コピーしたことを伝える
しかし、これではボタンを押しても何も起こらないので、本当にコピーされたのか疑問に思いますよね。

そこで、コピーボタンを押したら、クリップボードのアイコンが「チェックアイコン」に変わるようにしましょう。

仕組みはこうです。

1. コピーボタンが押されたら、クリップボードのアイコンを非表示にし、チェックアイコンを表示する
2. 5秒後にもとに戻す
3. ボタンがクリックされたとき、他のボタンがチェックアイコンだったらもとに戻す

まずは、`popup.html` から変更していきます。すべてのクリップボードアイコンのあとに、以下のコードを追加してください。(クリップボードアイコンには、`bi-clipboard` というクラス名がついています。目印にしてください。)

```HTML
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2 checkIcon" viewBox="0 0 16 16" style="display: none;">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>
```

ただ、この時点でポップアップを開いてもなんの変化もありません。先程追加したチェックアイコンには、`style="display: none;"` とあります。これにより、非表示になっているからです。

では、`popup.js` に、ボタンを押したときにチェックアイコンを表示させるようにプログラムします。

「クリップボードアイコンをチェックアイコンに入れ替える」という処理は何度か使いそうなので、関数にまとめます。

`popup.js` の末尾に以下のコードを追加してください。

```JavaScript
let timeout;
function showCheck(parentId) {
    clearTimeout(timeout); //5秒後に予定されている処理をキャンセル
    const checkIcons = document.getElementsByClassName("checkIcon");
    for (let i = 0; i < checkIcons.length; i++) {
        checkIcons[i].style.display = "none"; //一旦すべてのチェックアイコンを非表示に
    }
    const clipIcons = document.getElementsByClassName("bi-clipboard");
    for (let i = 0; i < clipIcons.length; i++) {
        clipIcons[i].style.display = ""; //一旦すべてのクリップボードアイコンを表示
    }
    const child = document.getElementById(parentId).children; //ボタンの子要素を取得
    child[0].style.display = "none"; //ボタンの子要素のうち1番目、つまりクリップボードアイコンを非表示に
    child[1].style.display = ""; //ボタンの子要素のうち2番目、つまりチェックアイコンを表示する

    timeout = setTimeout(() => {
    /*5秒後の処理*/
        child[0].style.display = ""; //クリップボードアイコンを表示する
        child[1].style.display = "none"; //チェックアイコンを非表示に
    }, 5000);
}
```

そして、ボタンがクリックされた際にこの関数を呼び出すようにします。引数 `parentId` には、ボタンのIDを代入します。

`navigator.clipboard.writeText()` の次の行に、下記の「候補1」〜「候補3」のいずれかを追加してください。どの `navigator.clipboard.writeText()` の後に、どのコードを追加するのかは、是非自分で考えてみてください！

```JavaScript
/*候補１*/
showCheck("copyTitle");

/*候補2*/
showCheck("copyURL");

/*候補3*/
showCheck("copyBoth");
```

これで、コピーボタンをクリックするとチェックアイコンに切り替わるはずです。

もし、クリックしたのと違うボタンのアイコンが変化している場合は、上記のコードを追加する場所を間違えています。

## SNS へのシェアボタンを追加する
SNS で直接投稿・送信ができるボタンを設置します。

このようなボタンについては、公式が「このURLにアクセスすればシェアできるよ」と公開してくれているので、それに則って作成していきます。

まずは `popup.html` から行きましょう。

`<script>` タグの直前にある `<div class="content">` の中身をすべて削除してください。そして、以下のコードに書き換えてください。

```HTML
<div class="both">
  <button title="タイトルとURLをコピー" id="copyBoth" class="shareSNS copyBoth">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard withText" viewBox="0 0 16 16" aria-label="タイトルとURLをコピー">
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2 checkIcon withText" viewBox="0 0 16 16" style="display: none;">
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg>
    タイトルと URL をコピー
  </button>
</div>
<div class="toFB">
  <button title="シェア" id="shareToFB" class="FB shareSNS">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook withText" viewBox="0 0 16 16" aria-label="Facebook">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>
    シェア
  </button>
</div>
<div class="toTwitter">
  <button title="ツイート" id="tweet" class="twitter shareSNS">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter withText" viewBox="0 0 16 16" aria-label="Twitter">
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
    </svg>
    ツイート
  </button>
</div>
<div class="toLINE">
  <button title="LINE で送る" id="LINE" class="LINE shareSNS">
    <svg class="withText" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 448 512" aria-label="LINEで送る">
      <!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
      <path d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"></path>
  </svg>
    LINE で送る
  </button>
</div>
```

しかし、これではレイアウトやデザインがメチャクチャなので、CSS で整えます。`popup.css` の末尾に以下のコードを追加してください。

```CSS
.shareSNS{
    background-color: #fff;
    width: 100%;
    text-align: center;
    margin: .3em 0;
    border-width: 2px;
    border-style: solid;
}

.copyBoth{
    color: #4c3cda;
    border-color: #4c3cda;
}
.copyBoth svg{
    fill: #4c3cda;
}
.copyBoth:hover{
    background-color: #4c3cda;
}

.FB{
    color: #1877f2;
    border-color: #1877f2;
}
.FB svg{
    fill: #1877f2;
}
.FB:hover{
    background-color: #1877f2;
}

.twitter{
    color: #1DA1F2;
    border-color: #1DA1F2;
}
.twitter svg{
    fill: #1DA1F2;
}
.twitter:hover{
    background-color: #1DA1F2;
}

.LINE{
    color: #00B900;
    border-color: #00B900;
}
.LINE svg{
    fill: #00B900;
}
.LINE:hover{
    background-color: #00B900;
}

.shareSNS:hover{
    color: #fff;
}
.shareSNS:hover svg{
    fill: #fff;
}
```

下の画像のようになっていればOKです。

![SNS シェア](https://user-images.githubusercontent.com/75155258/128118980-3cdc3850-cf07-4da1-99b3-0f130a1f68e6.png)

では、`popup.js` で動きを付け加えていきます。

これと同時に、`tabs[0].title` と `tabs[0].url` を定数に格納します。後で参照しやすくするためです。

ということで、`chrome.tabs.query` の中身の先頭に以下のコードを追加してください。

```JavaScript
const tabTitle = tabs[0].title;
const tabUrl = tabs[0].url;
```

そして、コードの中の `tabs[0].title` と `tabs[0].url` をそれぞれ、`tabTitle` と `tabUrl` に書き換えてください。

その後、以下のコードを `chrome.tabs.query` の中身の末尾に追加してください。

```JavaScript
/*Facebook*/
document.getElementById("shareToFB").addEventListener("click", () => {
    windowOpen("https://www.facebook.com/share.php?u=" + encodeURIComponent(tabUrl));
}, false);

/*Twitter*/
document.getElementById("tweet").addEventListener("click", () => {
    windowOpen("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tabTitle) + "%0a&url=" + encodeURIComponent(tabUrl));
}, false);

/*LINE*/
document.getElementById("LINE").addEventListener("click", ()=>{
    windowOpen("https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(tabUrl));
}, false);
```

下の関数も定義してください。これは、ポップアップを開く際に用いられています。引数 `url` がポップアップを開くURLに当たります。

```JavaScript
function windowOpen(url) {
    window.open(url, 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1')
    this.close();
    return false;
}
```

では、SNS シェア部分のコードの解説をします。

主要SNS では、指定された URL にアクセスすることで、シェアができるようになっています。SNS サービス毎の URL は以下のとおりです。

| サービス名 | URL |
| :---: | :--- |
| Facebook | {% raw %}`https://www.facebook.com/share.php?u={{ URL }}`{% endraw %} |
| Twitter | {% raw %}`https://twitter.com/share?text={{ ツイート文 }}&url={{ URL }}&hashtags={{ ハッシュタグ (カンマ区切りで複数指定可能) }}`{% endraw %} |
| LINE | {% raw %}`https://social-plugins.line.me/lineit/share?url={{ URL }}`{% endraw %} |

{% raw %}`{{ URL }}`{% endraw %}の部分に共有したい URL を入れると、上記のような SNS でシェアすることができます。

また、Twitter の場合は、ツイート文やハッシュタグも指定できます。要領は URL と同じで、指定された部分に文字を入れるだけです。

上記のコードの中に、`encodeURIComponent()` というものが頻繁に使われていますが、これは日本語や記号などを、コンピューターが扱いやすいように変換するためのものです。URL の中に日本語などが紛れていると、予期せぬトラブルの原因になります。そこで、この処理が必要になるわけです。

## コード全体
最後に、コードの全体を提示します。「うまく動かない」等の場合は参考にしてみてください。

`popup.html`

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
    <div class="copy">
      <button title="ページタイトルをコピー" id="copyTitle">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16" aria-label="ページタイトルをコピー">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2 checkIcon" viewBox="0 0 16 16" style="display: none;">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
    </div>
  </div>
</div>
<div class="content">
  <label for="pageURL" class="column">URL</label>
  <div class="grid">
    <div class="text">
      <input type="url" id="pageURL" class="column" readonly>
    </div>
    <div class="copy">
      <button title="URLをコピー" id="copyURL">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16" aria-label="URLをコピー">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2 checkIcon" viewBox="0 0 16 16" style="display: none;">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
    </div>
  </div>
  </div>
  <div class="content">
    <div class="both">
      <button title="タイトルとURLをコピー" id="copyBoth" class="shareSNS copyBoth">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard withText" viewBox="0 0 16 16" aria-label="タイトルとURLをコピー">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2 checkIcon withText" viewBox="0 0 16 16" style="display: none;">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
        タイトルと URL をコピー
      </button>
    </div>
    <div class="toFB">
      <button title="シェア" id="shareToFB" class="FB shareSNS">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook withText" viewBox="0 0 16 16" aria-label="Facebook">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
        シェア
      </button>
    </div>
    <div class="toTwitter">
      <button title="ツイート" id="tweet" class="twitter shareSNS">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter withText" viewBox="0 0 16 16" aria-label="Twitter">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
        ツイート
      </button>
    </div>
    <div class="toLINE">
      <button title="LINE で送る" id="LINE" class="LINE shareSNS">
        <svg class="withText" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 448 512" aria-label="LINEで送る">
          <!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
          <path d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"></path>
      </svg>
        LINE で送る
      </button>
    </div>
  </div>

  <script src="popup.js" defer></script>
</body>

</html>
```

`popup.css`

```CSS
body {
  letter-spacing: 0.15em;
  width: 400px;
  font-size: 16px;
}

* {
  color: #606c76;
  box-sizing: border-box;
  font-family: -apple-system, blinkMacSystemFont, "Helvetica Neue", "Segoe UI",
    "Arial", "Roboto", "Hiragino Kaku Gothic ProN", YuGothicM, YuGothic, Meiryo,
    "Noto Sans JP", sans-serif;
}

@font-face {
  font-family: YuGothicM;
  font-weight: normal;
  src: local("YuGothic-Medium"), local("Yu Gothic Medium"),
    local("YuGothic-Regular");
  /* Windows8.1ではMediumがないのでRegularを指定 */
}

@font-face {
  font-family: YuGothicM;
  font-weight: bold;
  src: local("YoGothic-Bold"), local("Yu Gothic");
}

.content {
  margin: 2em 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.2em 1em;
  width: 100%;
  margin-top: 0.3em;
}

.text {
  position: relative;
}

.text input {
  color: #727d86;
  font: 16px sans-serif;
  width: 100%;
  padding: 0;
  padding-bottom: 0.1em;
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
  content: "";
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #4c3cda;
}

.text .column {
  width: 100%;
  height: 100%;
}

button {
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  background-color: #4c3cda;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color .2s;
}
button:hover {
  background-color: #2f22a3;
}
button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}
button svg {
  fill: #fff;
}
svg.withText{
    vertical-align: middle;
    margin-right: .7em;
}

.shareSNS{
    background-color: #fff;
    width: 100%;
    text-align: center;
    margin: .3em 0;
    border-width: 2px;
    border-style: solid;
}

.copyBoth{
    color: #4c3cda;
    border-color: #4c3cda;
}
.copyBoth svg{
    fill: #4c3cda;
}
.copyBoth:hover{
    background-color: #4c3cda;
}

.FB{
    color: #1877f2;
    border-color: #1877f2;
}
.FB svg{
    fill: #1877f2;
}
.FB:hover{
    background-color: #1877f2;
}

.twitter{
    color: #1DA1F2;
    border-color: #1DA1F2;
}
.twitter svg{
    fill: #1DA1F2;
}
.twitter:hover{
    background-color: #1DA1F2;
}

.LINE{
    color: #00B900;
    border-color: #00B900;
}
.LINE svg{
    fill: #00B900;
}
.LINE:hover{
    background-color: #00B900;
}

.shareSNS:hover{
    color: #fff;
}
.shareSNS:hover svg{
    fill: #fff;
}
```

`popup.js`

```JavaScript
const title = document.getElementById("pageTitle");
const url = document.getElementById("pageURL");

chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
    const tabTitle = tabs[0].title;
    const tabUrl = tabs[0].url;

    title.value = tabTitle;
    url.value = tabUrl;
    document.getElementById("copyTitle").addEventListener("click", () => {
        navigator.clipboard.writeText(tabTitle);
        showCheck("copyTitle");
    }, false);
    document.getElementById("copyURL").addEventListener("click", () => {
        navigator.clipboard.writeText(tabUrl);
        showCheck("copyURL");
    }, false);
    document.getElementById("copyBoth").addEventListener("click", () => {
        navigator.clipboard.writeText(tabTitle + "\n" + tabUrl);
        showCheck("copyBoth");
    }, false);

    document.getElementById("shareToFB").addEventListener("click", () => {
        windowOpen("https://www.facebook.com/share.php?u=" + encodeURIComponent(tabUrl));
    }, false);

    document.getElementById("tweet").addEventListener("click", () => {
        windowOpen("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tabTitle) + "%0a&url=" + encodeURIComponent(tabUrl));
    }, false);
    document.getElementById("LINE").addEventListener("click", ()=>{
        windowOpen("https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(tabUrl));
    }, false);

});

let timeout;
function showCheck(parentId) {
    clearTimeout(timeout);
    const checkIcons = document.getElementsByClassName("checkIcon");
    for (let i = 0; i < checkIcons.length; i++) {
        checkIcons[i].style.display = "none";
    }
    const clipIcons = document.getElementsByClassName("bi-clipboard");
    for (let i = 0; i < clipIcons.length; i++) {
        clipIcons[i].style.display = "";

    }
    const child = document.getElementById(parentId).children;
    child[0].style.display = "none";
    child[1].style.display = "";

    timeout = setTimeout(() => {
        child[0].style.display = "";
        child[1].style.display = "none";
    }, 5000);
}

function windowOpen(url) {
    window.open(url, 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1')
    this.close();
    return false;
}
```


さて、今日はここまでです。お疲れさまでした！

## TODO
- 前回予告した、「権限を少なくする作業」(次回)
- Chrome Web ストアで公開(次々回)

※今後の予定は変更になる可能性があります

## まとめ
- `navigator.clipboard.writeText(コピーしたい文字列)` で文字列をクリップボードにコピーできる。
- 指定のURLにアクセスすれば、各種SNSでシェアすることができる。

今回は前回以上にボリューミーでしたが、ここまで読んでいただきありがとうございました。

さて、ここまで駆け足でやってきてしまったので、明日、明後日、の連載はお休みします。今までの復習を行ったり、少し息抜きしたりしてください。

それでは、次回(8/7)をお楽しみに！

## 2021/8/7 追記
「LINE で送る」ボタンに関するコードに誤りがあったため訂正しました。

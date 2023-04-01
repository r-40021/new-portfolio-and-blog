---
author: FrogApp
title: "GitHub 公式がブラウザ上で VS Code を使える機能を実装したので、レビュー"
description: VS Code がまんまブラウザで使える
categories: プログラミング
tags: プログラミング GitHub VSCode
---

先日、GitHub がブラウザ上で VS Code を使える新機能を発表しました。


以前から予告されている Codespaces とは異なり、すべてのユーザーが無料で使用できます。

ということで、私も使ってみました。

ちなみに、この記事も Web Editor を使って書いています。

## 使い方
使い方はとても簡単。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🤫 New shortcut: Press . on any GitHub repo. <a href="https://t.co/AHTSDot4qc">pic.twitter.com/AHTSDot4qc</a></p>&mdash; GitHub (@github) <a href="https://twitter.com/github/status/1425505817827151872?ref_src=twsrc%5Etfw">August 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

このツイートの動画のように、GitHub のリポジトリ画面で、キーボードの「.」(ピリオド)キーを押すだけ！

## どんなものか

簡単に行ってしまえば、「VS Code がブラウザ上でも動く」サービスです。

GitHub が来月から提供を開始する類似のサービスとして、Codespaces がありますが、これは法人向けで、料金も発生します。その分機能が多いです。

一方、こちらの Web  Editor は誰でも無料で使えるサービスですが、機能は限られています。


## 使用感

使ってみましたが、とてもサクサク動きます。使っているのは、Celeron CPU の低スペノートPCなのですが、もっさりすることもなく、快適に使えます。

気になった点として、画面右下に「Layout: us」と表示されており、JIS配列では使えないのかと思っていましたが、問題なく使えました。記号の入力も含めてバッチリです。

![レイアウトがUSになっている](https://user-images.githubusercontent.com/75155258/129321958-cced00cc-e868-48f3-9dd5-b496114f544b.png)


では、この Web Editor のメリット・デメリットをご紹介します。

## メリット

### ローカルの VS Code の環境が同期される
ローカルの VS Code で GitHub アカウントでの同期を有効にしている場合は、Web Editor にも反映されます。

ただ、拡張機能と一部の設定は同期されませんでした...

### 動作が軽い

低スペックのパソコンでも、快適に動作します。

### GitHub との相性が抜群
当たり前ですが、GitHub との相性は抜群です！

Commit はもちろん、Issue や Pull Request だってできます。

ちなみに、Web Editor でコミットをすると、GitHub の方にも反映されます。`git push` の工程がないので、はじめは戸惑うかもしれませんが、すぐに慣れます。

### 拡張機能が使える

拡張機能もインストールできます。スニペット等もそのまま使えるので、安心です。

### OS を問わない
PC のみならず、タブレットでも開発ができます。スマホだと画面が小さすぎて無理がありますが。


## デメリット

### ターミナルが使えない
ターミナルは残念ながら使えません。Codespaces だと使えるようですが...

拡張機能でカバーできる部分もあるかもしれませんが、あまりハードな開発はできません。

### 使えない拡張機能が多い

ローカルでは使えても、Web Editor では使えない拡張機能が結構多いです。

個人的には、

- Live Server
- テキスト校正くん

が使えないのが痛いですね...

フォーマッターも使えません。逆に、スニペット系はサポートされているものが多いです。

Live Server に関しては、類似サービスの <a href="https://www.gitpod.io/" target="_blank" rel="noopener noreferrer">Gitpod</a> では使えるので、 Gitpod に比べるとやや劣った印象を受けます。

ただ、Gitpod は無料プランだと時間制限があるので、結局はローカル環境での開発が一番快適でしょう。

法人の場合は Codespaces が良いと思います。実際に GitHub 社のエンジニアの方々が使いながら改善されているので、「かゆいところに手が届く」仕様になっていると思います。Codespaces ならターミナルも使えますし。

### Markdown を扱っている時、画像を挿入できない
昔からある GitHub のブラウザ上の編集画面では、画像をドラッグ&ドロップすれば Markdown で書いているものに画像を挿入できたのですが、Web Editor ではできません。

これが地味に面倒。いちいち Issue かなんかの編集画面に画像をアップロードして、URL を Web Editor にコピペしないといけない。

ただ、昔ながらのブラウザ上の編集画面とは違って、リアルタイムで作業が保存される(コミットはされない)点は便利です。

## どのような用途に向いているか
- コンパイルがいらない言語(JavaScript、Python など)での軽いプログラミング
- ブログの執筆
- コードの閲覧

Web Editor の用途はかなり限られてしまいますが、手軽な開発環境としてはかなり優秀ではないのでしょうか。

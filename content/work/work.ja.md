---
author: FrogApp
title: アプリ一覧
date: '2023-04-01T00:00:00.000Z'
description: これまでに作ってきたアプリの一覧です。
tags:
  - javascript
  - html
  - css
  - web
  - apps
  - works
thumbnail:
  url: img/2023/04/01/website.webp
  author: 'Pankaj Patel'
  authorURL: 'https://unsplash.com/@pankajpatel'
  origin: Unsplash
  originURL: https://unsplash.com/photos/Ylk5n_nd9dA
url: works
---

技術力＜＜＜＜＜使いやすさを念頭に、頑張ってアプリを作っています。\
(技術力も高めねば……)

## ウェブアプリ

### やまだのタイマー

![やまだのタイマー](/img/works/timer.webp)

目覚まし時計とタイマーのいいとこ取りをした、ちょっと変わったタイマーです。

もともと学校でクラス解散までの時間をカウントダウンする目的で作ったのですが、それ以外にもいろいろな機能を追加し様々な用途で使えるようにしました。

* 設定時刻がパラメータに格納されるので、URL を共有するだけで仲間と一緒に緊迫のカウントダウンを楽しめます。
* ブラウザーのタイトルバーに残り時間が表示されるので、他の作業をしていても残り時間を確認できます。
* プッシュ通知にも対応。音が出せない場所でも使えます。
* アラーム音を好きなものに変えられます。
* オフラインでも使えます。

[アプリを開く](https://timer.frogapp.net)

[ソースコードを見る](https://github.com/r-40021/countdown-timer)

### やまだBINGO

![やまだBINGO](/img/works/bingo.webp)

インストール不要で、デバイスを問わず使えるビンゴマシーン。シンプルで使いやすい上に、履歴の自動保存機能まで搭載しています。\
\* 一部の太古のブラウザーでは保存機能に対応していません。

また、誤ってボタンを押してしまった際に操作を取り消すことができる機能を搭載。ビンゴ大会のあるあるなハプニングにも、戸惑うことなく対応できます。

[アプリを開く](https://bingo.frogapp.net/)

[ソースコードを見る](https://github.com/r-40021/bingo)

### ストップウォッチ

![ストップウォッチ](/img/works/stopwatch.webp)

シンプルすぎるストップウォッチ。

作業に集中できるよう、広告を始めとした余計なものを取り除きました。

ショートカットキーも搭載し、「スペース」キーでスタート / ストップ、「c」キーでリセットの操作を行えます。

[アプリを開く](https://stopwatch.frogapp.net/)

[ソースコードを見る](https://github.com/r-40021/stopwatch/)

### 文字起こしツール

![文字起こしツール](/img/works/speech.webp)

ブラウザーだけで文字起こしが手軽にできるアプリです。

日本語のみならず、アメリカ英語・イギリス英語に対応しているため英語の発音練習にも最適です。

また、書き起こした文章はテキストファイルに書き出すことができます。

まだ試験段階の技術を使用しているため、一部のブラウザーでは正常に機能しません。Chrome、Edge 等の最新のブラウザーでご利用下さい。

[アプリを開く](https://speech.frogapp.net/)

[ソースコードを見る](https://github.com/r-40021/web-speech-api)

### 簡易テキスト読み上げくん

![簡易テキスト読み上げくん](/img/works/read.webp)

手軽に音声読み上げができるサイトです。

読み上げたい文字を入力して Enter キーを押すだけで文字が読み上げられます。

必要最低限の機能しか搭載していない分、非常にシンプルなものになっています。

某検索エンジンの画面と似ている？まさかそんなわけ……

[アプリを開く](https://read.frogapp.net/)

[ソースコードを見る](https://github.com/r-40021/read-text)

### Snapdrop JP

![Snapdrop JP](/img/works/snapdrop-jp.webp)

AirDrop みたいなことがブラウザーでできる、[Snapdrop](https://snapdrop.net/) を日本語化したアプリです。

英語特有のノリの文章を訳すのは大変でまだ不自然な部分が残っていますが、今後改善していきます。

[アプリを開く](https://share.frogapp.net/)

[ソースコードを見る](https://github.com/r-40021/snapdrop-jp)

## ブラウザー拡張機能

### Rename Tab

![Rename Tab](/img/works/rename-tab.png)

ブラウザーのタブに表示されるアイコンを非表示にし、ウェブサイト名を別のものに置き換える拡張機能です。

ほかのタブで開いているウェブページを人に見られたくない場合などに使えます。

[インストール](https://chrome.google.com/webstore/detail/rename-tab/nbpkdabdmbefnemcjehinaeklgmngdoo)

[ソースコードを見る](https://github.com/r-40021/rename_tab)

### ページ簡単共有

![ページ簡単共有](/img/works/share.png)

閲覧しているページのタイトルや URL をコピーしたり、各種 SNS でシェアしたりできる拡張機能です。

簡単な操作で、すぐにシェアできます。

また、安心してインストールできるようにするために、インストール時に権限を一切要求しないようにしました。

[インストール](https://chrome.google.com/webstore/detail/easy-page-sharing/eoccdpbaigkllhflcgidhpcedgmlckkp)

[ソースコードを見る](https://github.com/r-40021/copy_title-URL)

### 文字数カウント

![その場で字数を確認](/img/works/count-character.jpg)

ウェブサイト上のテキストボックスに文字を入力した際に、リアルタイムで文字数を表示する拡張機能です。

フォームの自由記述で文字数制限がある場合などに使えます。

[インストール (Chrome)](https://chrome.google.com/webstore/detail/%E6%96%87%E5%AD%97%E6%95%B0%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88/bhfihcmmnnagikobmgakbjliddjmfgmd)

[インストール (Firefox)](https://addons.mozilla.org/ja/firefox/addon/count-character/)

[ソースコードを見る](https://github.com/r-40021/count-character)

### やっぱり Noto Sans

![フォントを置き換えて見やすく](/img/works/replace-font.jpg)

ウェブサイト上の読みづらい・美しくない (と作者が勝手に思っている) フォントを、読みやすく美しい Noto Sans に置き換える拡張機能です。

気付いたらユーザー数が500人を超えていて驚いています。

[インストール (Chrome)](https://chrome.google.com/webstore/detail/oecglhldbofcklanmhckefiflhfhabdd)

[インストール (Firefox)](https://addons.mozilla.org/ja/firefox/addon/replace-with-noto/)

[ソースコードを見る](https://github.com/r-40021/replace-font)

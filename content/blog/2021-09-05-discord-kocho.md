---
author: FrogApp
title: "【完全無料・24時間稼働】Discord の bot を作った話"
description: 1円もかけずに運営
categories: SNS
tags:
- Discord
- bot
- 自動化
- Glitch
thumbnail:
  url: /img/2023/12/10/discord-bot.webp
date: 2021-09-05
slug: discord-kocho
---

こんにちは！今回は、**1円もかけずに** Discord の bot を作ったのでその話をしていこうと思います。

{{< alert color="warning" >}}
    以下の記事で、「GASを使ってGlitchのサーバーがスリープ状態に入らないようにする」方法が紹介されていますが、今後禁止される可能性があるとのことです。  
    ちょっとしたDiscordのbotを作る程度であれば問題ないと思われますが、Glitchに過度な負担をかけないように十分注意してください。  
    [Ping Services on Glitch — Glitch Blog](https://blog.glitch.com/post/ping-services)
{{< /alert >}}

## 作ったもの

「校長先生風の bot」を作りました。

サーバーがにぎやかになっていい感じです。

![動いている様子](https://user-images.githubusercontent.com/75155258/132112814-bbe4b7ab-eaea-4732-b9ed-66f0148ea31c.png)

### 説明書

この bot を導入してみたい方は、下のリンクから見られる説明書に導入方法が載っているので、参考にしてください。

<a href="https://gist.github.com/r-40021/b53cfa3c53f93b805cc53ea7b0eb0fe3" target="_blank" rel="noopener noreferrer">取扱説明書</a>

## 作り方

どのようにして作ったのか、説明します。

### 使ったサービス

すべて無料のものです。

* Glitch (Node.js で色々動かせるサービス)
* Google Apps Script (Glitch サーバーのスリープ防止)

### 参考にしたサイト

<a href="https://note.com/exteoi/n/nf1c37cb26c41" target="_blank" rel="noopener noreferrer">誰でも作れる！Discord Bot（基礎編）｜EOi｜note</a>

とてもわかりやすかったです。`npm` などのパッケージ管理ツールを使ったことがあり、JavaScript がある程度できる人であれば簡単に作れると思います。

#### 注意点

とても分かりやすいサイトなのですが、情報が1年前のものなので今とは違う点がいくつかあります。

##### 「New Project」から「glitch-hello-node」を選ぶ

上記の note には「hello-express」を選択するように書いてありますが、現時点でそのような項目はないので、代わりに「glitch-hello-node」を選択してください。

そして、プログラムの編集画面に遷移したら、`package.json` と `server.js` 以外は削除してください。

![必要ないファイルやフォルダを削除する](https://user-images.githubusercontent.com/75155258/132113095-b19a91d9-5963-4a24-bb63-3d71ffeedfc7.png)

その後の手順は変わりません。

##### Glitch でプロジェクトを非公開にするには有料プランに加入する必要がある

とはいえ、Discordの token をきちんと環境変数に入れておけば特に問題ないと思います。

機密情報はコードに書かないで、確実に環境変数に入れるようにしてください。

## まとめ

いかがでしたか？

このように、簡単かつ無料で Discord の bot を作成できるので、ぜひ試してみてください！

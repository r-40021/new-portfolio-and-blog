---
author: FrogApp
categories: PC
tags:
- Linux
- 学校
title: 学校でLinuxを使う上で困ったこと
thumbnail:
  url: "/img/2022/06/26/hallway.jpg"
headAlt: 廊下
author: 'Nguyen Khanh Ly'
authorURL: 'https://unsplash.com/@nkly1004?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
photoSource: '<a href="https://unsplash.com/s/photos/school?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"  target="_blank"
  rel="noopener noreferrer">Unsplash</a>'
date: 2022-06-26
slug: linux-at-school
---

私が通っている学校はBYOD制で、自由にデバイスを持ち込めるのですが、Linux(Manjaro)を実際に学校で使用してみて困ったことをまとめてみます。

<div class="warning-card">

学校からOSについて指定がある場合には、そちらに従うようにしてください。

</div>

## 基本的に問題なし

学校にもよると思いますが、ほとんどのことはなんの問題もなく普通に行えます。

私が学校で端末を使うのは以下のような場面です。

* Google Workspaceでの共同作業
* その他Webツールの使用

ブラウザさえあれば出来ることばかりです。

ただし、ブラウザはFirefoxがデフォルトになっているディストリビューションが多いと思いますが、たまにFirefoxでは動かないサイトもあるのでChromium系のブラウザも入れておいたほうが安心です。

## 困ったこと

### インストール直後は大変

ディストリビューションにもよりますが、私が使っているManjaroは日本語入力が初期状態ではできません。

日本語環境の構築が間に合わなかったため、インストール翌日は日本語入力が使えず大変な思いをしました。

たまたま知っていた<a href="https://www.inputking.com/japanese/"  target="_blank" rel="noopener noreferrer">InputKing</a>というオンライン入力ツールを使うことでなんとか対処できましたが、このツールを知らなければ大変なことになっていたと思います。

その他にも、WiFiの設定をし直すなど、やらなければならない作業が多かったです。

### 唐突に壊れる

Linuxあるあるで、家で色々いじくり回していたら突然起動しなくなることがあります。

突然起動しなくなったと言っても、翌日には学校で使う予定があり今日中に復旧させなければなりません。この場合には夜遅くまでパソコンに向かわなければならないことがあります。

しかし、こんな時に役立つのがLive USBです。

Live USBからSSDにインストールされているLinuxを操作して、問題となっているパッケージを削除する等の処理を行います。

そのため、インストールに使用したLive USBは必ず残しておいたほうがいいです。

### 一部ソフトが非対応

学校で使う一部のソフトがLinuxに対応していないことがあります。

私の場合は、ミラーリングソフトがこれにあたりました。

とはいえ、私のPCはHDMI端子がついているのでミラーリングソフトがなくても有線で繋げば問題ないのですが、映像端子がないPCの場合は注意が必要です。

## それでもメリットのほうが大きい

ここまでLinuxを学校で使用して遭遇したトラブルについて書いてきましたが、Linuxを使うデメリットよりもメリットのほうが上回ると思います。

高速で安定、セキュリティが高いLinuxを僕は今後も使い続ける予定です。

※ちなみにこの記事もLinuxで書いています。

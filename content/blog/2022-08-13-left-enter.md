---
author: FrogApp
categories: PC
tags:
- PC
- 作業効率化
photoCredits: '<a href="https://unsplash.com/@cytonn_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  target="_blank" rel="noopener noreferrer">Cytonn Photography</a>'
photoSource: '<a href="https://unsplash.com/s/photos/typing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  target="_blank" rel="noopener noreferrer">Unsplash</a>'
title: 左Enterキーのすゝめ(Linux、Windows対応)
thumbnail: "/img/2022-08-13-keyboard.jpg"
headAlt: タイピングしている様子
date: 2022-08-13
slug: left
---

通常Enterキーは右側にありますが、これを左側にも設定すると便利だよーという話です。

## コストカットの被害者、Enter

特に安いノートパソコンでは、Enterキーがやたら小さくなっている機種があります。コストカットやノートパソコンの筐体が小さいことを考えれば致し方ないことなのかもしれませんが、それでもよく使うキーが小さいのは不便です。

## 不動の王、CapsLock

一方で、キーボードの特等席にいながらほとんど使われないキーがいます。そう、**CapsLock**です。

ということで、このCapsLockにEnterキーの機能を割り当てていきます。

## CapsLockをEnterにするメリット

CapsLockをEnterにするメリットは他にもいくつかあります。

* Enterを押すときにホームポジションからあまり手を動かさなくて済む
* 右手でマウス操作をしていてもEnterを押せる

「本当に使いやすいの？」と疑問に思うかもしれませんが、やってみると「ああ、これはいいぞ！」となると思います。意外とすぐに慣れます。

また、この設定をしたからと言って、右側のEnterキーが使えなくなるわけではないのでご安心ください。

## 設定

### Linuxの場合

ということでまずはLinuxの場合の手順です。(Windowsでの手順はこの後にあります)

ここで使うのが <a href="https://github.com/sezanzeb/input-remapper" target="_blank" rel="noopener noreferrer">Input Remapper</a> というソフトです。GUIでキーマップを編集できるすぐれものです。

インストールはREADMEに書いてあるとおりにやればいけます。Arch系の場合は簡単ですが、DebianやUbuntu系の場合は少し面倒です。

インストールしたら、ランチャーからInput Remapperを起動します。起動時にrootパスワードを求められるので入力します。

起動したら、まずはデバイスを選択します。「Keyboard」の文字が含まれているものを選びます。キーボードが複数ある場合は機種名から推測してください。

![キーボードを選択](/img/2022-08-13-select-keyboard.jpg)

その後、\[new entry\]の右側にある\[Change Key\]をクリックし、キーボードのCapsLockキーを押します。

![\[new entry\]の右側にある\[Change Key\]をクリックし、キーボードのCapsLockキーを押す](/img/2022-08-13-change-key.jpg)

\[new entry\]の上に\[CAPSLOCK\]という項目が現れればOKです。

そうすると、テキストボックスに入力できる状態になると思います。そこに`KEY_ENTER`と入力してください。

![KEY_ENTERと入力する](/img/2022-08-13-key-enter.jpg)

最後に、画面左側の\[Autoload\]のスイッチをオンにしてログイン時に自動で設定が読み込まれるようにし、\[Apply\]を押して設定を適用します。

![設定を適用](/img/2022-08-13-apply.jpg)

これで完了です。

### Windowsの場合

では、お待ちかねのWindowsでの設定手順です。…といいつつ、現在自由に使えるWindows環境がないので過去画像の使い回しで説明します。

まずは、<a href="https://www.vector.co.jp/soft/winnt/util/se228667.html" target="_blank" rel="noopener noreferrer">KeySwap</a>というソフトをダウンロードします。

古いソフトですが、最新のWindows 11 22H2でも動いたので心配無用です。

ダウンロードしたらZipファイルを展開し、中にある「KeySwap.exe」を**管理者権限で**実行します。管理者権限じゃないと起動できません。KeySwap.exeを右クリック→\[管理者として実行\]をクリックすると管理者権限で実行できます。

画面右側のキーボードの模式図をポチポチしていって、下の画像のようになるようにします。

![KeySwapの設定](/img/2022-07-23-keyswap-1.jpg)

過去画像を使いまわしている都合上、かなキーをBackspaceに置き換える設定も写っていますがあまり気にしないでください。

設定が終わったら左上の「終了」ボタンをクリックし、設定を適用します。

PCを再起動すると設定が適用されます。

## 余談

今回、Linux環境での設定の解説に用いた画像はGIMPで編集しました。GIMPは全くの初心者なので「コレジャナイ感」が出ていますが、今後練習を積んでより良い編集ができるようにしていくので、ぜひご期待ください。

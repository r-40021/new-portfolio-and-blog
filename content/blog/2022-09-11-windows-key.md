---
author: FrogApp
categories: PC

 
tags:
- Windows
- Linux
photoCredits: '<a href="https://unsplash.com/@meymigrou?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  target="_blank" rel="noopener noreferrer">Panos Sakalakis</a>'
photoSource: '<a href="https://unsplash.com/photos/Ik0wTGgZYYM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  target="_blank" rel="noopener noreferrer">Unsplash</a>'
title: LinuxやWindowsからOEM版Windowsのプロダクトキーを確認する方法
thumbnail: "/img/2022-09-10-win10.webp"
headAlt: Windows 10 のロック画面
series: ''
series_title: ''

---
Linux上でWindowsの仮想環境を建てる際にはWindowsのプロダクトキーが必要になりますが、最近のWindowsがプリインストールされたPCの場合、プロダクトキーが付属していない場合がほとんどです。そこで、今回はOEM版(プリインストール版)Windowsのプロダクトキーを確認する方法をご紹介します。Linux、Windowsのどちらからでも使えます。

<div class="warning-card">
以下の方法はOEM版(プリインストール版)Windowsの場合にのみ使えます。その他のWindowsの場合にはプロダクトキーが付属しているかと思いますのでそちらをご参照ください。
</div>

## 確認方法

### Linux編

OEM版Windowsのライセンス情報はマザーボードに保存されています。以下のコマンドを実行すればそのライセンス情報を読み出すことができます。

結構簡単です。

出力されるログのうち、XXXXX-XXXXX-XXXXX-XXXXX-XXXXX の形式のものがWindowsのプロダクトキーです。

```bash
sudo strings /sys/firmware/acpi/tables/MSDM
```

### Windows編

コマンドプロンプト(CMD.exe)で以下のコマンドを実行します。

```CMD
wmic path softwarelicensingservice get OA3xOriginalProductKey
```

## これってライセンス的にどうなの？

OEM版Windowsのプロダクトキーを仮想環境で使用することはライセンス的に問題がないのか気になる方も多いと思います。

結論としては、問題ありません。

OEM版ライセンスが適用されているPC上であれば、仮想環境上であっても構わないというのがMicrosoftの見解だそうです。

一方、別のデバイスでプロダクトキーを使うのはアウトとなります。

## 参考サイト

* <a href="https://www.cyberciti.biz/faq/linux-find-windows-10-oem-product-key-command/" target="_blank" rel="noopener noreferrer">Linux find Windows 10/11 OEM product key command - nixCraft</a>
* <a href="http://blog.yottun8.com/archives/794" target="_blank" rel="noopener noreferrer">OEM 版 Windows 10 の仮想化に必要なライセンス - Yottun8</a>

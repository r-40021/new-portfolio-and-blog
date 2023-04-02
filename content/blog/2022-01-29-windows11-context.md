---
author: FrogApp
title: "【ソフト不要】Windows 11 のコンテキストメニューを従来の見た目に戻す"
categories: PC
tags:
- PC
- Windows
- Windows11
thumbnail: /img/2022-01-29-win11-context.jpg
headAlt: Windows 11 のコンテキストメニューを戻す
date: 2022-01-29
slug: windows11-context
---


こんにちは。今回は Windows 11 のコンテキストメニュー（右クリックしたときに出てくるメニュー）を従来の見た目に戻す方法を解説します。

Windows 11 になって、コンテキストメニューがシンプルな見た目に変更されました。

![新しくなったコンテキストメニュー](https://user-images.githubusercontent.com/75155258/151647824-51d87563-dfbf-437f-b524-af6643908fb7.jpg)

これはこれで綺麗なのですが、サードパーティ製アプリ(7-zip とか) を使うには「その他のオプションを表示」をいちいちクリックするか、Shift + F10 を押下しなければならないので面倒です。

そこでネットで調べていたところ、追加のソフトウェアなしでコンテキストメニューを従来の見た目に戻す方法を見つけたのでご紹介します。

## 従来の見た目に戻す

まずは、ターミナルを起動します。

スタートボタンを右クリック→ Windows ターミナル をクリックしてください。

![ターミナルの開き方](https://user-images.githubusercontent.com/75155258/151647820-db7dcce9-2cba-4992-8553-89aa02f0b36d.jpg)

黒い画面が現れたら、以下のコマンドをコピー＆ペーストして、Enter キーを押してください。

```powershell
reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

「The operation completed successfully.」と表示されたら成功です。

**パソコンの再起動後**、コンテキストメニューが従来の見た目に戻ります。

## 従来の見た目に戻したのを戻す

「間違えて従来の見た目に戻してしまった」、「従来の見た目に戻したけど、新しいコンテキストメニューも使ってみたくなった」という場合の方法です。

まずは、先ほどと同様に スタートボタンを右クリック→ Windows ターミナル をクリックしてください。

黒い画面が現れたら、以下のコマンドをコピー＆ペーストして、Enter キーを押してください。

```powershell
reg.exe delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
```

「The operation completed successfully.」と表示されたら成功です。

**パソコンの再起動後**、コンテキストメニューが新しい見た目になります。

## 参考サイト

Windows 11の右クリックメニューを以前のバージョンに戻す方法【コンテキストメニュー】 <br>
<a href="https://smartasw.com/archives/13479" target="_blank" rel="noopener noreferrer">https://smartasw.com/archives/13479</a>

最後まで読んでいただきありがとうございました！

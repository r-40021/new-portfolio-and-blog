---
author: FrogApp
categories: PC

 
tags:
- Linux
- KDE
photoCredits: '<a href="https://unsplash.com/@quaritsch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  target="_blank" rel="noopener noreferrer">Quaritsch Photography</a>'
photoSource: '<a href="https://unsplash.com/s/photos/screen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  target="_blank" rel="noopener noreferrer">Unsplash</a>'
title: KDE Plasmaでスクリーンショットが昔の画面になってしまう時の対処法
thumbnail: "/img/2022-08-11-screen.jpg"
headAlt: スクリーン

---
KDE Plasma でスクリーンショットを撮ろうとしたところ、現在の画面ではなく随分昔の画面が撮影されてしまう不具合に遭遇しました。

## 現象

Arch Linux(KDE Plasma 5)で、Spectacleを用いてスクリーンショットを短形領域で撮影しようとしたところ、現在の画面ではなく数十分前の画面が撮影されてしまいます。

なお、使用しているPCにグラボは搭載されておらず、インテルの内蔵GPUを使用しています。

## 解決法

xf86-video-intelパッケージを削除します。

Arch系の場合は、`pacman -R xf86-video-intel`で削除できます。

KDEやDebian、Ubuntu、Fedoraからも、インテル第4世代以降のGPUを搭載している場合にはxf86-video-intelのインストールは非推奨とされています。

## 参考サイト

* <a href="https://bbs.archlinux.org/viewtopic.php?id=263247" target="_blank" rel="noopener noreferrer">\[SOLVED\] KDE Plasma 5 / Spectacle Screenshot uses old screen state / Applications Desktop Environments / Arch Linux Forums</a>
* <a href="https://wiki.archlinux.jp/index.php/Intel_Graphics#.E3.82.A4.E3.83.B3.E3.82.B9.E3.83.88.E3.83.BC.E3.83.AB" target="_blank" rel="noopener noreferrer">Intel Graphics - ArchWiki</a>

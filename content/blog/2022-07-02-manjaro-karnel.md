---
author: FrogApp
categories: PC
tags:
- Linux
- Manjaro

title: ManjaroとXubuntuをデュアルブートしたらKarnel Panicになった！！！
thumbnail: "/img/2022-06-23-manjaro-gnome.jpg"
headAlt: Manjaroのデスクトップ画面

---
Xubuntuは起動するのにManjaroくんが起動しない…

## 現象

実は最近、ManjaroでWi-Fiにうまく接続できない状態になっていまして、問題の切り分けの一環としてXubuntuをデュアルブートしました。

その結果、Xubuntuは起動するもののManjaroがKarnel Panicとなって起動しなくなりました。

## 解決法

まず、GRUBメニューで「Advanced options for Manjaro」を選択します。

(スクショなくてすみません)

その後、"fallback"という文字が含まれるカーネルを選択し、Enterキーで起動します。

これで起動したら、ログインしてターミナルを開きます。

(これで起動できなかった場合、もしくはGRUBメニューが現れなかった場合は、この記事の最後の「"fallback"のカーネルで起動しない場合」をお読みください。)

まず、`lsblk -l`コマンドを実行してディスクの状況を調べます。
```bash
    [user@mainpc ~]$ lsblk -l
    NAME      MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
    nvme0n1   259:0    0 238.5G  0 disk
    nvme0n1p1 259:1    0   300M  0 part /boot/efi
    nvme0n1p2 259:2    0 192.5G  0 part /
    nvme0n1p3 259:3    0  45.6G  0 part
```
容量を頼りに、Manjaroがインストールされているパーティションを探し、その列の「NAME」を確認します。

(ここでは、"nvme0n1p2"にManjaroがインストールされています。)

その後、以下のコマンドを実行します。

`${disk}` となっている箇所には、先程調べたパーティションの"NAME"(例：nvme0n1p2)を入れてください。
```bash
    sudo grub-install /dev/${disk}
```
出力は以下のようになります(一例です)。
```bash
    [user@mainpc ~]$ sudo grub-install /dev/nvme0n1p2
    Installing for x86_64-efi platform.
    Installation finished. No error reported.
```
最後に、以下のコマンドを実行すれば完了です。
```bash
    sudo update-grub
```
再起動して、Manjaroが起動するか確かめてみてください！

### "fallback"のカーネルで起動しない場合

インストール時に使用したLive USBを使用します。

まずはLive USBから起動し、ターミナルを開いてください。

上記で説明したように、`fdisk -l` コマンドを実行してディスクの状況を調べます。
```bash
    [manjaro@mainpc ~]$ lsblk -l
    NAME      MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
    nvme0n1   259:0    0 238.5G  0 disk
    nvme0n1p1 259:1    0   300M  0 part /boot/efi
    nvme0n1p2 259:2    0 192.5G  0 part /
    nvme0n1p3 259:3    0  45.6G  0 part
```
容量を頼りに、Manjaroがインストールされているパーティションを探し、その列の「NAME」を確認します。

(ここでは、"nvme0n1p2"にManjaroがインストールされています。)

このあと、HDDやSSDをマウントするため、マウント先となるディレクトリを作成します。

(Live環境のため、実際にはディレクトリはどこにも作成されません。)
```bash
    sudo mkdir /manjaro-mount
```
そして、マウントします。

`${disk}` となっている箇所には、先程調べたパーティションの"NAME"(例：nvme0n1p2)を入れてください。
```bash
    sudo mount /dev/${disk} /manjaro-mount
```
さあ、魔法の時間です。

今から実行するコマンドで、PCにインストールされているManjaroのルート権限を手に入れることができます。(なんとも恐ろしい…)
```bash
    sudo chroot /manjaro-mount
```
これで、あなたはPCにインストールされているManjaroの管理者です！

ここからは、起動できなくなったManjaroに入り込んだのと同様にコマンドを実行できます。

上記の「解決法」を参考に、
```bash
    sudo grub-install /dev/${disk}
    sudo update-grub
```
を実行すれば完了です。

(`${disk}` となっている箇所には、先程調べたパーティションの"NAME"を入れてください。)

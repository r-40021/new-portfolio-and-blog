---
author: FrogApp
title: "Glitch のプロジェクトを削除する方法を調べてみた！"
categories: プログラミング
tags:
- プログラミング
- Glitch
date: 2021-10-06
slug: delete-glitch-project
---


node.js をブラウザ上で使える <a href="https://glitch.com/" target="_blank" rel="noopener noreferrer">Glitch</a> を使っていて、プロジェクトの削除方法が気になったので調べてみました。

## 結論

結論から言うと、現時点では Glitch でプロジェクトを削除する方法は **ありません**。

どうやら2018年の時点では削除機能があったようですが、2021年現在では削除されています。

（「削除機能が削除された」とはややこしい...）

しかしご安心ください。代替策があります。

## 代替策

Glitch でプロジェクトを削除することはできませんが、プロジェクトを「アーカイブ」することなら可能です。

サーバーにデータは残りますが、閲覧や編集は不可能になり、プロジェクトは非公開になります。

### アーカイブする方法

画面左上の自分のプロジェクト名をクリックし、出てきたメニューを下にスクロールします。

そして、一番下の「Archive This Project」をクリックしてください。

![プロジェクトのアーカイブ](https://user-images.githubusercontent.com/75155258/136206952-55697d22-6ab5-4d7a-8f3f-07f547c53780.png)

その後、確認メッセージが表示されるので「OK」をクリックしてください。

![確認ダイアログ](https://user-images.githubusercontent.com/75155258/136206961-99685280-d66c-4ac6-a1e6-943d3b5531ab.png)

編集画面右上に「Archived ＜プロジェクト名＞」というメッセージが表示されていれば完了です。

### アーカイブしたプロジェクトは何処へ行くのか

アーカイブしたプロジェクトは、ダッシュボードの「Archived」に振り分けられます。

<a href="https://glitch.com/dashboard" target="_blank" rel="noopener noreferrer">ダッシュボード</a>にアクセスし、「Projects」の右側から「Archived」を選んでください。

![ダッシュボード](https://user-images.githubusercontent.com/75155258/136206964-2bcf5a3d-63c6-434f-9629-32bd038dac76.png)

すると、アーカイブしたプロジェクトの一覧を見ることができます。

アーカイブしたプロジェクトは閲覧・編集が不可能なため、これらの操作をする場合には先ほどのダッシュボードにて、プロジェクト一覧の上にカーソルを乗せると現れる「Reactivate」をクリックし、アーカイブを解除する必要があります。

![アーカイブ解除](https://user-images.githubusercontent.com/75155258/136207557-7bdb8833-1596-4266-8665-1917700ac4b7.png)

## 参考

- <a href="https://support.glitch.com/t/how-to-delete-a-project/31576" target="_blank" rel="noopener noreferrer">How to delete a project? - Glitch Help - Glitch Support</a>

---
author: FrogApp
title: Chrome 拡張機能を作って公開しよう①　〜環境構築〜
description: 環境構築するほどのことでもないが。
categories: プログラミング
series: Chrome 拡張機能を作ろう
series_title: 環境構築
tags:
- プログラミング
- Chrome拡張機能
- 環境構築
- JavaScript
- JSON
- HTML
thumbnail: /img/2021-07-30-develop.jpg
photoCredits: '<a href="https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Pankaj Patel</a>'
photoSource: '<a href="https://unsplash.com/s/photos/javascript?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'
date: 2021-07-30
slug: chromechrome-extension-1
---



今回からは、連載企画ということで Chrome の拡張機能を開発していきます。何回分に渡るかはわかりませんが、1回分のボリュームを抑えていくので、物足りなさを感じてしまう方もいらっしゃるかもしれませんが、お付き合いよろしくお願いします。

さて、今回は連載第1回目、ということで環境構築を行っていきます。といっても、普段からプログラミングをされている方は、やることがほぼないです！プログラミングをされていない方も、難易度はそこまで高くありませんので、身構えずに取り組んでみてください。

## 対象

- HTML、JavaScript、CSS の基礎が分かる方 (DOM操作とか...)

これらがわからないという方は、まずは Webアプリを作るところから始めてみましょう！

Chrome 拡張機能開発ではこれら３つの言語が必須になります。

※HTML、CSS はものによっては使わないかも

## 必要なもののインストール

### Google Chrome

当たり前ですが、Google Chrome が必要です。開発した拡張機能をテストするのに用います。

普段から Google Chrome を使われている方は、再度インストールする必要はありません。そのままで OK です。

### エディタ

プログラムを書いていくために必要なエディタをインストールします。これも、普段使われているもので結構です。

ただし、WIndows 標準の「メモ帳」を使われている方は、特にこだわりがないのであれば、今は無料で高機能なものがたくさんあるのでこれを機に是非インストールしましょう。

おすすめは「Visual Studio Code」です。

<a href="https://azure.microsoft.com/ja-jp/products/visual-studio-code/" target="_blank" rel="noopener noreferrer">ダウンロードページ</a>

インストールしたら、デフォルトでは画面が英語なので日本語化します。以下のサイトを参考にすればすぐにできます。

<a href="https://www.fenet.jp/dotnet/column/environment/5400/" target="_blank" rel="noopener noreferrer">Visual Studio Codeを日本語表示にする手順！変更方法も解説
 (.NET Column)</a>

これで環境構築は終了です！あっという間でしたね！
誰でも気軽に開発を始められるところが、Chrome 拡張機能開発の良い点の一つだと思います。

## 公開するなら...

開発したChrome 拡張機能をウェブストアで公開するには、上のものに加えて以下のものが必要になります。

- Google アカウント (できれば開発用のものを作ったほうが良い)
- 5ドル (ウェブストアにアカウントを登録する際に、**１度だけ**登録料を支払う必要がある)
- クレジットカード or デビットカード (どうしても用意できない場合は、本人確認を済ませたLINEプリペイドカードでも可)

## 開発の流れ

1. 必要なファイルを用意する
2. コードを書く
3. テストする
4. 2.3.を繰り返し、バグをなくしていく
5. 公開！ (これは任意)

金曜日で疲れているので、今回はこれくらいにします。次回からいよいよ本格的に開発を行っていきます！

実は...何を作っていくかは、**未定**です！
次回をお楽しみに。

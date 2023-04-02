---
author: FrogApp
title: "Chromebook のランチャーを Windows のスタートメニューっぽくする"
categories: PC
tags: PC Chromebook
thumbnail: /img/2022-02-18-chromebook-start-like-windows.jpg
headAlt: WindowsのスタートメニューっぽいChromebookのランチャー
---

お久しぶりです。最近、Chromebook の人気が出てきていますね。僕も学校で使っていますが、結構気に入っています。コスパ最高ですし、 Windows のように複雑な設定がないので使いやすいです。しかし、一つ気になる点を挙げるとすれば、**「「全画面のランチャーが使いづらい」」**点です。

![普通のChromebookのランチャーのスクリーンショット](https://user-images.githubusercontent.com/75155258/154628667-f43003c2-c220-41bf-8b8b-cbfa6f20c627.jpg)

僕のような Windows を使ってきた人には、どうしても使いづらいです。

全画面のランチャーなんて、まるであの黒歴史 (Windows 8) みたい。

そこで、今回は Chromebook の全画面で使いづらいランチャーを、このように左下に出てくるようにしていきます。

![ChromebookのWndowsっぽいランチャーのスクリーンショット](https://user-images.githubusercontent.com/75155258/154628702-65cb88b6-a1f2-49f5-9cab-ba1c27c1772a.jpg)

## 設定方法

設定は非常に簡単で、人によっては1分もかからずに終わると思います。

<div class="alert-card">
  Chrome OS のバージョンによってはこの方法が使えない場合があります。
</div>

まずは、 Chrome のアドレスバーに `chrome://flags` と入力し、Enter キーを押してください。

![chrome://flags のスクリーンショット](https://user-images.githubusercontent.com/75155258/154647883-5cd0e3df-3f18-46e2-8ee6-5bed33f64a2f.jpg)

このような画面が現れれば OK です。

※私の場合はすでにいろいろといじっているので多少画面が異なる場合がありますが、特に問題はありません。

ちなみに、この `chrome://flags` は試験段階の機能を有効にしたり、逆に無効にしたりできるページです。

そのため、このページにある機能は正式実装されてしばらくすると削除されます。また、正式実装が見送られた場合にも削除されます。

つまり、将来的に Chromebook のランチャーが左下になる可能性があるということです。

そうしたら、上の検索ボックスに「app launcher」と検索して、以下の3つの項目を「Enabled」にしてください。

- Productivity experiment: App Launcher
- App Launcher: Animation
- App Launcher: Force Continue Section Suggestions

![enabled に変更するスクリーンショット](https://user-images.githubusercontent.com/75155258/154650285-4cd0f325-4a33-4977-895f-0bd4e8e2e7a2.jpg)

変更し終えたら、右下の「Restart」ボタンを押してください。

再起動後、ランチャーが Windows 風になっているはずです。

## ちなみに...

シェルフを右や左に置いている場合は、ランチャーもシェルフに合わせて移動します。

シェルフ縦置き族の皆様も安心して全画面ランチャーに別れを告げることができます。

![シェルフを右置きにした場合のスクリーンショット](https://user-images.githubusercontent.com/75155258/154661686-88d1069d-fe98-49e2-b05f-65234a5b1ee4.jpg)

新鮮な Chromebook をぜひ楽しんでみてください！

ここまで読んでいただきありがとうございました。

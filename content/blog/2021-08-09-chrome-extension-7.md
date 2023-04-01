---
author: FrogApp
title: "Chrome 拡張機能を作って公開しよう 最終回　〜Web ストアに公開〜"
description: いよいよ Web ストアに公開します！
categories: プログラミング
series: Chrome 拡張機能を作ろう
series_title: Webストアに公開
tags: プログラミング Chrome拡張機能
thumbnail: /img/2021-08-09-chrome.jpg
photoCredits: '<a href="https://unsplash.com/@firmbee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Firmbee.com</a>'
photoSource: '<a href="https://unsplash.com/s/photos/google-chrome?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'
---

拡張機能を作るシリーズ、最終回！いよいよ、拡張機能を Web ストアに公開していきます！

## 開発者登録

まずは、<a href="https://chrome.google.com/webstore/" target="_blank" rel="noopener noreferrer">Web ストア</a>にアクセスします。

アクセスしたら、拡張機能を公開する Google アカウントにログインし、「デベロッパーダッシュボード」に移動してください。

![デベロッパーダッシュボードに移動](https://user-images.githubusercontent.com/75155258/128621571-d554706e-b0b7-4715-ba80-aad5ddb0bba6.png)

本人確認を求められたら、指示に従って本人確認を行ってください。

余談ですが、Google アカウントはサイバー攻撃の対象にされやすいので、複雑なパスワードに加えて2段階認証をかけておくことを強くおすすめします。

![デベロッパー登録](https://user-images.githubusercontent.com/75155258/128621601-fc33a101-406b-4fa6-81b1-d7c1623faa40.png)

このような画面になったら、デベロッパー契約とプライバシー ポリシーを確認し、同意する場合はチェックボックスにチェックを入れてください。

その後、画面右側の「登録料の支払い」をクリックしてください。

![登録料の支払い](https://user-images.githubusercontent.com/75155258/128621654-318814ae-e1c0-4951-9e4b-c2528659c146.png)

Web ストアでは、悪意のある開発者の登録を防ぐため、5ドルの登録料が必要になります。この支払いは、登録時の1回のみで、拡張機能をアップデートする際や新たな拡張機能をリリースする際に支払いを求められることはありません。

## プロフィール登録

![左側のタブ](https://user-images.githubusercontent.com/75155258/128621768-274c1043-d2ca-4f7b-a33f-f7d913cea934.png)

左側のタブから、「アカウント」をクリックしてください。

![プロフィールの登録](https://user-images.githubusercontent.com/75155258/128621824-e58d553b-0d78-40cb-a63d-282f0513b4d3.png)

そうしたら、「投稿者の表示名」と「メールアドレス」を入力してください。これらは公開されるので、公開しても良い名前(偽名でも OK)・メールアドレス(メールアドレスは正確に)にしてください。

プライバシーポリシーがある場合は、3番目のテキストボックスに、その URL を入力してください。(これは任意です。)

下の方にスクロールしていくと、「通知」という設定項目があります。これをすべてオンにしておくと、拡張機能が公開された時や拡張機能にレビューが付いた時などに通知を受け取れるので便利です。

![通知の設定](https://user-images.githubusercontent.com/75155258/128621899-4acab53c-ae98-445b-86ea-948210f8acf0.png)

設定を終えたら、一番下にある **「変更を保存」をクリック** してください。

![変更を保存](https://user-images.githubusercontent.com/75155258/128622066-1318f17c-a14a-4522-8265-28906d3fae5c.png)

## 拡張機能のアップロード

「投稿者の設定が正常に更新されました」と表示されたら、左側のタブから「アイテム」をクリックしてください。

ここでは、拡張機能の公開・公開した拡張機能の管理などを行うことができます。

まずは、「新しいアイテム」ボタンをクリックしてください。

![新しいアイテム](https://user-images.githubusercontent.com/75155258/128621991-c0791c2b-8f31-4ff4-8ffb-4d3a29965f8d.png)

「ZIP ファイルをここにドロップするか、ファイルを選択します。」とあるので、拡張機能の開発用フォルダを `.zip` 形式に圧縮したものをこの枠の中にドラッグ＆ドロップします。

![アップロード](https://user-images.githubusercontent.com/75155258/128622006-a4097903-260f-484e-b979-85d84be14f5e.png)

`.zip` ファイルへの圧縮は、開発用フォルダの中にある8個のファイルを全選択して、右クリック→「送信」→「圧縮 (zip 形式) フォルダー」のように選んでいくと行えます。

<a href="https://support.microsoft.com/ja-jp/windows/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E5%9C%A7%E7%B8%AE%E3%81%8A%E3%82%88%E3%81%B3%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B-8d28fa72-f2f9-712f-67df-f80cf89fd4e5" target="_blank" rel="noopener noreferrer">Windows での手順</a>

<a href="https://support.apple.com/ja-jp/guide/mac-help/mchlp2528/mac" target="_blank" rel="noopener noreferrer">Mac での手順</a>

<a href="https://support.google.com/chromebook/answer/1700055" target="_blank" rel="noopener noreferrer">Chromebook での手順</a>

![アップロード後](https://user-images.githubusercontent.com/75155258/128622400-87976405-8bf5-46b7-827e-f631f96ce8b2.png)

アップロードが完了すると、拡張機能に関する情報を入力する画面に遷移します。

※「パッケージのタイトル」や「パッケージの概要」が途中までしか表示されていませんが、横にスクロールするとすべて見られます。分かりにくいですね。

## 必要事項の入力


![下書き保存ボタン](https://user-images.githubusercontent.com/75155258/128624644-bd434b4a-8ffa-4a0a-bd70-2e85b2164304.png)

画面右上に「下書きとして保存する」ボタンがあるので、こまめに保存しておくとトラブルを回避できます。

また、その左側に「送信できない理由」というボタンがあるので、そこをクリックすると、何が不足しているのかがわかります。

※「送信できない理由」は、下書きとして保存したあとに、最新の状態が反映されます。

![image](https://user-images.githubusercontent.com/75155258/128625033-1e4e8d8d-d0d6-49ca-b477-6e078cb4f5d5.png)

「プレビュー」をクリックすると、実際のWebストアの画面が開き、どのように拡張機能が公開されるのかがイメージしやすくなります。

それでは、拡張機能を公開する上での必要事項を入力していきます。

どのような感じで書くのかを説明しますが、具体的な内容はご自身でお考えください。

### 説明
拡張機能に関する説明。できるだけ詳しく書いたほうが良いです。GitHub などでコードを公開している場合は、その URL も入れるとさらに良いです。なお、「パッケージの概要」の内容は公開時に自動で説明欄に追加されるので、同じ内容を説明欄に書く必要はありません。

### カテゴリ
この拡張機能がどのカテゴリに属すかを選んでください。Web ストア上の似たような拡張機能を見てみると、「仕事効率化」や「ユーザー補助機能」を選んでいるものが多かったです。

### 言語
拡張機能で使われている言語。基本的に日本語(？)

### ショップアイコン
Web ストアで表示されるアイコン。128ピクセル×128ピクセル。

【2021/8/8 以前に第2回を終えられた方へ】

大変申し訳無いのですが、以前第2回で配布していた画像のサイズが間違えていたので、ご自身でリサイズしてくださると幸いです。なお、現時点では、第2回でダウンロードできる画像は正常なサイズになっていますので、再度ダウンロードしてくださっても大丈夫です。

### 全言語向けプロモーション動画
プロモーション動画を YouTube にアップロードしている場合は、その URL を入力してください。 **任意**

### スクリーンショット
この拡張機能がどのようなものかがわかる画像。最低1枚、最大5枚まで指定可能。画像サイズに指定があるので、よくご確認ください。

※プロモーション画像のようにするにも、可能な限りスクリーンショットは入れたほうがよいです。

### プロモーションタイトル（小）・（大）、マーキープロモーションタイトル
検索結果のページなどに表示される画像。こちらも画像サイズに指定があるので、よくご確認ください。 **任意**

### 追加フィールド
ホームページの URL など、必要に応じて入力してください。 **任意**


ここまで書けたら、下書きとして保存した後、左側のタブから「プライバシーへの取り組み」をクリックしてください。

![プライバシーへの取り組み](https://user-images.githubusercontent.com/75155258/128624029-b4e55900-ee75-4dde-b2ea-4f89bd355bd9.png)

### 単一用途の目的
「要するにこの拡張機能の目的はなにか」を書きます。


### 権限が必要な理由
その権限をどのように利用するのかを書きます。

下に書いてあるものはあくまでも参考程度にし、より詳しく記述するようにしてください。

#### activeTab
ユーザーが閲覧しているタブのID、タイトル、URLを取得するため

#### scripting
URLやページタイトル、あるいはその両方をクリップボードにコピーするスクリプトや、各種 SNS の投稿画面をポップアップで開くスクリプトを挿入するため

#### contextMenus
コンテキストメニューからもページを共有できるようにするため

### リモートコード
外部から、JavaScript、CSS、フォントを読み込んでいるか。

1つでも読み込んでいる場合は「はい」を選択し、なぜ外部から読み込む必要があるのかを記述してください。

### データ使用
ユーザーのどのようなデータを開発者が得るのか、当てはまるものすべてにチェックを入れてください。

下の方に、3つのチェックボックスがあるので、「デベロッパー プログラム ポリシー」を遵守している場合は、チェックを入れてください。

![決済と配布地域](https://user-images.githubusercontent.com/75155258/128624601-bd857ca6-5cd9-4e8e-b46c-013c8e0b5a4b.png)

ここまで入力できたら、下書きとして保存した後、左側のタブから「決済と配布地域」をクリックし、課金要素の有無・公開範囲・配布地域を設定してください。

ただ、このブログを見た方が全員「一般公開」にしてしまうと、類似品が複数出回ることになるので、 <u><strong>「限定公開」か「非公開」にしてください。</strong></u>

もし一般公開したい場合は、アイコンやデザイン、機能に、**元がわからない程度のオリジナリティを加えるようお願いします。**

「決済と配布地域」の設定も終えたら、もう一度下書きとして保存してください。

最後にもう一度見直して、不備がなければ「審査のため送信」をクリックしてください。

![送信確認](https://user-images.githubusercontent.com/75155258/128624933-a124f144-ffb0-4da5-bada-0e41388f6a4e.png)

送信確認画面が現れます。

また、審査終了後に自動で公開するか否かを選択できます。お好きな方を選んでください。

再度「審査のため送信」をクリックすると、拡張機能が審査に提出されます。

これで、早くてその日のうちに、場合によっては数週間後に拡張機能の審査が終わります。

先程、審査合格後に手動で拡張機能を公開することを選んだ方は、審査合格のメールが来たら30日以内にデベロッパーダッシュボードから拡張機能を公開してください。

## おわりに
1週間連載が行われたこの企画ですが、ついに終わりを迎えます。

Chrome 拡張機能づくりの一連の流れがわかっていただけたのであれば、これ以上の喜びはありません。

これにて、連載企画「Chrome 拡張機能を作って公開しよう」を終わります。本当にお疲れさまでした！

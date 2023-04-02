---
author: FrogApp
title: "10分で定員付きの Google フォームを作ろう＜コピペ可＞"
description: "定員に達したらフォームを閉じるだけじゃない"
categories: プログラミング
tags:
- Google
- GAS
- JavaScript
date: 2021-09-16
slug: form-limit
---


## 今回やったこと

Google フォームで、「先着何人」というフォームを作りたい場面で使えるプログラムを作りました。

定員付きのフォームの作り方は他のサイトでも紹介されていますが、私が作ったものは、

- フォームの説明欄に残り人数を表示できる
- 枠が残り少なくなったときにだけ、フォームの説明欄に残り人数を表示するようにできる
- ITに詳しくない人でも保守・管理が簡単→共同編集に便利

といった特徴があり、非常に便利なものになっています。

では、早速作っていきましょう！

## 必要なもの

- Google アカウント
- Google フォームに関するスキル(フォームを作って、結果の集計ができる程度)
- パソコン(一度作ってしまえば、保守管理はスマホからも行えます)

## フォームを作る

まずは、<a href="https://docs.google.com/forms/" target="_blank" rel="noopener noreferrer">Google フォーム</a> を開いてください。

フォームは、既存のものでも、新規のものでも構いません。

この記事では、適当に作ったこのフォームを使って説明していきます。

![適当に作ったフォーム](https://user-images.githubusercontent.com/75155258/133555756-5d5ef45d-c902-44dd-95f9-6d41bd9d4eca.png)

ただし、いくつか設定して欲しい箇所があります。

1. フォーム終了後のメッセージ
2. 「別の回答を送信するためのリンクを表示」をオフ、もしくは「回答を1回に制限する」をオン

まず、上のバーより「回答」をクリックしてください。

次に、「回答を受付中」の右のスイッチをクリックし、「回答を受け付けていません」の状態にしてください。

そして、「回答者へのメッセージ」と書いてある下のテキストボックスに、任意のメッセージを入力してください。これは、定員に達してフォームの受付が終了した際に、ユーザーに表示されるものです(下の画像を参照)。

![終了メッセージ](https://user-images.githubusercontent.com/75155258/133564206-c1d2463c-fe93-45bc-a171-dff451c3d63f.png)

![設定手順](https://user-images.githubusercontent.com/75155258/133564390-07ce9e94-2e6e-43a7-bf1e-ea2747231d67.png)

回答者へのメッセージを入力し終えたら、必要に応じて「回答を受け付けていません」の右のスイッチをクリックして「回答を受付中」に戻してください。

それでは、2番の設定を始めます。

上のバーから「設定」をクリックしてください。

![フォームの設定画面](https://user-images.githubusercontent.com/75155258/133563672-d2a23fa2-f46b-4186-bfda-e675b5045245.png)

その後、「別の回答を送信するためのリンクを表示」をオフ、もしくは「回答を1回に制限する」をオンにします。

後者はGoogleアカウントを使用して回答を1回に制限するため、回答者が Google アカウントを所持している必要があります。そのため、学校や会社などで Google Workspaces を利用している場合などに最適です。

一方、前者は厳格に回答を1回に制限することはできないものの、Google アカウントへのログインが必要ありません。

以下の手順に従って、どちらか一方、もしくは両方の設定を行ってください。

### 「別の回答を送信するためのリンクを表示」をオフにする場合

設定画面を開いたら、プレゼンテーション＞「別の回答を送信するためのリンクを表示」の右側のスイッチをオフ のように操作してください。

![設定手順](https://user-images.githubusercontent.com/75155258/133565390-3b450917-4bb9-4590-aa69-062352c0b992.png)

### 「回答を1回に制限する」をオンにする場合

設定画面を開いたら、回答＞「回答を 1 回に制限する」の右側のスイッチをオフ のように操作してください。

![設定手順](https://user-images.githubusercontent.com/75155258/133565700-586a6655-8833-49a3-81b7-724a68fc0e44.png)

これら以外の設定は、ご自由にどうぞ。

## プログラムを記述する

まず、右上の縦に3つ並んでいるドットをクリックし、「スクリプトエディタ」をクリックしてください。

![スクリプトエディタを開く](https://user-images.githubusercontent.com/75155258/133567550-01708788-5490-40fe-89fa-fbbbfdabe98c.png)

※「現在、ファイルを開くことができません。」と表示された場合は、一旦ログインしているすべての Google アカウントからログアウトし、その後フォームを作成した Google アカウントだけログインし直してみてください。

![スクリプト編集画面](https://user-images.githubusercontent.com/75155258/133556475-e76ba572-a838-44ea-b5c1-30855b1d94d6.png)

このような画面が表示されたら、すでに記述されているもの(`function myFunction() { ~` の部分)をすべて消してください。

その後、以下のコードをすべてコピペしてください。

```JavaScript
`use strict`

const propaty_display_limit = PropertiesService.getScriptProperties().getProperty("DISPLAY_LIMIT");
const propaty_max = Math.floor(PropertiesService.getScriptProperties().getProperty("MAX"));
const propaty_old = PropertiesService.getScriptProperties().getProperty("old");
let LIMIT_COUNT = propaty_max || propaty_max === 0 ? propaty_max : 5;//定員
let old_dis = propaty_old ? propaty_old : "";//古い定員の残り人数通知
let display_limit = Math.floor(propaty_display_limit || propaty_display_limit === 0 ? formatLimit(propaty_display_limit) : -1);//残りの枠を表示するしきい値
const kaigyo = "\n\n---------------------------------\n\n";//残り枠数のあとに追加される文字列


function endFormCheck(changed) {
  const form = FormApp.getActiveForm();//アクティブなフォーム
  const remaining = LIMIT_COUNT - form.getResponses().length;//残り人数
  const displayRemaining = remaining < 0 ? 0 : remaining;//残り人数が負の場合は0にする
  if ((display_limit === -1 || remaining <= display_limit) && Number(display_limit !== 0)) {
    const description = `定員${LIMIT_COUNT}名のところ、これまでに${form.getResponses().length}名が申し込みました。\n残りは${displayRemaining}枠です。` + (remaining < 0 ? `(超過${form.getResponses().length - LIMIT_COUNT})` : "");//定員があと何人か
    if (old_dis && form.getDescription().indexOf(old_dis) !== -1) {
      form.setDescription(form.getDescription().replace(old_dis, description));//概要文を書き換え
    } else {
      form.setDescription(description + kaigyo + form.getDescription());//新規
    }
    PropertiesService.getScriptProperties().setProperty("old", description);
  } else if (old_dis && form.getDescription().indexOf(old_dis) !== -1) {
    form.setDescription(form.getDescription().replace(old_dis + kaigyo, ""));//概要文を書き換え
  }
  if (form.getResponses().length >= LIMIT_COUNT) {
    if (changed === "changed" && form.isAcceptingResponses()) {
      FormApp.getUi().alert(`回答を締め切りました。\n現在の定員は${LIMIT_COUNT}名です`);//定員の変更によってフォームが閉鎖された場合に、ポップアップで通知
    }
    form.setAcceptingResponses(false);
  } else if (changed === "changed") {
    if (!form.isAcceptingResponses()) {
      /* 定員に余裕がある場合には、回答の収集を再開することを提案 */
      const ui = FormApp.getUi();
      const alert = ui.alert("回答の収集を再開", `回答の収集を再開しますか？\n現在の定員は${LIMIT_COUNT}人、残りは${remaining}枠です。`, ui.ButtonSet.YES_NO);
      if (alert === ui.Button.YES) {
        form.setAcceptingResponses(true);
      }
    } else if ((display_limit !== -1 && remaining > display_limit) || display_limit === 0) {
    /*フォームの説明欄に残りの人数が記述されない場合は、ポップアップでお知らせ*/
      FormApp.getUi().alert(`定員${LIMIT_COUNT}名\n残り${LIMIT_COUNT - form.getResponses().length}枠`);
    }

  }
}

function onOpen() {
  const ui = FormApp.getUi(); // Uiクラスを取得する
  const menu = ui.createMenu('定員制御');  // Uiクラスからメニューを作成する
  menu.addItem('定員を変更', 'setMax');   // メニューにアイテムを追加する
  menu.addItem('残りの枠数を表示するしきい値を変更', 'setDisplayLimit');
  menu.addItem('最新の状態に更新', 'refresh');   // メニューにアイテムを追加する
  menu.addToUi();// メニューをUiクラスに追加する
}

function refresh() {
  endFormCheck("changed");//更新用
}

function setMax() {
  /* 定員を変更 */
  const form = FormApp.getActiveForm();//アクティブなフォーム
  const ui = FormApp.getUi();
  const title = '定員の設定';
  const body = `半角数字で定員を入力してください。\n現在の定員は${LIMIT_COUNT}人で、残りは${LIMIT_COUNT - form.getResponses().length}枠です。`
  const prompt = ui.prompt(title, body, ui.ButtonSet.OK_CANCEL);//プロンプトを表示
  const text = prompt.getResponseText();
  if (prompt.getSelectedButton() === ui.Button.OK) {
    if (!isNaN(text) && Number(text) >= 0) {
    /*数字であることが確認された場合の処理*/
      if (!text) return;//空欄だった場合
      LIMIT_COUNT = Math.floor(Number(text));
      PropertiesService.getScriptProperties().setProperty("MAX", Math.floor(Number(text)));
      display_limit = Math.floor(propaty_display_limit || propaty_display_limit === 0 ? formatLimit(propaty_display_limit) : 0);
      refresh();
      return;
    } else {
      /* 数字じゃなかったら */
      const ui2 = FormApp.getUi();
      const title2 = 'むむ？';
      const body2 = Number(text) < 0 ? '0以上の数を半角で入力してください。' : '半角数字で入力してください。'
      const alert2 = ui2.alert(title2, body2, ui2.ButtonSet.OK);
      if (alert2 === ui2.Button.OK) setMax();
    }
  }
}

function setDisplayLimit() {
  /* しきい値を変更 */
  const form = FormApp.getActiveForm();//アクティブなフォーム
  const ui = FormApp.getUi();
  const title = '残りの枠数を表示するしきい値を設定';
  const body = `残りの枠数がいくつ以下になったら、回答者数・残りの枠数をフォームの概要文に表示するかを半角数字で入力してください。\n例）定員が100人で、残り5枠以下になったら残りの枠数をフォームの概要文に表示したい場合→「5」と入力する\n\nまた、残りの枠数が定員の○%以下になったら、というように設定することもできます。\n例）残りの枠数が定員の20%以下になったら残りの枠数をフォームの概要文に表示したい場合→「20%」と入力する\n\n概要文に常に残りの枠数を表示したい場合は、「-1」と入力してください。\n概要文に残りの枠数を表示させない場合は、「0」と入力してください。\n\n現在の設定は「${/%/.test(propaty_display_limit) ? propaty_display_limit : Math.floor(Number(propaty_display_limit))}」です。\n現在の定員は${LIMIT_COUNT}人、残りは${LIMIT_COUNT - form.getResponses().length}枠です。\n\n`;
  const prompt = ui.prompt(title, body, ui.ButtonSet.OK_CANCEL);//プロンプトを表示
  const text = prompt.getResponseText();
  if (prompt.getSelectedButton() === ui.Button.OK) {
    if (/%/.test(text)) {
      const onlyNum = text.replace("%", "");
      if (!isNaN(onlyNum) && Number(onlyNum) >= 0 && Number(onlyNum <= 100)) {
      /*パーセントで入力された場合*/
        if (!onlyNum) return;
        display_limit = formatLimit(text);//しきい値を変更
        PropertiesService.getScriptProperties().setProperty("DISPLAY_LIMIT", text);//しきい値を保存
        refresh();
        return
      }
    } else if (!isNaN(text) && Number(text) >= -1) {
      if (!text) return;//空欄だった場合
      display_limit = formatLimit(Number(text));
      PropertiesService.getScriptProperties().setProperty("DISPLAY_LIMIT", Math.floor(Number(text)));
      endFormCheck();
      return;
    } else {
      /* 数字じゃなかったら */
      const ui2 = FormApp.getUi();
      const title2 = 'むむ？';
      const body2 = "数字または割合(%)を半角で正確に入力してください。"
      const alert2 = ui2.alert(title2, body2, ui2.ButtonSet.OK);
      if (alert2 === ui2.Button.OK) setDisplayLimit();
    }
  }
}

function formatLimit(int) {
  if (/%/.test(int)) {
  /*％を実数に*/
    return Math.floor(LIMIT_COUNT * (Number(int.replace("%", "")) / 100));
  } else {
  /*%でなければ、小数点以下を切り捨てて戻す*/
    return Math.floor(int);
  }
}

```

ついでにプロジェクトの名前も変えておきましょう。

左上の「無題のプロジェクト」と書いてある部分をクリックすると表示されるポップアップに、好きな名前を入力してください。

![image](https://user-images.githubusercontent.com/75155258/133560684-52644e39-e471-429c-b987-b44db83a056c.png)

ここまで書いたら、保存してください。

「実行」や「デバッグ」などが並んでいる列のフロッピーディスクのアイコンが保存ボタンです。

キーボードの Ctrl+S でも保存できます。

![保存](https://user-images.githubusercontent.com/75155258/133557894-f7e775f9-6eb4-43fc-b11e-262403203766.png)

プログラミングを勉強されている方のために、少し解説します。(とりあえずものが作れればいいという方は読み飛ばしてもらって結構です)

これは、Google Apps Scriptというものです。

JavaScript がベースになっており、Google の色々なサービスを(ときには外部サービスとも)連携させることができます。

このコードでは、フォームの回答数によって、残りの枠数を表示させたり、回答の収集を停止したりしています。

どのコードがどのような動作をしているかはコメントに書いておいたので、是非参考にしてみてください。

## トリガーをセットする

トリガーは、「動作を予約する」時に使う機能です。

上記のコードでは、フォームに新たな回答が来ても何も処理が行われないので、フォームに回答が届いたら、定員に達していないかの確認処理・概要文の更新処理を行うようにします。

左側のメニューから、「トリガー」をクリックしてください。

(カーソルを乗せるとメニューが広がります。)

![メニューからトリガーを選ぶ](https://user-images.githubusercontent.com/75155258/133558176-81758725-2bc8-43d5-b929-6a80a7583c0d.png)

画面が変わったら、右下の「トリガーを追加」をクリックしてください。

![トリガーを追加](https://user-images.githubusercontent.com/75155258/133559955-1375b59b-4493-401d-a31e-55a543933f64.png)

このとき、画面左下にこのようなポップアップが表示されたら、先程書いたプログラムが保存されていないということなので、青字の「保存」をクリックしてプログラムを保存してください。

![プログラム未保存の状態](https://user-images.githubusercontent.com/75155258/133559822-d1afeb26-bcb8-4d4a-80a5-28f80cb3090f.png)

実行する関数→ 「endFormCheck」

実行するデプロイ→「Head」

イベントのソース→「フォームから」

イベントの種類→「フォーム送信時」

を選んで、右下の「保存」をクリックしてください。

![トリガーをセット](https://user-images.githubusercontent.com/75155258/133558445-c4b72802-7221-4a08-a947-855bb9f42800.png)

少し待つと Google アカウントのログイン画面が表示されます。

自分のアカウントをクリックしてください。

この画面が表示されたら、「許可」をクリックしてください。

![権限を許可](https://user-images.githubusercontent.com/75155258/133560019-785a56b7-2b79-4119-a670-533c783d2d27.png)

「このアプリは確認されていません」との警告が出る場合がありますが、これは普通のことです。

私の環境では再現できなかったのですが(Google に開発者登録をしているからかも)、もしそのような警告が出た場合は、下のサイトの手順通りに対処してください。

<a href="https://auto-worker.com/?p=609#toc_id_2" target="_blank" rel="noopener noreferrer">Google Apps Script(GAS)入門 初回コード実行時の承認・許可方法を解説【図説】 | AutoWorker〜Google Apps Script(GAS)とSikuliで始める業務改善入門</a>

※私のコードが信用できないという方は、「安全なページに戻る」をクリックしても構いません。

## 使ってみる

ここまで終えたら、フォームの編集画面を再読込してください。

すると、右上にパズルのピースのアイコンが表示されたと思います。

「定員付きフォーム」に関する設定は、パズルのアイコン＞「定員制御」からすべて行えます。

![定員制御](https://user-images.githubusercontent.com/75155258/133560462-1312cfa9-80fb-49ee-b0d1-5604f4abad0b.png)

設定画面はこんな感じです。

![設定画面](https://user-images.githubusercontent.com/75155258/133561915-b753151b-1f04-47eb-ad84-2416abd80b04.png)

### 最初にやること

まず最初に、「定員を変更」をクリックしてください。

![設定画面から定員を変更を選択](https://user-images.githubusercontent.com/75155258/133561983-ad986396-9041-4c62-9b4e-bf769a8dac0f.png)

表示されたポップアップに、設定したい定員を半角数字で入力し、「OK」をクリックしてください。

![定員設定](https://user-images.githubusercontent.com/75155258/133561523-ec4f49ab-4002-4e78-bb49-c37aa81e57d3.png)

次に、概要文に残りの枠数を表示させるかどうかの設定をします。

先程の設定画面から、「残りの枠数を表示するしきい値を変更」をクリックしてください。

![しきい値を設定](https://user-images.githubusercontent.com/75155258/133562142-df80837b-d1f6-4c9d-9a93-0b20985c88ea.png)

このプログラムでは、フォームの概要文に「あと何枠です」というように表示させることができます。

しかし、あまり枠が埋まっていないことが分かると、申し込む気がなくなってしまう人もいます。(特に日本人はその傾向が強いと言われています。)

そこで、枠が残り少なくなったら、「あと何枠です」という表示を開始するように設定できます。

ここでは、「数」か「割合」で設定できます。

まずは、数の場合。これは単純で、「空きが何枠以下になったら、概要文への表示を開始する」ということです。

例えば、空きが10枠以下になったら概要文に「残り○枠です」と表示させたい場合は、ポップアップに「10」と入力してください。

次に、割合の場合。「空き枠が定員の何％以下になったら、概要分への表示を開始する」ということです。

例えば、定員が50人のフォームで、空きが定員の10%の5人以下になった場合に「残り○枠です」と概要文に表示させたい場合は、ポップアップに「10%」と入力してください。

最後に、特殊な場合です。

常に残りの枠数を表示させたい場合は「-1」を、申込数に問わず残りの枠数を表示させたくない場合は「0」を入力してください。

入力し終えたら、「OK」をクリックしてください。もし、「むむ？」という警告が表示された場合は、その数字またはパーセンテージが有効ではないため、「半角で」入力し直してください。

### 設定を変更する

一度設定した内容を変更したい場合も、上記と同じ手順で行えます。

## まとめ

いかがでしたか？

久しぶりのGASだったので、色々調べながらの開発でしたが、楽しかったです。

ぜひ、本日紹介したプログラムを使ってみてください！

報告不要・クレジット表記不要・商用利用可　です。

なお、ここで紹介したコードは<a href="https://github.com/r-40021/form_limit" target="_blank" rel="noopener noreferrer">GitHub</a>で公開しています。

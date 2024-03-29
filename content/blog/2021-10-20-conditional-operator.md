---
author: FrogApp
title: "三項演算子が便利すぎて感動した"
categories: プログラミング
tags:
- プログラミング
- JavaScript
thumbnail:
  url: /img/2023/12/10/conditional-operator.webp
date: 2021-10-20
slug: conditional-operator
---


数ヶ月前、三項演算子に出会って感動したので、まだこの感動を味わっていない方向けに記事を書きました。

## 三項演算子の便利さ

このような処理をしようとしているとします。

> 変数 `age` には数値（年齢）が入る<br>
> `age` が18以上なら、変数 `message` に「あなたは成人です」を代入する<br>
> その他の場合は、変数 `message` に「あなたは成人ではありません」を代入する<br>

三項演算子を知らない人がプログラムを書くと、こんな感じになると思います。

```JavaScript
let message;
if (age >= 18) {
    message = "あなたは成人です";
} else {
    message = "あなたは成人ではありません";
}
```

しかし、三項演算子を使うと...

```JavaScript
const message = age >= 18 ? "あなたは成人です" : "あなたは成人ではありません";
```

なんと美しいコード...

では、三項演算子について解説していきます。

## 三項演算子の使い方

三項演算子は「if-else」文をまとめたものですが、三項演算子には、三項演算子自身が条件判定で得られたデータに「化ける」という性質があります。これは if 文にはない性質です。

このことにより、三項演算子を変数に代入することができます。

次に、使い方についです。

三項演算子は長いですが、3つの部分に分かれます。

① 条件式

② ①が true と判定されたときの処理

③ ②が false と判定されたときの処理

① の書き方は if 文の条件式と同じなので、覚えやすいです。`&&` や `||` を使い、条件式を複数連結させられます。 ①の後には "?" が必要です
。

② ①の条件式が `true` のときに、三項演算子が何に化けるかを指定します。文字列でも数値でも数式でも、何でもOKです。

③ ①の条件式が `false` のときに、三項演算子が何に化けるかを指定します。文字列でも数値でも数式でも、何でもOKです。

なお、②と③の間には ":" が付きます。

ここまで読んだ上で先ほどのサンプルコートを見てみると、初見のときとは違ったものが感じられます...

ぜひ、今回ご紹介した「三項演算子」を使ってみてください！！

## 参考

- <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" target="_blank" rel="noopener noreferrer">条件 (三項) 演算子 - JavaScript | MDN</a>

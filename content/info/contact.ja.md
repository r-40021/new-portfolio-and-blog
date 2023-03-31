---
slug: contact
title: お問い合わせ
description: お問い合わせはこちらからお願いします。
date: 2023-03-31
showComments: false
url: "contact"
layout: "docs"
---

スパム防止のため、このお問い合わせフォームを通さないお問い合わせに対応することはできません。

また、このフォームを通していても、スパム・いたずらと思われるものには一切応じません。

<form
  action="https://formspree.io/f/xqkoyqwd"
  method="POST"
  class="mt-5"
>
  <div class="mb-3">
    <label for="email">
      メールアドレス:
    </label>
    <input class="form-control" id="email" type="email" name="email" required>
  </div>
  <div class="mb-3">
    <label for="message">
      お問い合わせ内容:
    </label>
    <textarea class="form-control" id="message" name="message" rows="10" required></textarea>
  </div>
  <div class="form-check mb-3">
    <input name="reply" class="form-check-input" type="checkbox" value="true" id="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      返信を希望する
    </label>
  </div>
  <button type="submit" class="btn btn-primary mb-3">送信</button>
</form>

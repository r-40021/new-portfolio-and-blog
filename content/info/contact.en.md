---
slug: contact
title: Contact
description: Contact form is here.
date: 2023-03-31
showComments: false
url: "contact"
layout: "docs"
---

To prevent spam, we cannot respond to inquiries that are not submitted through this contact form. 

Additionally, we will not respond to any submissions that we consider spam or pranks, even if they are sent through this form.

<form
  action="https://formspree.io/f/xqkoyqwd"
  method="POST"
  class="mt-5"
>
  <div class="mb-3">
    <label for="email">
      Your email address:
    </label>
    <input class="form-control" id="email" type="email" name="email" required>
  </div>
  <div class="mb-3">
    <label for="message">
      Description of inquiry:
    </label>
    <textarea class="form-control" id="message" name="message" rows="10" required></textarea>
  </div>
  <div class="form-check mb-3">
    <input name="reply" class="form-check-input" type="checkbox" value="true" id="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      I want a reply
    </label>
  </div>
  <button type="submit" class="btn btn-primary mb-3">Submit</button>
</form>
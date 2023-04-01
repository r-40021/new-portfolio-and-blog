// 外部サイトへのリンクは新しいタブで開く
const links = document.querySelectorAll('a')
links.forEach(link => {
  if (link.href && !link.href.startsWith('#') && !link.href.startsWith(`${location.protocol}//${location.host}`)) {
    link.setAttribute('target', '_blank')
  }
})

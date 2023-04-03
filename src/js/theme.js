'use strict'

const storedTheme = localStorage.getItem('theme')

const getPreferredTheme = () => {
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = function (theme) {
  if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }
}

const showActiveTheme = theme => {
  const activeSelector = document.querySelector('.theme-icon-active')
  const activeButton = document.querySelector(`[data-bs-theme-value="${theme}"]`)
  const activeIcon = activeButton.querySelector('span')

  document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
    element.classList.remove('active')
  })

  activeSelector.classList = activeIcon.classList
  activeSelector.classList = activeSelector.classList.replace('theme-icon', 'theme-icon-active')
  activeButton.classList.add('active')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (storedTheme !== 'light' || storedTheme !== 'dark') {
    setTheme(getPreferredTheme())
  }
})


showActiveTheme(getPreferredTheme())

document.querySelectorAll('[data-bs-theme-value]')
  .forEach(toggle => {
    toggle.addEventListener('click', () => {
      const theme = toggle.getAttribute('data-bs-theme-value')
      localStorage.setItem('theme', theme)
      setTheme(theme)
      showActiveTheme(theme)
    })
  })

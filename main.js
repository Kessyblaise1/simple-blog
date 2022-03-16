const body = document.body
const moon = document.querySelector('.dark_theme')
const sun = document.querySelector('.light_theme')
const themeToggler = document.querySelector('.theme_toggle_button')

themeToggler.addEventListener('click', () => {
  body.classList.toggle('light')
})

sun.addEventListener('click', () => {
  body.classList.add('light')
})
moon.addEventListener('click', () => {
  body.classList.remove('light')
})

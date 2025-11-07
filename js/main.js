const modal = document.querySelector('.modal')
const openBtn = document.querySelectorAll('.modal__btn')
const closeBtn = document.querySelector('.modal__close')
const body = document.querySelector('body')

openBtn.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex' 
    body.classList.add('noscroll')
  })
})

modal.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner')

  if (!isModal) {
    modal.style.display = 'none'
    body.classList.remove('.noscroll')
  }
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  body.classList.remove('.noscroll')
})
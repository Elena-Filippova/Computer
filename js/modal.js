const modal = document.querySelector('.modal')
const modalWrapper = modal.querySelector('.modal__inner')
const openBtn = document.querySelectorAll('.modal__btn')
const body = document.querySelector('body')

openBtn.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex' 
    body.classList.add('noscroll')
  })
})

modal.addEventListener('click', (event) => {
  const modalContent = event.target.closest('.modal__inner')

  if (!modalContent) {
    modal.style.display = 'none'
    body.classList.remove('.noscroll')
  }
})

const closeBtn = document.createElement('button')
closeBtn.classList.add('modal__close')

modalWrapper.append(closeBtn)

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  body.classList.remove('.noscroll')
})
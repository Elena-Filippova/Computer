const contents = document.querySelectorAll('.program-line__content')

contents.forEach((e) => {
  const title = e.querySelector('.program-line__title')
  const descr = e.querySelector('.program-line__descr')

  title.addEventListener('click', () => {
    contents.forEach(item => item.querySelector('.program-line__descr').classList.remove('active'))

    descr.classList.toggle('active')
  })
})
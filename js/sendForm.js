const sendForm = async () => {
  const form = document.querySelector('.modal')
  const formBtn = form.querySelector('.form-btn')

  formBtn.addEventListener('click', () => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const nameInput = form.querySelector('input[type=text]')
      const telInput = form.querySelector('input[type=tel]')
      const emailInput = form.querySelector('input[type=email]')

      const nameValue = nameInput.value.trim()
      const telValue = telInput.value.trim()
      const emailValue = emailInput.value.trim()

      if (!nameValue || !telValue || !emailValue) {
        alert('Заполните все обязательные поля!')
        return
      }

      try {
        const sendObj = {
          name: nameValue,
          phone: telValue,
          email: emailValue
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(sendObj),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        
        if (!response.ok) throw new Error(`Ошибка отправки: ${response.status}`)

        alert('Ваша заявка успешно отправлена!')
        form.reset()
      } catch (error) {
        console.error(error)
        alert('Возникла ошибка при отправке заявки.')
      }
    }) 
  })   
}

sendForm()

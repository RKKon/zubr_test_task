window.addEventListener("DOMContentLoaded", () => {

  // 4. Заменить href всех ссылок на {offer}.
  const links = document.querySelectorAll('a');

  let offer = '#' // Here have to be a link to offer

  if (offer) {
    const changeLinksHref = links.forEach(link => {
      link.href = offer;
    })
  } else {
    console.error('the variable: offer did not exist!')
  }

  // 6 Добавить форму с полями name, phone и скрытым полем subid. etc.
  const thanksModal = () => {
    const div = document.createElement('div');
    div.classList.add("thanksModal")
    div.textContent = 'Спасибо за заказ. Скоро вы с вами свяжемся!'
    document.body.prepend(div);
  }

  const postData = (formData) => {
    const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

    fetch("server.php", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: jsonData,
    })
      .then(response => response.json())
      .then(data => console.log("Sent:", data))
      .catch(error => console.error(error))
  }

  const showErrorMessage = (input, message) => {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains('error_message')) {
      error = document.createElement('div');
      error.classList.add('error_message');
      error.textContent = message;
      input.parentNode.insertBefore(error, input.nextSibling);
    }
  }
  const clearError = (input) => {
    let error = input.nextElementSibling;
    if (error && error.classList.contains('error_message')) {
      error.remove();
    }
  };

  document.querySelector('#contact_form').addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name');
    let phone = document.querySelector('#tel');

    const validName = /^[a-zA-Zа-яА-ЯёЁґҐєЄіІїЇўЎ\s]{2,}$/;
    const validPhone = /^(\s*)?(\+52)?([- _():=+]?\d[- _():=+]?){10}(\s*)?$/;

    let isValid = true;

    if (!validName.test(name.value.trim())) {
      isValid = false;
      showErrorMessage(name, 'Пожалуйста правильно заполните имя');
    } else {
      clearError(name)
    }

    if (!validPhone.test(phone.value.trim())) {
      isValid = false;
      showErrorMessage(phone, 'Пожалуйста введите телефон в формате +52 XXX XXX XXXX');
    } else {
      clearError(phone)
    }

    if (isValid) {
      const formData = new FormData(e.target);
      postData(formData);
      name.value = ""
      phone.value = ""
      thanksModal();
      setTimeout(() => document.querySelector('.thanksModal').style.display = 'none', 4000);
    }
  })

  // Маска ввода для телефона +52 
  const phoneInput = document.getElementById('tel');
  phoneInput.addEventListener('focus', () => {
    if (!phoneInput.value.startsWith('+52')) {
      phoneInput.value = '+52 ';
    }
  });
})
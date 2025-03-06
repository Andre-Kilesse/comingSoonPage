const form = document.querySelector('.hero__form');
const alertBox = document.querySelector(".custom-alert");
const closeAlert = document.querySelector(".custom-alert__button");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.querySelector('.inEmail');
    const errorIcon = document.querySelector('.hero__form--icon-error');
    const errorMsg = document.querySelector('.hero__form--text-error');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let isValid = emailPattern.test(emailInput.value);

    if (!isValid) {
        emailInput.style.borderColor = 'red';
        errorIcon.style.display = 'block';
        errorMsg.style.display = 'block';
        return;
    }

    alertBox.classList.add('show');
    alertBox.removeAttribute('inert');

    emailInput.value = "";
    emailInput.style.borderColor = '';
    errorIcon.style.display = 'none';
    errorMsg.style.display = 'none';
})

closeAlert.addEventListener('click', () => {
    alertBox.classList.remove('show');
    alertBox.setAttribute('inert', '');
})

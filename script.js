const emailInput = document.querySelector('.hero-container_text-container_mail-input'); 
const validEmailMessage = document.querySelector('.validEmail'); 

emailInput.addEventListener('input', function () {
    const emailValue = emailInput.value;
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailValue);

    if (!isValidEmail && emailValue !== '') {
        validEmailMessage.style.display = 'block';
        validEmailMessage.style.color = 'red';

        emailInput.classList.add('error');  
    } else {
        validEmailMessage.style.display = 'none';

        emailInput.classList.remove('error'); 
    }
});


// button for success page

document.getElementById('subscribeBtn').addEventListener('click', function(){
    window.location.href = 'success.html';
});

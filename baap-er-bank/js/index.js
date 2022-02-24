document.getElementById('login-button').addEventListener('click', function () {

    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;

    if (userEmail == 'email@gmail.com' && userPassword == 12345) {
        window.location.href = 'banking.html';
    }
    else {
        alert('Invalid email / password')
    }

})


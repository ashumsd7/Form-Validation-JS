const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('paswword2');

//showing input error
function showEror(input, message) {

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.getElementsByTagName("small");
    small.innerText = message;


}

//show success msg
function showSuccess(input) {

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}


//Event Listner
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(username.value);



    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if (username.value === "") {
        showEror(username, 'Username is required');
    }
    else {
        showSuccess(username);
    }


    if (email.value === "") {
        showEror(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showEror(email, 'Email is not in proper format');
    }
    else {
        showSuccess(email);
    }



    if (password.value === "") {
        showEror(password, 'Password is required');
    }
    else {
        showSuccess(password);
    }

    if (password.value === "") {
        showEror(password2, 'Confirm password is required');
    }
    else {
        showSuccess(password2);
    }




});
window.onload = () => {
    let authForm = document.querySelector(".authorization");
    authForm.onsubmit = function(e){
        let isValid = true;
        let login = document.querySelector("[name = 'login']");
        let password = document.querySelector("[name = 'login-passord']");
        if(login.value.length === 0) {
            isValid = false;
        }
        if(password.value.length === 0) {
            isValid = false;
        }
        if(!isValid){
            e.preventDefault();
            alert('Fill all the fields!!!');
        }

    }
}
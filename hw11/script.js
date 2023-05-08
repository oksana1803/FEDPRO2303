window.onload = () => {
    /*1) Форма логіна показується користувачу при завантаженні сторінки,
     всі інші форми сховані за допомогою css класу.  
     В формі логіну 2 поля ( логін, пароль ) і кнопка відправити. 
     Після введення логіну ( user, 123456 )  очистити поля і сховати форму. 
     Показати користувачу форму замовлення піцци*/
    let login = document.querySelector("[name = 'login']");
    let password = document.querySelector("[name = 'login-passord']");
    let submitBtn = document.querySelector(".submit-input");
    
    let authForm = document.querySelector(".authorization");
    let orderForm = document.querySelector(".pizzaOption");

    let userLogin = 'user';
    let userPassword = '123456';

    function checkInp () {
        if(login.value.length > 0 && password.value.length > 0) {
            submitBtn.removeAttribute('disabled');
        } else {{
            submitBtn.setAttribute('disabled', true);
        }}
    }
    login.addEventListener('keyup', checkInp);
    password.addEventListener('keyup', checkInp);
    
    authForm.onsubmit = function(e) {
        let loginName = document.querySelector("[name='login']").value;
        let loginPassword = document.querySelector("[name='login-passord']").value;
        e.preventDefault();

        if(loginName === userLogin && loginPassword === userPassword) {
            authForm.style.display = 'none';
            orderForm.style.display = 'block';
        } else {
            alert('Invalid Data!')
        }
    }

    //////////////////////////////////////////////////////////////////////
let firstPizza = document.getElementById('pizzaOne');
let secondPizza = document.getElementById('pizzaTwo');
let thirdPizza = document.getElementById('pizzaThree');
let fourthPizza = document.getElementById('pizzaFour');
let firstPizzaPrices = [140, 200, 245];
let secondPizzaPrices = [170, 210, 255];
let thirdPizzaPrices = [100, 150, 200];
let fourthPizzaPrices = [120, 190, 250];

firstPizza.addEventListener('click', () => { showPrice(firstPizzaPrices) });
secondPizza.addEventListener('click', () => { showPrice(secondPizzaPrices) });
thirdPizza.addEventListener('click', () => { showPrice(thirdPizzaPrices) });
fourthPizza.addEventListener('click', () => { showPrice(fourthPizzaPrices) });

function showPrice(prices) {
   
}
}
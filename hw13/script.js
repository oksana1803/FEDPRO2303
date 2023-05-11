window.onload = () => {
/*1) Створити кнопку, при кліку на яку в локалсторедж записуєтья ширина вікна перегляду користувача, 
а також іншим ключем висота екрану */

let writeBtn = document.querySelector(".writebtn");

writeBtn.onclick = function () {
    window.localStorage.setItem('width', screen.width + 'px');
    window.localStorage.setItem('height', screen.height + 'px');
}

/*    2) Створити трай кетч з кастомним обробником помилки. Також додайте в catch  обробку цієї помилки 
і виведіть alert що помилка оброблена */

try {
    let isValid = confirm("Valid?");
    if (!isValid) {
        throw new SyntaxError('Valid should be TRUE!');
    }
}
catch(e) {
    console.log(e);
    alert('Error processed!');
}

/*  3) Отримайте від користувача значення радіуса кола і намалюйте коло за допомгою svg */

let radius = prompt('Enter the circle radius: ');
document.querySelector('circle').setAttribute('r', radius);

}
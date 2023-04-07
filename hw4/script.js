/*1)Створити функцію яка отримує массив і вибирає з нього всі парні числа,
після чого розміщує в новому масиві. Функція повина повертати массив з парними номерами. */

function arrFunc (arr) {
    let newArr = [];
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("Task1: ", arrFunc([1, 3, 5, 7, 4, 6, 8, 9, 2, 4, 10]));

/*2) Створити функцію яка 3 рази виводить prompt  запитує що купити і вводить отримані данні в массив. 
Після цього повертає массив */

function whatToBuy () {
    let list = [];

    for(let i = 0; i < 3; i++){
        let item = prompt("Enter what we need to buy: ");
        list.push(item);
    }
    return list;
}
console.log("Task2: ", whatToBuy());

/*3) Напишіть функцію яка отримує як аргумент довільний  массив цифр 
і повертає сумму всіх значень массиву*/

function sumValues (...arrVal) {
    let sum = 0;
    for(let i = 0; i < arrVal.length; i++) {
        sum += arrVal[i]
    }
    return sum;
}
console.log("Task3: ", sumValues(1, 2, 3, 4));

/*4) Створіть функцію з іменем congrat, яка отримує значення рік народження, а повертає вік користувача*/

function congrat(yearOfBirth) {
    let age = 2023 - yearOfBirth;
    return age;
}
console.log(`Task4: You are ${congrat(2003)} years old!`);

/*5) Створіть функцію яка отримує массив цифрових значень (різні роки) 
і колбек функцію яку ви створили congrat. 
Поверніть новий массив зі значенням "Вік користувача і розрахунок з колбек функції" */

function userAges (years, congrat) {
    let calcAges = [];
    for (let i = 0; i < years.length; i++) {
        let userAge = congrat (years[i]);
        calcAges.push(userAge);
    }
    return calcAges;
}

console.log("Task5: ", userAges([2001, 2002, 2004], congrat));

/*6) Створіть пустий обєкт productDetail і декілька викликів prompt які заповнять інформацію про товар 
(Назва продукту, ціна продукта, колір, наявність знижки) тут робота на знайомство з синтаксисом обєктів */

let productDetail = {};

productDetail["productName"] = prompt("Enter the product name: ");
productDetail["productPrice"] = Number(prompt("Enter the product price: "));
productDetail["productColor"] = prompt("Enter the product color: ");
productDetail["isDiscount"] = confirm("Does the product have discount?");

console.log("Task6: ", productDetail);

/*7) Створити функцію яка задає в обєкт cordinat рандомні значення left i top. 
Максимальне значення лефт це 1000 максимальне значення top це 100 */

function MaxMinVal () {
    let cordinat = {};
    cordinat.left = Math.random() * 1000;
    cordinat.top = Math.random() * 100;
    return cordinat;
}

console.log("Task7: ", MaxMinVal());






/* 1)Написати  реалізацію  калькулятора  за допомогою if і else if 
при спробі поділити на 0 виводити alert з попередженням користувачу. 
Повині бути команди (додавання, множення, ділення, віднімання)*/

let firstValue = Number(prompt("Enter the first value: "));
let secondValue = Number(prompt("Enter the second value: "));

let summ = firstValue + secondValue;
console.log(`The summ is: ${summ}`);

let mult = firstValue * secondValue;
console.log(`The multiplication is: ${mult}`);

let div = firstValue / secondValue;
if(secondValue === 0) {
    console.error("Сannot be divided by 0")
} else {
    console.log(`The division is ${div}`);
}

let sub = firstValue - secondValue;
console.log(`The subtraction is: ${sub}`);

/*2)за допомогою циклу вивести в консоль всі парні значення числа 20*/

let i = 1;
while(i <= 20) {
    if(i % 2 === 0) {
        console.log(i);
    }
i++;
}

/*напишіть змінні які питають логін та пароль з prompt  
якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" 
якщо ні то виводити "Пароль логін не вірні"*/ 

let login = prompt("Enter the login: ");
let pass = Number(prompt("Enter the password: "));

if(login === 'admin' && pass === 12345){
    console.log("вітаємо в системі")
} else {
    console.error("Пароль та логін не вірні");
};

/*Спитати в користувача вік, далі використовуючи тернарний оператор ( це скорочений запис іf ) 
створити змінну яка отримує true якщо вік більше 18  i false якщо менше */

let age = Number(prompt("Enter your age: "));
let checkAge = age > 18 ? console.log(true) : console.log(false);

/*Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3% 
якщо більше 3000 то порахувати знижку 5% 
і якщо більше 10000 то порахувати знижку 7% 
в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене" */

let numb = Number(prompt("Enter number more than 0: "));

if(numb > 100 && numb < 3000){
    console.log(`The discount is: ${numb*0.03}`);
} else if (numb > 3000 && numb < 10000) {
    console.log(`The discount is: ${numb*0.05}`);
} else if (numb > 10000) {
    console.log(`The discount is: ${numb*0.07}`);
} else {
    console.log(`У вас нема знижки до сплати ${numb}`);
}
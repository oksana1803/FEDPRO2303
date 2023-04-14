/*Домашня робота:
1) Створити функцію конструктор яка створює обєкт юзер 
(з даними імя, прізвище, вік, в функції конструкторі повиний бути метод виводу інформації про юзера. 
Метод повинен бути винесений в прототип. */
/*2)Створити метод на прототайп для оновлення значень обєкту юзер наприклад змінити імя або вік користувача*/

function UserCostructor (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}
UserCostructor.prototype.returnUserInfo = function () {
    return `Name: ${this.name}; Surname: ${this.surname}; Age: ${this.age}`;
}
UserCostructor.prototype.changeUserName = function (newName) {
    this.name = newName;
}
UserCostructor.prototype.changeUserAge = function (newAge) {
    this.age = newAge;
}

let firstUser = new UserCostructor ('Oksana', 'Novitska', 20);
let secondUser = new UserCostructor ('Alex', 'Ivanov', 32);
let thirdUser = new UserCostructor ('Max', 'Petrov', 18);

console.log(firstUser.returnUserInfo());
console.log(secondUser.returnUserInfo());
console.log(thirdUser.returnUserInfo());

/*3)Створити функцію сорт яка  отримує  массив з створеними обєктами юзер і сортує їх по віку ( в порядку зростання)*/

let users = [firstUser, secondUser, thirdUser];

console.log(users.sort(function(a,b){return a.age - b.age}));
/*4) Отримати від користувача через promt  значення name  вивести в консоль, першу і останню літеру з name */

let username = prompt ("Enter the name: ");
let firstLetter = username.slice(0,1);
let lastLetter = username.slice(-1);
console.log(`First letter of name is ${firstLetter} and last letter is ${lastLetter}`);

/*5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, 
якщо стрінг маж довжину більше 10 символів то відрізає все після 10 символа і додає 3 крапки до стрінга */

function checkStringFn (str) {
    let trimStr = str.trim();
    if(trimStr.length > 10) {
        return `${trimStr.slice(0, 10)}...`;
    } else {
        return trimStr;
    }
}

console.log(checkStringFn("      123456789@@@                    "));

/*6) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя,( задача на повторення Math властивостей). 
Наприклад:
1810->19
1700 -> 17
1601 ->17 
2000 -> 20 */

function centuryFn () {
    let year = Number(prompt("Enter the year: "));
    let century = Math.ceil(year / 100);
    console.log(`${year} year is a ${century} century`);
}

centuryFn();

/*7) Створити функцію яка повертає інформацію який сьогодні день, місяць рік Наприклад getDayInfo() 
-> Сьогодні вівторок 11 квітня 2023 */

function getDayInfo() {
    let todayDate = new Date();
    console.log(`Today is: ${todayDate.toDateString()}`)
}
getDayInfo();




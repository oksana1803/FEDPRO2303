/*1) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті (sizeA*sizeB)*/
let figurs = [
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
] 

function figSquare (){
    for(let item of figurs) {
        item.area = item.sizeA * item.sizeB;
    }
}
figSquare(figurs);
console.log(figurs);

/*2) Створіть новий массив за допомогою методів розглянутих на уроці 
в якому видалені всі  значення "Remove" ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] 
в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...] */

let arr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];

console.log(arr.filter((item)=>item != "Remove"));

/*3)Створіть конструктор CatConstructor який створює обєкт з ключами age, name, bread ( порода ), color. 
Використайте цей конструктор щоб створити 3 кота */

function CatConstructor (age, name, bread, color) {
    this.age = age;
    this.name = name;
    this.bread = bread;
    this.color = color;
}

let firstCat = new CatConstructor(4, 'Tom', 'Bombay', 'Black');
let secondCat = new CatConstructor(1, 'Lisa', 'British', 'Grey');
let thirdCat = new CatConstructor(5, 'Peter', 'Maine Coon', 'Orange');
console.log(firstCat, secondCat, thirdCat);

/* 4)Створіть масив, помістіть туди створених котів і відфільтруйте массив за віком котів*/

let catArr = [firstCat, secondCat, thirdCat];
console.log(catArr.sort(function(a, b){return a.age - b.age}));

/*5)Створіть змінну userMoney в якій розмістіть сумму гршей що має користувач. Використовуючи массив обєктів 
    let bank = [
        {
            currency: 'usa',
            price:38
        },
        {
            currency: 'eur',
            price:39
        },
        {
            currency: 'zlt',
            price:10
        }
    ]
CТворіть массив з  інформацію скільки валюти може отримати користувач з його збережень 
в форматі " за 76 грн ви можете отримати 2 usa " і т.д */

let userMoney = Number(prompt("Enter the amount of money: "));

let bank = [
    {
        currency: 'usa',
        price:38
    },
    {
        currency: 'eur',
        price:39
    },
    {
        currency: 'zlt',
        price:10
    }
];

let possibleCurrency = [];

bank.forEach((bank) => {
    if(bank.currency === 'usa') {
        let dollarAmount = userMoney / bank.price;
        possibleCurrency.push(dollarAmount);
    }else if(bank.currency === 'eur') {
        let euroAmount = userMoney / bank.price;
        possibleCurrency.push(euroAmount);
    }else if(bank.currency === 'zlt') {
        let zltAmount = userMoney / bank.price;
        possibleCurrency.push(zltAmount);
    }else {
        console.error("NOT A CURRENCY");
    }
});
console.log(possibleCurrency);






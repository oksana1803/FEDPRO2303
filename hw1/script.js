//1) Отримати 3 числових значення і вивести в консоль середнє арефметичне значення

let firstValue = parseInt(prompt("Enter the first value: "));
let secondValue = parseInt(prompt("Enter the second value: "));
let thirdValue = parseInt(prompt("Enter the third value: "));

let average = (firstValue + secondValue + thirdValue) / 3;

console.log("Average is: ", average);


//2) Ввести 2 значення і порівняти чи вони рівні і вивести в консоль резултат порівння

console.log(true===false);
console.log(1===1);
console.log(1=='1');
console.log(1==='1');
console.log('a'=='b');
console.log('a'==='a');


/*3) Отримати від користувача розмір знижки(цифрове значення) , 
і вирахувати ціну з отриманою знижкою, товара який коштує 12999.  
Значення розрахунку вивести в консоль*/

let discount = parseInt(prompt("Enter the discount amount in %: "));
let price = 12999;

let discPrice = ((price/100)*discount);
console.log("Розмір знижки складає: ", discPrice);
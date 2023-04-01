//1)використовуючи цикл виведіть суму чисел між  А і В з умовоб що A<B

// let firsrVal = Number(prompt("Enter a: "));
// let secondVal = Number(prompt("Enter b: "));
// let sum = 0;

// for(let i = firsrVal; i < secondVal; i++){
//     sum += i;
// }

// console.log(sum);

//2)зробити цикл який виводить дані навпаки від більшого до меншого. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)

// for(let i = 12; i > 0; i--) {
//   console.log(i);
// }

/*3) Реалізувати побудову трикутника за допмогою циклів
* console.log(*)
console.log("")
**
***
****
*/
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < i; j++) {
//       document.write("*");
//     }
//     document.write('<br/>')
// }


/* 4)реалізувати прямокутник з символів
****
****
*/

// let height = Number(prompt("Enter the height: "));
// let width = Number(prompt("Enter the width: "));

// for(let i = 1; i <= height; i++){
//     for(let j = 1; j <= width; j++){
//         document.write("*")
//     }
//     document.write("</br>")
// }

//5)Створити prompt який питає день, якщо це ВТ чи Чт то вивести у вас сьогодні заняття, у вас сьогодні вільний день

// let day = prompt("Введіть день тижня: ");

// switch (day) {
//     case "понеділок":
//         console.log("У вас сьогодні вільний день!")
//         break;
//     case "вівторок":
//         console.log("У вас сьогодні заняття!")
//         break;
//     case "середа":
//         console.log("У вас сьогодні вільний день!")
//         break;
//     case "четвер":
//         console.log("У вас сьогодні заняття!")
//         break;
//     case "п'ятниця":
//         console.log("У вас сьогодні вільний день!")
//         break;
//     case "субота":
//         console.log("У вас сьогодні вільний день!")
//         break;
//     case "неділя":
//         console.log("У вас сьогодні вільний день!")
//         break;
//     default:
//         console.log("Такого дня тижня не існує")
//         break;
// }

// 6)Створити prompt  який питає назву планети і вивести інформацію чи вона знаходиться в сонячній системі

// let planet = prompt("Введіть назву планети: ");

// switch (planet) {
//         case "меркурій":
//             console.log(`${planet} знаходиться у сонячній системі`);
//             break;
//         case "венера":
//             console.log(`${planet} знаходиться у сонячній системі`);
//             break;
//         case "земля":
//             console.log(`${planet} знаходиться у сонячній системі`);
//             break;
//         case "марс":
//             console.log(`${planet} знаходиться у сонячній системі`);
//             break;
//         case "юпітер":
//             console.log(`${planet} знаходиться у сонячній системі`);
//             break;
//         case "сатурн":
//             console.log(`${planet} знаходиться у сонячній системі`);
//             break;
//         case "уран":
//             console.log(`${planet} знаходиться у сонячній системі`);
//             break;
//         case "нептун":
//             console.log(`${planet} знаходиться у сонячній системі`);
//             break;
//         default:
//             console.log(`${planet} не знаходиться у сонячній системі`);
//             break;
// }

//7)let smile = [':)', '=)',':)', '=)',':)', '=)']; Перебрати цей массив і замінити смайли =) на ;) після чого вивести в консоль новий массив

let smile = [':)', '=)',':)', '=)',':)', '=)'];

for(let i = 0; i < smile.length; i++){
   if(smile[i] === '=)'){
    smile[i] = ';)'
   } else {
    smile[i] = '=)'
   }
}
console.log(smile);
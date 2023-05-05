window.onload = () => {
/*Домашня робота:
   1) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість наприклад:
    CountLowrercase("abc"); ===> 0

    CountLowrercase("abcABC123"); ===> 3
    
    CountLowrercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3 */

    function uppercaseCounter (str) {
        let regEx = (/[A-Z]/g);
        let uppercase = str.match(regEx);
        console.log(`Кількість букв великого регістру: ${uppercase.length}`);
    }
    uppercaseCounter("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
    
    /* 2) Написати функцію яка видаляє всі текстові символи з стрінга, а отриманні цифрові значення 
    переводить в тип намбер та повертає його в числовому форматі
    fclearString("hell5o wor6ld")  ======> 56 */

    function fclearString (stringEl) {
        let strNumserPatern = (/\D/g);
        let newStr = stringEl.replace(strNumserPatern, '');

        return Number(newStr);
    }
    console.log(fclearString("hell5o wor6ld"));
}

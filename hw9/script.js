window.onload = () => {
/*1)Створити кнопку при натисканні на яку створюється дів з порядковим номером всередині, 
якщо створено більше 5 дівів. Покажіть на сторінці кнопку, видалити всі створені елементи. 
При натисканні на кнопку всі створенні div елементи видаляються*/
let counter = 0;
function removeDiv () {
    let allDivs = document.querySelectorAll(".div-elements");
    allDivs.forEach(e => {
        e.remove();
    });

    let remBtn = document.querySelector(".removeBtn");
    remBtn.remove();
    counter = 0;
}
function makeDiv() {
    let firstTask = document.querySelector(".firstTask");
    let divEl = document.createElement('div');
    divEl.className = 'div-elements';
    divEl.innerHTML = `${counter+1} div`;
    counter++;
    firstTask.appendChild(divEl);

    let allBtn = document.querySelector(".buttons");
    let remBtn = document.querySelector(".removeBtn");
    if(counter >= 5 && remBtn === null) {
        let removeDivBtn = document.createElement('button');
        removeDivBtn.className = 'removeBtn';
        removeDivBtn.innerHTML = 'div remover';
        removeDivBtn.addEventListener('click', removeDiv);
        allBtn.appendChild(removeDivBtn);
    }
}
let divMakerBtn = document.querySelector(".divMaker");
divMakerBtn.addEventListener('click', makeDiv);
/*2) в html створіть 2 інпута і кнопку.  
в js створіть class  по створенню обєкту товару. 
При вводі данних і натисканні на кнопку додати товар, 
у вас обєкт товару додається в массив  */
/*3) Створіть кнопку яка відображається на сторінці коли більше 3 товарів 
в масиві і при dblclick відмальовує список товарів на сторінці */

let productArr = [];
class Product {
    constructor(productName, productPrice) {
        this.productName = productName;
        this.productPrice = productPrice;
    }
}

let addBtn = document.querySelector(".add");

function showItems() {
    let secondTask = document.querySelector(".secondTask");
    let productListDiv = document.createElement('div');
    productListDiv.className = 'productlist-div';
    productListDiv.innerHTML = 'Product list';
    secondTask.appendChild(productListDiv);

    for(let item of productArr) {
        let productInfoDiv = document.createElement('div');
        productInfoDiv.className = 'product-info';
        productInfoDiv.innerHTML = `Product name: ${item.productName}; Product price: ${item.productPrice}`;
        productListDiv.appendChild(productInfoDiv);
    }
}

function addProduct() {
    let productName = document.querySelector(".productName");
    let productPrice = document.querySelector(".productPrice");

    let productInfo = new Product (productName.value, productPrice.value);
    productName.value = "";
    productPrice.value = "";
    productArr.push(productInfo);
    console.log(productArr);
    let drawBtn = document.querySelector('.draw');
    if(productArr.length > 3 && drawBtn === null) {
        let secondTask = document.querySelector(".secondTask");
        let productListBtn = document.createElement('button');
        productListBtn.className = 'draw';
        productListBtn.innerHTML = 'Show items';
        secondTask.appendChild(productListBtn);
        productListBtn.addEventListener('dblclick', showItems);
    }

}

addBtn.addEventListener('click', addProduct);

/*Створіть інпут і кнопку, вводячи дані і натискаючи кнопку ви стоврюєте 
новий елемент списку покупок. В елементі списка покупок, 
повиненно бути:  інформація з інпуту, час створення, 
а також кнопка при натисканні на яку елемент стає сірим 
( або позначається як куплений) */

let addToListBtn = document.querySelector('.buy-btn');

function addToList() {
    let inputElement = document.querySelector('.product-input');
    let inputElementVal = inputElement.value;
    inputElement.value = "";
    let todayDate = new Date();
    let infoDiv = document.createElement('div');
    infoDiv.className = 'info-div';
    infoDiv.innerHTML = `Product: ${inputElementVal}, Date: ${todayDate}`;
    document.body.appendChild(infoDiv);

    let clickBtn = document.createElement('button');
    clickBtn.className = 'click-btn';
    clickBtn.innerHTML = 'BUY';
    document.body.appendChild(clickBtn);
    clickBtn.onclick = () => {
        infoDiv.style.background = 'grey';
    };
    
}

addToListBtn.addEventListener('click', addToList);


}


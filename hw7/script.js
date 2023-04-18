window.onload = () => {
    //2) Отримати кожен елемент з html документу в змінні
    let header = document.querySelector('header');
    console.log(header);

    let navigationMenu = document.querySelector('nav');
    console.log(navigationMenu);

    let ulList = document.querySelector('ul');
    console.log(ulList);

    let allLiElements = document.querySelectorAll('ul>li');
    console.log(allLiElements);

    let footer = document.querySelector('footer');
    console.log(footer);

    //3) Створити змінну з массивом і заповнити всі li елементи данними з масиву
    let [...allLiElementsArr] = document.querySelectorAll('ul>li');
    console.log(allLiElementsArr);

    //4)Створіть функцію яка приймає массив обєктів і створює div 
    //з классом product-list в якому є карточки товару в вигляді 
    //діва з класом card  в середині інформація з обєкте

    let productInfo = [
        {
            name: 'pen',
            color: 'red',
            price: 18,
        },
        {
            name: 'pencil',
            color: 'blue',
            price: 7,
        },
        {
            name: 'book',
            color: 'yellow',
            price: 14,
        },
        {
            name: 'ruler',
            color: 'black',
            price: 3,
        }
    ];

    function productCard() {
       
        let productList = document.createElement('div');
            productList.className = 'product-list';
        for(let item of productInfo) {
            let cardInfo = document.createElement('div');
                cardInfo.className = 'card';
                cardInfo.innerHTML = item;
            productList.appendChild(cardInfo);
        }
        return productList;
    }
    productCard(productInfo);
}
window.onload = () => {
/*1)Створити кнопку при натисканні на яку створюється дів з порядковим номером всередині, 
якщо створено більше 5 дівів. Покажіть на сторінці кнопку, видалити всі створені елементи. 
При натисканні на кнопку всі створенні div елементи видаляються*/
    let btnCreate = document.createElement('button');
    btnCreate.className = 'new-btn';
    btnCreate.setAttribute('style', 'width: 90px; height: 50px');
    btnCreate.innerHTML = 'div maker'
    document.body.appendChild(btnCreate);

    function createDivElement () {
        let newDivEl = document.createElement('div');
        let [...allDivs] = document.querySelectorAll('div');
        for(let i = 0; i <= allDivs.length; i++) {
            newDivEl.innerHTML= `${i+1} div`;
        }
        document.body.appendChild(newDivEl);
    }
    btnCreate.addEventListener('click', createDivElement);
    
    let btnRem = document.createElement('button');
    btnRem.className = 'remove-btn';
    btnRem.setAttribute('style', 'width: 90px; height: 50px');
    btnRem.innerHTML = 'div remover'
    document.body.appendChild(btnRem);
   
    btnRem.onclick = () => {
        
    }
}

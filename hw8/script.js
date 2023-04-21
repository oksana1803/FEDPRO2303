window.onload = () => {
    // 1) Створіть 10 тегів А в яких заданий class="menu-item", target, href зі занченнями index1.html, index2.html і т.д
    for(let i = 1; i < 11; i++) {
        let tags = document.createElement('a');
        tags.innerHTML = `tag ${i} <br>`
        tags.className = 'menu-item';
        tags.setAttribute('href', `index${i}.html`);
        tags.setAttribute('target', '_blank');
        document.body.appendChild(tags);
        //2) Задайте створеним елементам за допомогою js правило display:inline-block, падінг 20рх а також змініть колір на червоний
        tags.setAttribute('style', 'display:inline-block');
        tags.style.cssText += 'padding:20px;color:red';
    }
     //3)Задайте 3 елементу в списку додатковий класс active
    let thirdElement = document.querySelector("a:nth-child(4)");
    thirdElement.classList.add('active');
    /*4) Створіть в html форму з інпутами в яких є атрибут дісейблед, 
        за допомогою Js виберіть всі інпути на сторінці і видаліть в них атрибут disabled 
        та задайте бекграунд зеленого кольору, а колір шрифта зробіть білим
    */
    let [...formInputs] = document.querySelectorAll('input');

    function inputs() {
        for(let i = 0; i < formInputs.length; i++) {
            formInputs[i].removeAttribute('disabled');
            formInputs[i].setAttribute('style', 'background: green');
            formInputs[i].style.color = 'white';
        }
    }
    inputs(formInputs);
}
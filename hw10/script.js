window.onload = () => {

    //1) створрити блок який рухається всередині сторінки при натисканні стрілок на клавіатурі
    /*1*) Версія складніше де блок рухається всередині іншого блоку і якщо він виходить 
    під час руху за межі блоку то зупиняє рух */
    let secondBlock = document.querySelector(".secondBlock");
    secondBlock.setAttribute('style', 'width:200px;height:200px;background:blue');
    secondBlock.style.position = 'absolute';
    secondBlock.style.top = 0;
    secondBlock.style.left = 0;

    let firstBlock = document.querySelector('.firstBlock');
    firstBlock.setAttribute('style', 'width:900px;height:500px;background:pink');
    firstBlock.style.position = 'relative';

    let body = document.querySelector('body');

    let x = 0;
    let y = 0;

    let xStep = 10;
    let yStep = 10;

    function moveBlock (e) {
        if(e.code === 'ArrowRight') {
            x = x + xStep;
            secondBlock.style.left = x;
        }
        else if(e.code === 'ArrowDown') {
            y = y + yStep;
            secondBlock.style.top = y;
        }
        else if(e.code === 'ArrowLeft') {
            x = x - xStep;
            secondBlock.style.left = x;
        }
        else if(e.code === 'ArrowUp') {
            y = y - yStep;
            secondBlock.style.top = y;
        }
    }
    body.addEventListener('keydown', moveBlock);

   //////////////////////////////////////////////////
    /*2) Створити html блок в якому повині змінюватись картиники  з массиву кожні 3 секунди, 
    умова щоб слайд був безкінечним ( картинки можуть бути локальними у вас в проекті тоді вказуєте шлях, 
    або це може бути шлях до картинок з інтернету)
    2**) Створіть в слайдері стрілки наступна і попередня картинка, 
    при наведенні мишки на слайдер він повинен зупинятись, 
    при виході мишки за межі слайдера продовжувати роботу */
    let images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];

    let image = document.querySelector('.img');
    let sliderEl = document.querySelector('.slider');
    image.style.width = '900px';
    image.style.height = '600px';
    sliderEl.style.textAlign = 'center';
    let sliderCounter = 0;

    let slider = () => {
        image.setAttribute('src', images[sliderCounter]);
        sliderCounter++;
        if (sliderCounter === 5) {
            sliderCounter = 0;
        }
    }
    setInterval(slider, 1000)
}

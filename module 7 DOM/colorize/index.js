
document.addEventListener('DOMContentLoaded', function() {
    let colorInput = document.querySelector('.color-input');
    let colorBlock = document.querySelector('.color-block');
    let clearButton = document.querySelector('.clear-color-button');

    function paintBlock() {
        colorBlock.style.backgroundColor = colorInput.value;
    }

    colorInput.addEventListener('input', paintBlock);

    paintBlock();


    clearButton.addEventListener('click', function() {
        colorBlock.style.removeProperty('background-color');
        colorInput.value = '';
    }); 

});







// let h1 = document.createElement('h1');
// h1.textContent = 'Список покупок';
// document.body.append(h1);

// let ol = document.createElement('ol');
// document.body.append(ol);

// let list = [
//     document.createElement('li'),
//     document.createElement('li'),
//     document.createElement('li')
// ];

// list[0].textContent = 'бензопила';
// list[1].textContent  = 'молоко';
// list[2].textContent  = 'хлеб';

// ol.prepend(list[0]);
// ol.prepend(list[1]);
// ol.prepend(list[2]);
// let eggs = document.createElement('li');
// eggs.textContent = 'яйки';
// list[2].before(eggs);

// let sausage = document.createElement('li');
// sausage.textContent = 'sosisk';
// list[0].after(sausage);


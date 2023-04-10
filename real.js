const text_out = document.querySelector('.number .txt');
const click = document.querySelector('.box .button .click');
const clear = document.querySelector('.box .button2 .clear');




let text = 0;
text_out.innerHTML = text;

click.addEventListener('click', () => {

    
    text += 1;
    text_out.innerHTML = text;
})

clear.addEventListener('click', () => {
    text_out.innerHTML = "";
    text = 0;
})



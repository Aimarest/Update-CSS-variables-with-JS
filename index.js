//Variables de elementos del DOM:

const inputs = document.querySelectorAll('.input');
const root = document.documentElement;
const title = document.querySelector('.title');


//Función manejadora del evento:

function handleChangeInput(ev) {
    const property = ev.target.name;
    const value = ev.target.value;
    const sizing = this.dataset.sizing || '';
    root.style.setProperty(`--${property}`, ` ${value}` + `${sizing}`);
   // title.style.color = value;
}

//Evento:

inputs.forEach(input => input.addEventListener('input', handleChangeInput));

/*

Código con el que se podría cambiar elemento por elemento, con funciones específicas y cambiando directamente las propiedades de cada elemento del DOM (no las variables):

**** Variables de los elementos del DOM ****

const color = document.querySelector('.variables__color');
const image = document.querySelector('.effects__image');
const blurInput = document.querySelector('.variables__blur');
const spacing = document.querySelector('.variables__spacing');
const title = document.querySelector('.title');

**** Funciones ****

function handleChangeBlur(ev){
    console.log('Se está cambiando la visión',ev.target.value);
    image.style.filter = `blur(${ev.target.value}px)`;
}
function handleChangeColor(ev){
console.log('Está cambiando el color');
console.log(ev.target.value)
image.style.backgroundColor = ev.target.value;
title.style.color = ev.target.value;
};

function handleChangeSpacing(ev){
    console.log('Se esta cambiando el padding de la imagen',ev.target.value,'px')
image.style.padding = `${ev.target.value}px`;
}

**** Eventos ****


blurInput.addEventListener('input',handleChangeBlur);
color.addEventListener('input', handleChangeColor);
spacing.addEventListener('input', handleChangeSpacing)

*/

'use strict';

//Variables de los elementos del DOM:

const color = document.querySelector('.variables__color');
const image = document.querySelector('.effects__image');
const blurInput = document.querySelector('.variables__blur');
const spacing = document.querySelector('.variables__spacing');
const title = document.querySelector('.title');
//Funciones:
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
blurInput.addEventListener('input',handleChangeBlur);
color.addEventListener('input', handleChangeColor);
spacing.addEventListener('input', handleChangeSpacing)
const alpha = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = '@#!%-$+'
let len = 0;
let temp = '';
let password = '';


document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
  len = prompt("How long do you want your password to be?(8-128)");
  
  if (len < 8 ) {
    alert("Length is too short");
    return handleClick();
  };
  if (len > 128){
    alert("Length is too long");
    return handleClick();
  };
  if (isNaN(len)) {
    alert ("That is invalid, please choose a numerical value");
    return handleClick();
  };

  let upper = prompt('Would you like uppercase letter?');

  if (upper){
    temp += alpha;
  };

  let lower = prompt("Would you like lowercase letter?");
  
  if (lower) {
    temp += alpha.toLowerCase();
  }
}
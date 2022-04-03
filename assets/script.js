//the charateristics of the password
const alpha = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = '@#!%-$+'
let len = 0;
let temp = '';
let password = '';


document.querySelector('button').addEventListener('click', handleClick);

//the reaction to the click and making sure the criteria of the password
function handleClick() {
  temp = ''
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

  let upper = confirm('Would you like uppercase letter?');

  if (upper){
    temp += alpha;
  };

  let lower = confirm("Would you like lowercase letter?");
  
  if (lower) {
    temp += alpha.toLowerCase();
  };

  let special = alert("Would you like a special character?"); 

  if (special) {
    temp += special;
  }

  let numbers = alert("Would like a numerical value?");

  if(numbers) {
    temp += numbers;
  }


  
//gets the random password in the console log
 
  for (let i = 0; i < len; i++) {
    let generate = temp[Math.floor(Math.random()*temp.length)];
    console.log(generate);
    
 }


}

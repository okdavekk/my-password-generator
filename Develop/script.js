// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var LOWERCASE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
  var UPPERCASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var NUMBER_CHARACTERS = "1234567890"
  var SYMBOL_CHARACTERS = "!@#$%^&*(){}[]=<>/,.";


  var passwordLength = window.prompt ("Password Length.  Select 8 through 128 Characters"); 
  console.log(passwordLength)

  var lowercaseCheck = window.confirm ("Would you like lowercase characters?");
  console.log(lowercaseCheck)

  var uppercaseCheck = window.confirm ("Would you like uppercase characters?");
  console.log(uppercaseCheck)

  var numberCheck = window.confirm ("Would you like numbers in your password?");
  console.log(numberCheck)

  var symbolCheck = window.confirm ("Would you like symbols in your password?");
  console.log(symbolCheck)

  var usableCharacters = ""
  if (lowercaseCheck === true) {
    usableCharacters += LOWERCASE_CHARACTERS;
  }
  if (uppercaseCheck === true) {
    usableCharacters += UPPERCASE_CHARACTERS;
  }
  if (numberCheck === true) {
    usableCharacters += NUMBER_CHARACTERS;
  
  }
  if (symbolCheck === true) {
    usableCharacters += SYMBOL_CHARACTERS;
  }
    console.log(usableCharacters)
}




// Add event listener to generate button

// const element = document.getElementById("generate");

generateBtn.addEventListener("click", writePassword);









  
//textarea id = "password"


// button id = generate 

// alert()
// alert(message)

// confirm(message)

// prompt()
// prompt(message)
// prompt(message, default)







// 
// 
// 
// 
// 
//Code from this video https://www.youtube.com/watch?v=duNmhKgtcsI


// Dom Elements
// const resultPrompt = document.getElementById('result');
// const lengthPrompt = document.getElementById('length');
// const lowercasePrompt = document.getElementById('lowercase');
// const uppercasePrompt = document.getElementById('uppercase');
// const numericPromp = document.getElementById('numeric');const resultGenerate = document.getElementById('generate');

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// resultGenerate.addEventListener('click', () => {
//   const length = lengthPrompt.value;
//   const hasLower = lowercasePrompt.checked
// }

//Generator Functions
// function getRandomLower() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

//  function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//  }

//  function getRandomSymbol() {
//   const symbols = '!@#$%^&*(){}[]=<>/,.';
//   return symbols[Math.floor(Math.random() * symbols.length)];
//  }



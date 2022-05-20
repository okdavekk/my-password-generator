// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

const element = document.getElementById("generate");

generateBtn.addEventListener("click", writePassword);



  
//textarea id = "password"


// button id = generate 

alert()
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
//Generator functions https://www.youtube.com/watch?v=duNmhKgtcsI

// function getRandomLower() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// console.log(Math.floor(Math.random() * 26) + 97);

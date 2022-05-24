// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//THE GENERATION OF THE PASSWORD CHARACTERS AND THE generatePassword function
//THE GENERATION OF THE PASSWORD CHARACTERS AND THE generatePassword function
//THE GENERATION OF THE PASSWORD CHARACTERS AND THE generatePassword function
function generatePassword(){
  var LOWERCASE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
  var UPPERCASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var NUMBER_CHARACTERS = "1234567890"
  var SYMBOL_CHARACTERS = "!@#$%^&*(){}[]=<>/,.";






//VARIABLES AND WINDOWS
//VARIABLES AND WINDOWS
//VARIABLES AND WINDOWS
  
  //passwordLength VARIABLE AND WINDOWS
  var passwordLength = parseInt(prompt ("Password Length.  Select 8 through 128 Characters")); 
  console.log(passwordLength)
  if (!passwordLength) {
    alert("You must input a value from 8 through 128");
  } 
  if (passwordLength < 8) {
    alert("You must select a number greater than or equal to 8");
  }
  if (passwordLength > 128) {
    alert ("You must pick a number less than or equal to 128")
  }

  //lowercaseCheck VARIABLE AND WINDOWS
  var lowercaseCheck = window.confirm ("Would you like lowercase characters?");
  console.log(lowercaseCheck)
  if (!lowercaseCheck) {
    alert("You must select that you want to include lowercase characters")
  }

  //uppercaseCheck VARIABLE AND WINDOWS
  var uppercaseCheck = window.confirm ("Would you like uppercase characters?");
  console.log(uppercaseCheck)
  if (!uppercaseCheck) {
    alert("You must select that you would like uppercase characters")
  }

  //numberCheck VARIABLE AND WINDOWS
  var numberCheck = window.confirm ("Would you like numbers in your password?");
  console.log(numberCheck)
  if (!numberCheck) {
    alert("You must select that you would like number characters")
  }

  //symbolCheck VARIABLE AND WINDOWS
  var symbolCheck = window.confirm ("Would you like symbols in your password?");
  console.log(symbolCheck)
  if (!numberCheck) {
    alert("You must select that you would like symbol characters")
  }



//AGGREGATE OF CHARACTERS AFTER PROMPTS
//AGGREGATE OF CHARACTERS AFTER PROMPTS
//AGGREGATE OF CHARACTERS AFTER PROMPTS
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

return"";

}


// Add event listener to generate button
// Add event listener to generate button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









  

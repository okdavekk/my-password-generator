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


// Can wrap it in "number" to get the consol log of length to turn from white to purple.  String to integer.  

  var passwordLength = parseInt(prompt ("Password Length.  Select 8 through 128 Characters")); 
  console.log(passwordLength)
  
  if (passwordLength >= 8 && input <= 128){

  } else {
    alert("Please select a number between 8 and 128.");
  }
  

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

return "";

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);









  

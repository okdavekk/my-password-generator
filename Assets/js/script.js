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


  var passwordLength = parseInt(prompt ("Password Length.  Select 8 through 128 Characters")); 
  console.log(passwordLength)
  
  // if (passwordLength >= 8 && input <= 128) {
    // alert("Please select a number between 8 and 128.");
    // return init()
  // } else {
  //   alert("Please select a number between 8 and 128.");

  // } 
  

  // element.setAttribute("required", "");   

  

  var lowercaseCheck = window.confirm ("Would you like lowercase characters?");
  console.log(lowercaseCheck)
  if (!lowercaseCheck) {
    alert("You must select OK")
  }

  var uppercaseCheck = window.confirm ("Would you like uppercase characters?");
  console.log(uppercaseCheck)
  if (!uppercaseCheck) {
    alert("You must select OK")
  }

  var numberCheck = window.confirm ("Would you like numbers in your password?");
  console.log(numberCheck)
  if (!numberCheck) {
    alert("You must select OK")
  }


  var symbolCheck = window.confirm ("Would you like symbols in your password?");
  console.log(symbolCheck)
  if (!numberCheck) {
    alert("You must select OK")
  }


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

return "";

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);









  

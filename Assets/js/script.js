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
function generatePassword() {
  var LOWERCASE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
  var UPPERCASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var NUMBER_CHARACTERS = "1234567890"
  var SYMBOL_CHARACTERS = "!@#$%^&*(){}[]=<>/,.";





  //VARIABLES AND WINDOWS
  //VARIABLES AND WINDOWS
  //VARIABLES AND WINDOWS

  //passwordLength VARIABLE AND WINDOWS
  var passwordLength = parseInt(prompt("Password Length.  Select 8 through 128 Characters"));
  console.log(passwordLength)
  if (!passwordLength) {
    alert("You must input a value from 8 through 128.  Start over");
    return generatePassword();
  }
  if (passwordLength < 8) {
    alert("You must select a number greater than or equal to 8.  Start over");
    return generatePassword();
  }
  if (passwordLength > 128) {
    alert("You must pick a number less than or equal to 128. Start over")
    return generatePassword();
  }

  //lowercaseCheck VARIABLE AND WINDOWS
  var lowercaseCheck = window.confirm("You must select that you want to include lowercase characters");
  console.log(lowercaseCheck)
  if (!lowercaseCheck) {
    alert("You must select that you want to include lowercase characters.  Start over")
    return generatePassword();
  }

  //uppercaseCheck VARIABLE AND WINDOWS
  var uppercaseCheck = window.confirm("You must select that you would like uppercase characters");
  console.log(uppercaseCheck)
  if (!uppercaseCheck) {
    alert("You must select that you would like uppercase characters.  Start over")
    return generatePassword();
  }

  //numberCheck VARIABLE AND WINDOWS
  var numberCheck = window.confirm("You must select that you would like number characters");
  console.log(numberCheck)
  if (!numberCheck) {
    alert("You must select that you would like number characters. Start over")
    return generatePassword();
  }


  //symbolCheck VARIABLE AND WINDOWS
  var symbolCheck = window.confirm("You must select that you would like symbol characters");
  console.log(symbolCheck)
  if (!symbolCheck) {
    alert("You must select that you would like symbol characters.  Start over")
    return generatePassword();
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



  //NEW FORMULA AFTER AGGREGATION
  //NEW FORMULA AFTER AGGREGATION
  //NEW FORMULA AFTER AGGREGATION
  // var generatePassword = "";
  // var characters = usableCharacters;
  // var charactersLength = passwordLength;

  // for (var i = 0; i < length; i++) {
  //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
  // }
  // console.log(result);

}


// Add event listener to generate button
// Add event listener to generate button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














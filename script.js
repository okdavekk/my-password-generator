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
  

  //START: VARIABLES AND WINDOWS
  //START: VARIABLES AND WINDOWS
  //START: VARIABLES AND WINDOWS

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

  //lowercaseCheck VARIABLE
  var lowercaseCheck = window.confirm("Press OK to add lowercase characters to your password.");
  console.log(lowercaseCheck)

  //uppercaseCheck VARIABLE
  var uppercaseCheck = window.confirm("Press OK to add uppercase characters to your password.");
  console.log(uppercaseCheck)

  //numberCheck VARIABLE
  var numberCheck = window.confirm("Press OK to add number characters to your password.");
  console.log(numberCheck)

  //symbolCheck VARIABLE
  var symbolCheck = window.confirm("Press OK to add symbol characters to your password.");
  console.log(symbolCheck)

  //REPLAY IF ZERO VARIABLES ARE SELECTED (MINUS passwordLength)  
  if (
    !lowercaseCheck &&
    !uppercaseCheck &&
    !numberCheck &&
    !symbolCheck) {
    alert("Please select at least one character type.");
    return generatePassword();
  }
  //END: VARIABLES AND WINDOW
  //END: VARIABLES AND WINDOW
  //END: VARIABLES AND WINDOW


  //START: AGGREGATE OF CHARACTERS AFTER PROMPTS
  //START: AGGREGATE OF CHARACTERS AFTER PROMPTS
  //START: AGGREGATE OF CHARACTERS AFTER PROMPTS
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
  console.log(usableCharacters);
  //END: AGGREGATE OF CHARACTERS AFTER PROMPTS
  //END: AGGREGATE OF CHARACTERS AFTER PROMPTS
  //END: AGGREGATE OF CHARACTERS AFTER PROMPTS


  //ATTACHES TO FUNCTION BELOW
  // var theFinalString = document.getElementById("password");
  var usableCharactersArray = usableCharacters.split("");
  generateString(passwordLength, usableCharactersArray);

  var theFinalString = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * usableCharactersArray.length);
    var randomCharacter = usableCharactersArray[randomIndex];
    theFinalString += randomCharacter;
  }

  return theFinalString;
}

//Generate password string function.  I copied this below above in an 11th hr attempt to get the password to generate in the box and it did.  I want to thank Juan Santiago for helping me with this function below and tieing it to the above function, which led me to paste that function above.
function generateString(passwordLength, usableCharactersArray) {
  var theFinalString = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * usableCharactersArray.length);
    var randomCharacter = usableCharactersArray[randomIndex];
    theFinalString += randomCharacter;
  }

  //Why is this different then the text box output?
  console.log(theFinalString);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Wow what a hard one....
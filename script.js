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
  var result = []




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
  console.log(usableCharacters);



  //NEW FORMULA AFTER AGGREGATION
  //NEW FORMULA AFTER AGGREGATION
  //NEW FORMULA AFTER AGGREGATION

  // function getRandomIndex(str) {
  //   var randomIndex = Math.floor(Math.random() * str.length);
  //   var randomCharacter = str[getRandomIndex];
  //   // return randomCharacter;
  //   console.log(randomCharacter);
  // }


  // TODO What I know is that I need to be able to make the password long enough to hold 128 characters (reusing some)

  // TODO Need to work on below for statement to return a random set of characters from selections above and it includes at least one type of character selection and the selected character length

  var usableCharactersArray = usableCharacters.split("");

  generateString(passwordLength, usableCharactersArray);


  // var generatePassword = "";
  // // console.log(generatePassword);
  // var characters = usableCharacters;
  // // console.log(characters);
  // // console.log(usableCharacters);
  // var charactersLength = passwordLength;
  // // console.log(passwordLength);
  // // console.log(charactersLength);

}



function generateString(passwordLength, usableCharactersArray) {
  var result = "";
  // console.log(usableCharactersArray);
  for (var i = 0; i < passwordLength; i++) {
    // result += characters[i].charAt(Math.floor(Math.random() * charactersLength));
    var randomIndex = Math.floor(Math.random()* usableCharactersArray.length);
    var randomCharacter = usableCharactersArray[randomIndex];
    result += randomCharacter;
  }
  console.log(result);
  return result;
}


// Add event listener to generate button
// Add event listener to generate button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
















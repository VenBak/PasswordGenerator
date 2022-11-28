// Assignment Code
generateBtn = document.querySelector("#generate");
Integers = ["0123456789"];
lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
specialCharacters = ["~`!@#£€$¢¥§%°^&*,()-_+={}[]|/:;<>.?"];
password = [];
passwordPool = [];
userpassword = "";

// Write password to the #password input


function writePassword() {  
  
  // Ask for the length of the password 
  var passwordLength = prompt("How many characters do you wish your password to be in length. 8-128 characters");
  
  // Make sure the password length isn't out of bounds
  if ((passwordLength < 8) || (passwordLength > 128) || (isNaN(passwordLength)) || (!passwordLength)) {
    alert("Please enter a number within 8-128 characters");
    return;
  } else { // Continues

  // Ask the criteria for the password and store the value

  
  var wantinteger = confirm("Do you want integers in your password ?");
  var wantlowercase = confirm("Do you want lower case characters in your password ?");
  var wantuppercase = confirm("Do you want upper case characters in your password ?");
  var wantspecial = confirm("Do you want special characters in your password ?");
  

  // Combine the array of characters together when user presses yes

  // If they want everything
  if ((wantinteger) && (wantlowercase) && (wantuppercase) && (wantspecial)) {
    passwordwithInt = passwordPool.concat(Integers);
    passwordwithIntLow = passwordwithInt.concat(lowercaseLetters);
    passwordwithIntLowUp = passwordwithIntLow.concat(uppercaseLetters);
    passwordwithIntLowUpSpec = passwordwithIntLowUp.concat(specialCharacters);
    var password = passwordwithIntLowUpSpec;
    // If they want nothing
  } else if ((!wantinteger) && (!wantlowercase) && (!wantuppercase) && (!wantspecial)) {
    alert("Please enter a minimum requirement of 1 criteria");
    // If they only want special characters
  } else if ((!wantinteger) && (!wantlowercase) && (!wantuppercase) && (wantspecial)) {
    passwordwithSpec = passwordPool.concat(specialCharacters);
    var password = passwordwithSpec;
    // If they only want special characters and upper case letters
  } else if ((!wantinteger) && (!wantlowercase) && (wantuppercase) && (wantspecial)) {
    passwordwithSpec = passwordPool.concat(specialCharacters);
    passwordwithSpecUp = passwordwithSpec.concat(uppercaseLetters);
    var password = passwordwithSpecUp;
    // If they only want special characters, upper case letters and lower case letters
  } else if ((!wantinteger) && (wantlowercase) && (wantuppercase) && (wantspecial)) {
    passwordwithSpec = passwordPool.concat(specialCharacters);
    passwordwithSpecUp = passwordwithSpec.concat(uppercaseLetters);
    passwordwithSpecUpLow = passwordwithSpecUp.concat(lowercaseLetters);
    var password = passwordwithSpecUp;
    // If they only want integers
  } else if ((wantinteger) && (!wantlowercase) && (!wantuppercase) && (!wantspecial)) {
    passwordwithInt = passwordPool.concat(Integers);
    var password = passwordwithInt;
    // If they only want integers and lower case letters
  } else if ((wantinteger) && (wantlowercase) && (!wantuppercase) && (!wantspecial)) {
    passwordwithInt = passwordPool.concat(Integers);
    passwordwithIntLow = passwordwithInt.concat(lowercaseLetters);
    var password = passwordwithIntLow;
    // If they only want integers, lower case letters and upper case letters
  } else if ((wantinteger) && (wantlowercase) && (wantuppercase) && (!wantspecial)) {
    passwordwithInt = passwordPool.concat(Integers);
    passwordwithIntLow = passwordwithInt.concat(lowercaseLetters);
    passwordwithIntLowUp = passwordwithIntLow.concat(uppercaseLetters);
    var password = passwordwithIntLowUp;
    // If they only want integers and upper case letters
  } else if ((wantinteger) && (!wantlowercase) && (wantuppercase) && (!wantspecial)) {
    passwordwithInt = passwordPool.concat(Integers);
    passwordwithIntUp = passwordwithInt.concat(uppercaseLetters);
    var password = passwordwithIntUp;
    // If they only want integers and special characters
  } else if ((wantinteger) && (!wantlowercase) && (!wantuppercase) && (wantspecial)) {
    passwordwithInt = passwordPool.concat(Integers);
    passwordwithIntSpec = passwordwithInt.concat(specialCharacters);
    var password = passwordwithIntSpec;
    // If they only want lower case letters
  } else if ((!wantinteger) && (wantlowercase) && (!wantuppercase) && (!wantspecial)) {
    passwordwithLow = passwordPool.concat(lowercaseLetters);
    var password = passwordwithLow;
    // If they only want lower case letters and special characters
  } else if ((!wantinteger) && (wantlowercase) && (!wantuppercase) && (wantspecial)) {
    passwordwithLow = passwordPool.concat(lowercaseLetters);
    passwordwithLowSpec = passwordwithLow.concat(specialCharacters);
    var password = passwordwithLowSpec;
    // If they only want upper case letters
  } else if ((!wantinteger) && (!wantlowercase) && (wantuppercase) && (!wantspecial)) {
    passwordwithUp = passwordPool.concat(uppercaseLetters);
    var password = passwordwithUp;
    // If they only want upper case letters and lower case letters
  } else if ((!wantinteger) && (!wantlowercase) && (wantuppercase) && (!wantspecial)) {
    passwordwithUp = passwordPool.concat(uppercaseLetters);
    passwordwithUpLow = passwordwithUp.concat(lowercaseLetters);
    var password = passwordwithUpLow;
    // If they only want upper case and Integers 
  } else if ((wantinteger) && (!wantlowercase) && (wantuppercase) && (!wantspecial)){
    passwordwithUp = passwordPool.concat(uppercaseLetters);
    paswordwithUpInt = passwordwithUp.concat(Integers);
    var password = passwordwithUpInt;
  }
  console.log(passwordLength);
  console.log(password);
  // Get me a random index from the array
  for (var i = 0; i < passwordLength; i++) {
    // Get a random part of the array, such as number, lower, upper or special
    var randomItem = password[Math.floor(Math.random()*password.length)];
    // Get a random piece of the array selected
    var randomChar = randomItem.charAt(Math.floor(Math.random() * randomItem.length));
    // Add the random piece of the array to the final password
    userpassword = userpassword + randomChar;
  }
  
  // Pastes the password inside of the text area
  var textarea = document.querySelector("#password");
  var text = document.createTextNode(userpassword);
  textarea.appendChild(text);
  
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

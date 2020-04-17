// Assignment Code
var generateBtn = document.querySelector("#generate");


// Whatever goes in this function will appear on the page, when clicking the "Generate Password" button.
function generatePassword() {
  return "hi";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



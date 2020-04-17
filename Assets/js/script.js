// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  // Triggers function for Pass length
  passLengthOption();

  // Stores text to write to the html 
  let password = generatePassword();
  
  // Stores the id #password so it can be used here.
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Ask Prompt for password length 
function passLengthOption() {
  let pasLengthUser = confirm("Test");
}



// Values in this function will appear on the page, when clicking the "Generate Password" button.
function generatePassword() {
  return "hi";
}
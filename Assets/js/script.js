// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Ask Prompt for password length 
function passLengthOption() {
  let customPassLength = confirm("Would you like to specify a password length?");
  
  // If argument equals true, then the if statement is triggered. Otherwise the else statement is triggered. 
  if (customPassLength) {
    // Calls the below function
    getUserPassLength();
    return userValidLength;
    // This function triggers and validates the user's pass length submission
    function getUserPassLength () {

      // This asks the user for their length
      let customPassUser = prompt("Pick a number between 8 and 128 for your character length.");

      // verifies submission is a number between 8 and 128.
      if (customPassUser >= 8 && customPassUser <= 128) {
        
        // Lets the user's answer be used on the global scope
        return userValidLength = customPassUser;

      } else {

        // This asks the user to submit a valid pass length again 
        getUserPassLength();

      }
    }

    // Submit false which will make the default length 8
  } else {
    return customPassUser = 8;
  }

}


// Write password to the #password input
function writePassword() {
  // Triggers function for Pass length
  // passLengthOption();
  console.log(passLengthOption());

  // Stores text to write to the html 
  let password = generatePassword();
  
  // Stores the id #password so it can be used here.
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Values in this function will appear on the page, when clicking the "Generate Password" button.
function generatePassword() {
  return "hi";
}








/*
// Ask Prompt for password length 
function passLengthOption() {
  let customPassLength = confirm("Would you like to specify a password length?");
  
  // If argument equals true, then the if statement is "truthy" and is triggered. Otherwise the else statement is. 
  if (customPassLength) {
    
    // This asks the user for their length
    let customPassUser = prompt("Pick a number between 8 and 128 for your character length.");

    // verifies that the user submission is a number and between 8 and 128.
    if (customPassUser >= 8 && customPassUser <= 128) {
      return customPassUser;
    } else {
      console.log("Return to prevoius prompt");
    }

    // Submit false which will make the default length 8
  } else {
    return customPassUser = 8;
  }

}
*/
// Assignment Code
let generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// -------------------------------------------------


// Ask Prompt for password length 
function passLengthOption() {
  let passLengthConfirm = confirm("Would you like to specify a password length?");

  // If argument equals true, then the if statement is triggered. Otherwise the else statement is triggered. 
  if (passLengthConfirm) {

    // Calls the below function
    getUserPassLength();

    // Adds user submission to the Global Scope
    return userValidLength;

    // Triggers/validates the user's submission
    function getUserPassLength () {

      // Asks the user for their desired pass length
      let customPassUser = prompt("Pick a number between 8 and 128 for your character length.");

      // Verifies submission is a number between 8–128
      if (customPassUser >= 8 && customPassUser <= 128) {
        
        // Adds user submission to the above Scope
        return userValidLength = customPassUser;

      } else {
        // Validates if a user wants to continue or cancel the prompt 
        if (customPassUser) {
          // Asks the user to re-submit a valid pass length 
          getUserPassLength();
        } else {
          // Updates the default to 8
          customPassUser = 8;
          // Returns 8 to the above scope and stops the function
          return userValidLength = customPassUser; 
        }
      }
    }

    // If confirm is declined this sets the default length to 8
  } else {
    return customPassUser = 8;
  }

}


// -------------------------------------------------

// Choosing a character type  

// Character Type Object  
let characterType = {
  // Arrays for each type
  upperCaseChar: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCaseChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numbersChar: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialChar: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]"],

  characterTypeOption: function() {
    let characterTypeConfirm = confirm("Would you like to include a special character ?");
  }


};




// -------------------------------------------------

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
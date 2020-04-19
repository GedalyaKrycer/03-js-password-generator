// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// -------------------------------------------------

// Choosing a Password Length 

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
    function getUserPassLength() {

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
    return userValidLength = 8;
  }
}


// -------------------------------------------------


// Choosing a Character Type  

// Object that tells the system which options to include 
let typesVerified = {
  yesUpper: true, 
  yesLower: true,
  yesNum: true,
  yesSpecial: true
}; 

// Function to reset the booleans 
function charTypesReset() {
  typesVerified = {
    yesUpper: true, 
    yesLower: true,
    yesNum: true,
    yesSpecial: true
  }; 
}

// Character Type Object  
let characterType = {
  // Strings of each type of character, which will get converted into arrays further down the page
  upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCaseChar: "abcdefghijklmnopqrstuvwxyz",
  numbersChar: "0123456789",
  specialChar: "!#$%&=@",

  // Asks Prompt for Character Type
  characterTypeOption: function() {
    let charTypeConfirm = confirm("Would you like to customize which character types to include?");

    // If argument equals true, then the if statement is triggered. Otherwise the else statement is triggered. 
    if (charTypeConfirm) {
      
      // Asks user to confirm uppercase types
      let askUpper = confirm("Would you like to include uppercase characters? \n(Example: ABC)");

      // Asks user to confirm lowercase types
      let askLower = confirm("Would you like to include lowercase characters? \n(Example: abc)");

      // Asks user to confirm number types
      let askNum = confirm("Would you like to include number characters? \n(Example: 123)");

      // Asks user to confirm lowercase types
      let askSpecial = confirm("Would you like to include special characters? \n(Example: !#&)");

      // Validations on what the user confirmed
      askUpper != true ? typesVerified.yesUpper = false : true;

      askLower != true ? typesVerified.yesLower = false : true;

      askNum != true ? typesVerified.yesNum = false : true;

      askSpecial != true ? typesVerified.yesSpecial = false : true;

      // Returns the results of the above validations 
      return [askUpper, askLower, askNum, askNum];


      // If confirm is declined this sets the default length to 8
    } else {

        // Tells the system to include all options. 
        return typesVerified;
      }
  }

};

// -------------------------------------------------


// Write password to the #password input
function writePassword() {
  
  // Triggers function for Password length
  passLengthOption();

  // Triggers function for Character Type
  characterType.characterTypeOption();

  // Stores text to write to the html 
  let password = generatePassword();
  
  // Stores the id #password so it can be used here.
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Resets booleans to true so all the characters show up if the generate button is clicked again.
  charTypesReset();
}

// -------------------------------------------------


// Values in this function will appear on the page, when clicking the "Generate Password" button.
function generatePassword() {
  
  // Empty array to hold the user selections below
  let charSelectArray = [];

  // Empty array that holds the final password
  let finalPass = [];

  // Validates if uppercase has been selected  
  if (typesVerified.yesUpper) {
    charSelectArray.push(...characterType.upperCaseChar.split(""));
  } 

  // Validates if lowercase has been selected  
  if (typesVerified.yesLower) {
    charSelectArray.push(...characterType.lowerCaseChar.split(""));
  } 

  // Validates if num has been selected  
  if (typesVerified.yesNum) {
    charSelectArray.push(...characterType.numbersChar.split(""));
  } 

  // Validates if special cases has been selected  
  if (typesVerified.yesSpecial) {
    charSelectArray.push(...characterType.specialChar.split(""));
  } 
  
  // Loops through the user selected character array by the length they specified 
  for (let i = 0; i < userValidLength; i++) {

    // Randomly selects a character from the charter slection and saves it to a new var
    let random = charSelectArray[Math.floor(Math.random() * charSelectArray.length)];

    // Adds the selection to the finalPass array
    finalPass.push(random);
  }

  // Returns the final password selection to the global scope and removes the array commas. 
  return finalPass.join("");
}
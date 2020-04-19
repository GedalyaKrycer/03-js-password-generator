# 03-js-password-generator
This is the 3rd homework assignment for Bootcamp, with the objective of building a password generator. HTML, CSS and click base event listeners were provided. 

## Highlights 
* Started with creating a [pseudo code](./Assets/psudo-code.md) file to start the process of creating the logic.

* Added comments for each line in the JS file to explain the logic

* Asks the user if they want to specify a character length 
    * Only accepts numbers equal to/above 8 and lower/equal to 128.
    * If the above conditions are not met the prompt is shown again.
    * If declined a default parameter of 8 is selected. 

* Asks the user if they want to specify include a range of 4 different character types.
    * Options include: Uppercase, Lowercase, Numbers and Special Characters 
    * Each option they confirm will be included in the generated password, while the others will be omitted. 
    * If they choose to specify the character types but do not make a any *truthy* confirms, there is a conditional to reset all character types to truthy. Without this the password would not be generated. 
    * If they decline to select character types, then all types will be included by default. 

* Code utilizes the ES6 `let` variable syntax 

* Lines 113–119 use **Ternary Operators** for DRY code style

* The `charTypesRest()` function is called on line 164, after all the code is ran. This fixes a bug that is caused when the *Generate Password* button is clicked again and the character types persist from the last time. Once called, the character types all reset to **true**. 
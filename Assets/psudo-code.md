# GIVEN I need a new, secure password



#### WHEN I click the button to generate a password
#### THEN I am presented with a series of prompts for password criteria
* Using the onClick event in HTML, it will call up a function that triggers the prompts to start. Below is a similar code example, pulled from W3.

```
<button onclick="myFunction()">Click me</button>
<p id="demo"></p>

<script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
    }
</script>
```

---

#### WHEN prompted for password criteria 
#### THEN I select which criteria to include in the password
* Using a `confirm()` I will first ask the user if they want to specify the length of th password. 
    * If they confirm **true**, then the below corresponding prompt will show up. (Stored in a function.) 
    * Else they confirm **false**, then the next confirm will be triggered. 
* Using a `confirm()` I will first ask the user if they want to include special characters. 
    * If they confirm **true**, then the below corresponding prompt will show up. (Stored in a function.) 
    * Else they confirm **false**, then the next confirm will be triggered. 


---


#### WHEN prompted for the length of the password
#### THEN I choose a length of at least 8 characters and no more than 128 characters
* The following actions will be stored in a function, which is triggered by the `confirm()` above.
* I will ask them to specify a number between 8-128, using a `prompt()`. 
* If the number is between 8-128, then the number will be stored in a variable for later reference.
* Else the number is below 8 or above 128, then I will alert them to stay within the range and will show them the prompt again, by calling the same function. 

---

#### WHEN prompted for character types to include in the password
#### THEN I choose lowercase, uppercase, numeric, and/or special characters
* The following actions will be stored in a function, which is triggered by the `confirm()` above.
* I will show an alert informing the user that they will now be able to select the character types to include. 
* Using 4 `confirm()` linked to their own variables, I will run through the 4 options for characters. 

---

#### WHEN I answer each prompt
#### THEN my input should be validated and at least one character type should be selected
* After all the characters variables above are filled, I am going to create a new function that checks them. 
* if they all equal false, then I will set "lowercase" to true. 

---

#### WHEN all prompts are answered
#### THEN a password is generated that matches the selected criteria
* Not sure what to do about this one yet.

---

#### WHEN the password is generated
#### THEN the password is either displayed in an alert or written to the page
* Will generate the final output from the step above, with an alert. If there is time, I will use a function to input the text on the html page somehow. 
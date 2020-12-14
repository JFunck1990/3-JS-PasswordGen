
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

//lengths
  // var minLength = 8;
  // var maxlength = 128;

//checkboxes
  var specialCheck = document.getElementById("inlineCheckbox1")[0];
  var numberCheck = document.getElementById("inlineCheckbox2")[0];
  var lowerCheck = document.getElementById("inlineCheckbox3")[0];
  var upperCheck = document.getElementById("inlineCheckbox4")[0];


  function passwordGen () {

    //Character Arrays for generating password
    var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "{", "}"];
    var possibleChar = [];
    var finalChar = [];
    var temp = [];

    // Adding the check boxes
    specialLet = document.getElementById("inlineCheckbox1").checked;
    numerals = document.getElementById("inlineCheckbox2").checked;
    lettersLower = document.getElementById("inlineCheckbox3").checked;
    lettersUpper = document.getElementById("inlineCheckbox4").checked;

    //Asking user to input length  between 8 and 128
    var passLength = prompt("choose a length of at least 8 characters and no more than 128 characters");

        //  aksing if password length is is more than or equal to 8 and is less than or equal 128
        if(passLength<8 || passLength>128)
        return;

    //if no check boxes were checked prompt
    if (specialLet === false && numerals === false && lettersLower === false && lettersUpper === false) {
      alert("You have to select one of the check boxes!");
      return;
    }

    if(specialLet){
      temp = temp.concat(specialChar);
      finalChar.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
      console.log("array: "+finalChar);
    }

    if(numerals){
      temp = temp.concat(numbers);
      finalChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if(lettersUpper){
      temp = temp.concat(upperC);
      var index = Math.floor(Math.random() * upperC.length);
      finalChar.push(upperC[index]);
    }

    if(lettersLower){
      temp = temp.concat(lowerC);
      var index = Math.floor(Math.random() * lowerC.length);
      finalChar.push(lowerC[index]);
    }

    for (var i = 0; i < parseInt(passLength); i++) {
     var index = Math.floor(Math.random() * temp.length);
     possibleChar.push(temp[index]);
    }

    for(var i=0;i<finalChar.length;i++){
      possibleChar[i] = finalChar[i];
    }

    return(possibleChar.join(""));


  }
   
 
// pre added code V
    // Assignment Code
    var generateBtn = document.querySelector("#generate");

  
// Write password to the #password input
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

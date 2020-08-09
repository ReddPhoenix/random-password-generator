// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// create funtion for generatePassword
function generatePassword() {

  // Start of imported code from Final-Test-Copy.html
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = 1234567890;
  var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"].join("");


  // prompt user to enter password length
  var passLengthTemp = prompt("Choose your password length between 8-128 characters.").trim();
  console.log("password length is: " + passLengthTemp);


  // convert password length to number
  var passwordLength = Number.parseInt(passLengthTemp);
  // console.log(passwordLength)
  console.log("password length is a: " + typeof passwordLength);
  console.log("-------");


  // verify passwordLength meets criteria 8-128 characters
  while (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    var passLengthTemp = prompt("Please select character length between 8-128 characters!");
    var passwordLength = Number.parseInt(passLengthTemp);
    console.log("Inside while loop, password Length has been assigned this value " + passwordLength);
    // console.log("Inside while loop, passwordLength is " + passwordLength.length);
    if (passwordLength >= 8 && passwordLength <= 128) {
      var passwordLength = Number.parseInt(passLengthTemp);
      console.log("At while loop + break, passwordLength has been assigned this value " + passwordLength);
      // console.log("At while loop + break, passwordLength is " + passwordLength.length);
      break;
    };
  };
  console.log("-------");

  // create empty string to combine user selected characters
  var combinedChar = "";
  console.log("combineChar type is: " + typeof (combinedChar));


  // prompt user if password requires lowercase letters
  var lowercaseRequired = confirm("Does your password require lowercase letters?");
  console.log("Does your password require lowercase letters? " + lowercaseRequired);
  if (lowercaseRequired === true) {
    combinedChar = combinedChar + lowercase;
  }
  // console.log(combinedChar);


  // prompt user if password requires uppercase letters
  var uppercaseRequired = confirm("Does your password require uppercase letters?");
  console.log("Does your password require uppercase letters? " + uppercaseRequired);
  if (uppercaseRequired === true) {
    combinedChar = combinedChar + uppercase;
  }
  // console.log(combinedChar);


  // prompt user if password requires numeric characters
  var numericRequired = confirm("Does your password require numbers?");
  console.log("Does your password require numbers? " + numericRequired);
  if (numericRequired === true) {
    combinedChar = combinedChar + numeric;
  }
  // console.log(combinedChar);


  // prompt user if password requires numeric characters
  var specialRequired = confirm("Does your password require special characters?");
  console.log("Does your password require special characters? " + specialRequired);
  if (specialRequired === true) {
    combinedChar = combinedChar + special;
  }
  // console.log(combinedChar);


  // verify at least one required character set has been selected
  while (lowercaseRequired === false && uppercaseRequired === false && numericRequired === false && specialRequired === false) {

    // alert to inform user at least one character set has to be selected
    alert("You must select at least one character set to continue!")

    // prompt user if password requires lowercase letters
    var lowercaseRequired = confirm("Does your password require lowercase letters?");
    console.log("Does your password require lowercase letters? " + lowercaseRequired);
    
    if (lowercaseRequired === true) {
      combinedChar = combinedChar + lowercase;
    }
    // console.log(combinedChar);

    // prompt user if password requires uppercase letters
    var uppercaseRequired = confirm("Does your password require uppercase letters?");
    console.log("Does your password require uppercase letters? " + uppercaseRequired);
    if (uppercaseRequired === true) {
      combinedChar = combinedChar + uppercase;
    }
    // console.log(combinedChar);

    // prompt user if password requires numeric characters
    var numericRequired = confirm("Does your password require numbers?");
    console.log("Does your password require numbers? " + numericRequired);
    if (numericRequired === true) {
      combinedChar = combinedChar + numeric;
    }
    // console.log(combinedChar);

    // prompt user if password requires numeric characters
    var specialRequired = confirm("Does your password require special characters?");
    console.log("Does your password require special characters? " + specialRequired);
    if (specialRequired === true) {
      combinedChar = combinedChar + special;


    }
    // console.log(combinedChar);
  }


  // assign value to finalPassword
  finalPassword = "";

  // code will randomly select index position based on passwordLength
  for (i = 0; i < passwordLength; i++) {
    var indexPosition = Math.floor(Math.random() * combinedChar.length);
    // console.log(combinedChar[indexPosition]);
    finalPassword = finalPassword + combinedChar[indexPosition];
  }

  console.log("-------");
  console.log("Your password is: " + finalPassword)
  console.log("Password character length is " + finalPassword.length);

  // assign password from finalPassword
  password = finalPassword;
  console.log(password);

  // have finalPassword return to password variable
  return password;
}
        // End of imported code from Final-Test-Copy.html























// Validate character amount selection when entered by user
// For loop needed to run between 8-128 characters
// Loop 1 --> select number at random to select array
// Once inside array, select number at random for .length to select character. Loop 1 ends.
// Loop 2 --> select number at random to select array
// Once inside array, select number at random for .length to select character. Loop 2 ends.
// Loop 3 --> select number at random to select array
// Once inside array, select number at random for .length to select character. Loop 3 ends.
// Loop 4 --> select number at random to select array
// Once inside array, select number at random for .length to select character. Loop 4 ends.
// Loop 5 --> select number at random to select array
// Once inside array, select number at random for .length to select character. Loop 5 ends.
// Loop 6 --> select number at random to select array
// Once inside array, select number at random for .length to select character. Loop 6 ends.
// Loop 7 --> select number at random to select array
// Once inside array, select number at random for .length to select character. Loop 7 ends.
// Loop 8 --> select number at random to select array
// Once inside array, select number at random for .length to select character. Loop 8 ends.
// Will check after each loop if input for character min/max has been met.
// Loop ends if max input has been met. 
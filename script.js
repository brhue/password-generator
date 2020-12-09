// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '01234567890';
  let special = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  let passwordLength = prompt("Enter a password length between 8-128.");
  passwordLength = parseInt(passwordLength, 10);

  let useLowercase = confirm("Include lowercase characters?");
  let useUppercase = confirm("Include uppercase characters?");
  let useNumeric   = confirm("Include numeric characters?");
  let useSpecial   = confirm("Include special characters?");

  // If the user chose nothing, just use lowercase.
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    useLowercase = true;
  }

  let charsToUse = '';
  if (useLowercase) {
    charsToUse += characters;
  }
  if (useUppercase) {
    charsToUse += characters.toUpperCase();
  }
  if (useNumeric) {
    charsToUse += numbers;
  }
  if (useSpecial) {
    charsToUse += special;
  }

  let generated = [];
  for (let i = 0; i < passwordLength; i++) {
    let char = charsToUse[Math.floor(Math.random() * charsToUse.length)];
    generated.push(char);
  }

  return generated.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

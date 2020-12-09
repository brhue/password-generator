// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let characters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '01234567890';
let special = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function generatePassword() {
  let passwordLength = prompt("Enter a password length between 8-128.");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter a password length between 8-128.");
  }
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

  let validPassword = false;
  let generated;
  while (!validPassword) {
    generated = [];
    for (let i = 0; i < passwordLength; i++) {
      let char = charsToUse[Math.floor(Math.random() * charsToUse.length)];
      generated.push(char);
    }
    validPassword = isValidPassword(generated, useLowercase, useUppercase, useNumeric, useSpecial);
  }

  return generated.join('');
}

function isValidPassword(password, useLower, useUpper, useNumeric, useSpecial) {
  if (useLower && !hasLower(password)) {
    return false;
  }
  if (useUpper && !hasUpper(password)) {
    return false;
  }
  if (useNumeric && !hasNumeric(password)) {
    return false;
  }
  if (useSpecial && !hasSpecial(password)) {
    return false;
  }
  return true;
}

function hasLower(password) {
  return password.some(letter => {
    return characters.includes(letter);
  });
}

function hasUpper(password) {
  return password.some(letter => {
    return characters.toUpperCase().includes(letter);
  });
}

function hasNumeric(password) {
  return password.some(num => {
    return numbers.includes(num);
  });
}

function hasSpecial(password) {
  return password.some(char => {
    return special.includes(char);
  });
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

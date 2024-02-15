// git pull origin main --allow-unrelated-histories

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("What is the length of your password? 8-128"))||0;

  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128. Try again.")
    return
  }
  
  let upper = confirm("Would you like uppercase characters?")
  let lower = confirm("Would you like lowercase characters?")
  let number = confirm("Would you like numbers?")
  let symbol = confirm("Would you like symbols?")

  return {upper, lower, number, symbol, length}
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions()
  if (!options) return
  let chars = []
  if (options.upper) chars.push(...upperCasedCharacters)
  if (options.lower) chars.push(...lowerCasedCharacters)
  if (options.number) chars.push(...numericCharacters)
  if (options.symbol) chars.push(...specialCharacters)

  if (chars.length === 0) {
    alert("You must choose at least one type of character.")
    return
  }

  let pw = ""
  for (let i = 0; i < options.length; i++) {
    pw += getRandom(chars)
  }

  return pw
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector('#password');

  passwordText.value = password || "";
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Assignment code here
// 

// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var passwordLength = 12;
// var password ="";
// for (var i = 0; i <= passwordLength; i++) {

// }

let numericChar=["0","1","2","3","4","5","6","7","8","9"];
let specialChar=["!","@","#","$","^","&","*","(",")"];
let lowerChar=[ 'a','b','c','d','e','f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','r','s','t','u','v','w','x','y','z'];
let upperChar=['A','B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// function getOptions(){

// }
// const getOptions=()=>{

// }
const getOptions=()=>{
  let length=parseInt(
    prompt(`How many characters would you like your password to have?`)
  );
  if(isNaN(length)===true){
    alert(`You must provide a quantity length`)
    return;
  }
  if(length<8){
    alert(`You must have at least 8 characters`)
    return;
  }
  let hasSpecialChar=confirm(`click okay to confirm inclusion of special characters`);
  let hasLowerChar=confirm(`click okay for inclusion of lower characters`);
  let hasNumericChar=confirm(`click okay for numbers`);
  let hasUpperChar=confirm(`click okay for upper case characters`);

  if(hasSpecialChar===false&&hasLowerChar===false&&hasNumericChar===false&&hasUpperChar===false){
    alert(`You must have some type of characters in your password`)
    return;
  }
  let passwordOptions={
    length:length,
    hasSpecialChar:hasSpecialChar,
    hasLowerChar:hasLowerChar,
    hasNumericChar:hasNumericChar,
    hasUpperChar:hasUpperChar
  }
  return passwordOptions;
}

const getRandom=(data)=>{
  let randomIndex=Math.floor(Math.random()*data.length)
  let randomElement=data[randomIndex];
  return randomElement;
}
const generatePassword=()=>{
  let options=getOptions();
  let results=[];
  let possibleChar=[];
  let guaranteeChar=[];
  if(options.hasSpecialChar){
    possibleChar=possibleChar.concat(specialChar);
    guaranteeChar.push(getRandom(specialChar));
  }
  if(options.hasNumericChar){
    possibleChar=possibleChar.concat(numericChar);
    guaranteeChar.push(getRandom(numericChar));
  }
  if(options.hasLowerChar){
    possibleChar=possibleChar.concat(lowerChar);
    guaranteeChar.push(getRandom(lowerChar));
  }
  if(options.hasUpperChar){
    possibleChar=possibleChar.concat(upperChar);
    guaranteeChar.push(getRandom(upperChar));
  }
  for(let i=0; i<options.length; i++){
    let possibleChars=getRandom(possibleChar);
    results.push(possibleChars)
  }
  for(let i=0; i<guaranteeChar.length; i++){
    results[i]=guaranteeChar[i]
  }
  return results.join(``)
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
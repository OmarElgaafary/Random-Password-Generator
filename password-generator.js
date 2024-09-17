<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML site</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>


    <h1>Random Password Generator</h1><hr>
    
    <div>

        <label for="setLength" id="passLen">Password Length: </label>
        <input type="number" id="setLength"><br>
        

        <input type="checkbox" id="isUpperCase">
        <label for="isUpperCase">Contains uppercase characters?</label><br>

        <input type="checkbox" id="isLowerCase">
        <label for="isUpperCase">Contains lowercase characters?</label><br>

        <input type="checkbox" id="includesNumbers">
        <label for="includesNumbers">Includes numbers?</label><br>

        <input type="checkbox" id="includesSymbols">
        <label for="includesSymbols">Includes symbols?</label><br>

        <button type="submit" onclick="randomPassword()">Generate</button><br>

        
        <label for="generatedPassword" id="genPasswordLabel">Generated Password: </label>
        <p id="generatedPassword"></p>

        

    </div>


    <script src="index.js"></script>
</body>
</html>

//===================================================================


const setLength = document.getElementById("setLength");
const htmlUpperCase = document.getElementById("isUpperCase");
const htmlLowerCase = document.getElementById("isLowerCase");
const htmlNumbers = document.getElementById("includesNumbers");
const htmlSymbols = document.getElementById("includesSymbols");
const finalPassword = document.getElementById("generatedPassword");

let length;


function randomPassword () {

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = `!"£$%^&*_-?`; 
    
    let allowedChars = ``;
    let generatedPassword = ``;

    length = Number(setLength.value);

    allowedChars += htmlUpperCase.checked ? upperCase : "";
    allowedChars += htmlLowerCase.checked ? lowerCase : "";
    allowedChars += htmlNumbers.checked ? numbers : "";
    allowedChars += htmlSymbols.checked ? symbols : "";
   

    if (length <= 0) {
        return `Error: Length must be atleast one character long`;
    } else if (allowedChars.length === 0) {
        return `Error: You must select atleast one option`;
    }


    for (let i = 0; i < length; i++) {
        let randomChar = Math.trunc(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomChar]; 
    }

    finalPassword.textContent = `${generatedPassword}`;

}



const password = randomPassword();
console.log(password);

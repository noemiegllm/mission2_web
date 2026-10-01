const generateBtn = document.getElementById("generateBtn");
let passwordGenerate = document.getElementById("clave");
let lengthInput = document.getElementById("lengthInput");
let digitInput = document.getElementById("digitInput");
let symbolInput = document.getElementById("symbolInput");

function forjarClave(lengthPassword, digitBoolean, symbolBoolean){
    let alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newpassword = "";
    if(digitBoolean){
        alfabeto += "0123456789";
    }
    if(symbolBoolean){
        alfabeto += "!@#$%&*?";
    }

    for (let i = 0; i < lengthPassword; i++){
        let oneCharacter = alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
        newpassword += oneCharacter;
    }
    return newpassword;
}



generateBtn.addEventListener("click", () => {
    console.log(digitInput.value);
    passwordGenerate.textContent = forjarClave(lengthInput.value, digitInput.checked, symbolInput.checked);

})
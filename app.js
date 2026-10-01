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
    passwordGenerate.classList.remove("error");
    let length = Number(lengthInput.value);
    if(length < 4 || length > 32){
        passwordGenerate.textContent = "Choose a valid length (4-32) !"
        passwordGenerate.classList.add("error");
    }else{
        passwordGenerate.textContent = forjarClave(length, digitInput.checked, symbolInput.checked);
    }
})
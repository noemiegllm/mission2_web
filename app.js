const generateBtn = document.getElementById("generateBtn");
let passwordGenerate = document.getElementById("passwordGenerate");
let lengthInput = document.getElementById("lengthInput");

const alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function forjarClave(lengthPassword = 5){
    let newpassword = "";
    for (let i = 0; i < lengthPassword; i++){
        let oneCharacter = alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
        newpassword += oneCharacter;
    }
    passwordGenerate.textContent = newpassword;
}



generateBtn.addEventListener("click", () =>{
    forjarClave(lengthInput.value);
})
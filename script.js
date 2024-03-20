const textArea =document.querySelector(".campoTexto");
const mensaje =document.querySelector(".mensaje");
const btnCopy = document.getElementById("btnCopiar");
const btnReparar = document.querySelector("#reparar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.stayle.backgroundimage = "none";

}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.tolowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceall(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
   

}
function reparar(){
    let textoAreparar = removeAccents(ingresarTexto.value);
    textoAreparar = textoAreparar.toLowerCase();
    ingresarTexto.value = textoAreparar;
    estadoNormal();
    ingresarTexto.focus();
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.tolowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceall(matrizCodigo[i][1],matrizCodigo[i][0])
        }

    }
    return stringDesencriptado
}
function copiar(){
    if(msg.value != ""){
        ingresarTexto.value= msg.value;
        navigator.clipboard.writeText(msg.value);
        estadoNormal();
        ingresarTexto.select();
    }
    ingresarTexto.focus();
}
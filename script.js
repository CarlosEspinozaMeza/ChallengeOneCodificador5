/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
 


var btnEncriptar=document.getElementById("btn-encriptar").addEventListener("click", encriptar);
var btnDesencriptar=document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
var btnCopy=document.getElementById("btn-copy").addEventListener("click",copy);
var delTextArea=document.getElementById("txt-encriptar").addEventListener("click",borrarTexto);

function borrarTexto(){
    if(document.getElementById("txt-encriptar").value=="Ingrese el texto aqui"){
        document.getElementById("txt-encriptar").value= " ";
    }
   
}

function encriptar(){
    document.getElementById("txt-encriptado").style.backgroundImage= "none";
    document.getElementById("frame5").style.display= "none";
    var palabra = document.getElementById("txt-encriptar").value.toLowerCase() ;   
    var palabraEncriptada = palabra.replace (/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
    document.getElementById("txt-encriptado").value=palabraEncriptada;
    document.getElementById("txt-encriptado").style.fontSize="28px";
    document.getElementById("btn-copy").style.display= "block";
    document.getElementById("div-textarea").style.height="65%";
    document.getElementById("txt-encriptar").style.fontSize="28px"; 
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras  */

function desencriptar(){
    document.getElementById("txt-encriptado").style.backgroundImage= "none";
    document.getElementById("frame5").style.display= "none";
    var palabraEncriptada = document.getElementById("txt-encriptar").value.toLowerCase();
    var palabraDesencriptada = palabraEncriptada.replace (/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    document.getElementById("txt-encriptado").value= palabraDesencriptada;
    document.getElementById("txt-encriptado").style.fontSize="28px";
    document.getElementById("btn-copy").style.display= "block";
    document.getElementById("div-textarea").style.height="65%";
    document.getElementById("txt-encriptar").style.fontSize="28px";
}

//FUNCION COPIAR

function copy(){

    var resultado = document.getElementById("txt-encriptado").select();
    document.execCommand('copy');
    alert("copiado");
}

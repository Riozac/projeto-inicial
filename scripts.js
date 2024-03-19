var botao = document.getElementById("botao");
botao.addEventListener("click",alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");
 
var email = document.getElementById("Telefone");

var email = document.getElementById("CEP");

var email = document.getElementById("Logradouro");

var email = document.getElementById("Numero");

var email = document.getElementById("Complemento");

var email = document.getElementById("Bairro");

var email = document.getElementById("Cidade");

var email = document.getElementById("Estado");


function alertar (event){
   // alert("Voce Clicou no botão!!! " + nome.value);
    
    saida.innerText = "nome: " + nome.value +
    "\n Email: " + email.value +
    "\n Telefone " + Telefone.value+
    "\n CEP: " + CEP.value+
    "\n Logradouro: " + Logradouro.value+
    "\n Numero: " + Numero.value+
    "\n Complemento: " + Complemento.value+
    "\n Bairro: " + Bairro.value+
    "\n Cidade: " + Cidade.value+
    "\n Estado: " + Cidade.value;
}
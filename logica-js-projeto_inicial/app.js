////////////////////////////////////DESAFIO /////////////////////////////////////////

// Alerta de boas vindas
//alert("Boas vindas ao nosso site");

// Declaração de variáveis
//let nome = "Lua"; 
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDisponivel = 1000;

//alerta de erro
//alert('Erro! preencha TODOS os campos obrigatórios');

// Variavel para declarar msg de erro
//let  mensagemDeErro = "Erro! preencha TODOS os campos obrigatórios";
//alert(mensagemDeErro);

// Perguntar nome e idade
//nome = prompt ("Digite seu nome");
//idade = prompt ("Digite sua idade");

// Verificar se a pessoa é maior de idade
//if (idade >= 18) {
//    alert("Você pode tirar habilitação");  
//} else {
//    alert("Você não pode tirar habilitação");
//}

//////////////////////////////////CONCLUIDO/////////////////////////////////////////



alert('Bem vindo ao jogo: numero secreto do Schneider. Vamos ver se você consegue adivinhar qual é o número secreto que estou pensando.');
    
let numeroSecreto = 29;
let numeroChute = prompt('Digite numero para seu chute');

if (numeroSecreto == numeroChute) {
    console.log('Parabéns, você acertou o número secreto!');
};

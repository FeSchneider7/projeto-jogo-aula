////////////////////////////////////>> DESAFIO AULA <</////////////////////////////////////////

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

//////////////////////////////////>> CONCLUIDO <</////////////////////////////////////////



alert('Bem vindo ao jogo: numero secreto do Schneider. Vamos ver se você consegue adivinhar qual é o número secreto que estou pensando.');
    
let numeroSecreto = 7;
console.log(numeroSecreto);
let numeroChute;
let tentativas = 1;

//while = enquanto

while (numeroChute != numeroSecreto) {
    numeroChute = prompt('Digite um numero para seu chute');
   
    if (numeroSecreto == numeroChute) {
        alert(`Parabéns, você acertou o número secreto! ${numeroSecreto} com ${tentativas} tentativas`);
    } else { 
         if (numeroSecreto > numeroChute) {
            alert(`ERROU! DICA: O numero secreto é maior do que ${numeroChute}`);
         } else {
          alert(`ERRADO! DICA: O numero secreto é menor do que ${numeroChute}`);
         }
      //(Mesma coisa que abaixo) tentativas = tentativas + 1;
        tentativas++;
    }
}

////////////////////////////////////////////////EXERCICIO/////////////////////////////////


//let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
//let soma = 0;
//let contador = qtdNumeros;

//while (contador > 0) {
 //   let numero = parseInt(prompt('Digite o número:'));
  //  soma += numero;
   // contador--; // Decrementando o contador para evitar loop infinito
//}

//let media = soma / qtdNumeros;
//console.log(media);
//alert(`A média dos números é: ${media}`);

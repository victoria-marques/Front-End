// Exercício 1: Personalizador de Acesso (Strings e Interação)
// Enunciado: Crie um script que pergunte o nome do usuário e o seu sobrenome em dois prompt diferentes.
// O sistema deve juntar os nomes (concatenar).
// Deve remover espaços extras das pontas (usando .trim()).
// Deve exibir um alerta com o nome completo em letras minúsculas e outro alerta informando quantos caracteres o nome possui (usando .length).

class Usuário{
    constructor(idade, nome){
        this.idade = idade
        this.nome = nome
    }
    exibirTudo(informacoes){
        return "usuário" + informacoes
    }
}

alert("Bem Vindo a uma entrevista de emprego!")

const usuario = prompt("Qual e a sua idade?:")

let idadeUsuario = usuario.trim()

let nome = prompt("Qual e seu nome?:")

let nomeUsuario = nome.trim().toUpperCase()

let sobrenome = prompt("Qual seu sobrenome?:")

let sobrenomeUsuario = sobrenome.trim().toUpperCase()

const concatenacao = nome.concat (`Sobrenome ${nome}`)
const nomeSobrenome= nome.length (`Nome completo ${nome}`)

// ----------------------------------//---------------------------------------

// Exercício 2: Calculadora de Divisão de Conta (Aritméticos)
// Enunciado: amigos foram jantar. Crie um script que:
// Peça o valor total da conta.
// Peça a quantidade de pessoas na mesa.
// Calcule quanto cada um deve pagar.
// Exiba o resultado em um alert com a frase: "Cada amigo deve pagar R$ [VALOR]", formatando o número para 2 casas decimais.

class Conta{
    constructor(quantidade, valor){
        this.quantidade = quantidade
        this.valor = valor
    }
    valorTotal(total){
        return "R$" + total.toFixed(2)
    }
    quantidadePessoas(quantidade){
        return "quantas" + quantidade
    }
}

const 

alert("Sejam bem vindos a lanchonete!")

const clientes = prompt("Para pedir os pratos, digite a quantidade de pessoas:")

let clientesFormatado = clientes.trim()

const Pratos = confirm(`Prezados clientes ${clientes}, tem pratos?`)

if(Pratos){
    let quantidade = prompt("Agora a noite teremos o Macarrão ao molho de batata?")
    let total = macarrao.preco * quantidade
    alert("Pedir a conta:" +  total / clientes)
}





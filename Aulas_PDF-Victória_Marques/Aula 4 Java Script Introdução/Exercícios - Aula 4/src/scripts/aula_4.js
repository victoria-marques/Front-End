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

const alert = ("Sejam bem vindos a lanchonete!")

const clientes = prompt("Para pedir os pratos, digite a quantidade de pessoas:")

let clientesFormatado = clientes.trim()

const Pratos = confirm(`Prezados clientes ${clientes}, tem pratos?`)

if(Pratos){
    let quantidade = prompt("Agora a noite teremos o Macarrão ao molho de batata?")
    let total = macarrao.preco * quantidade
    alert("Pedir a conta:" +  total / clientes)
} else{
    ("Não temos o prato de Macarrão ao molho de batata vão querer outro prato?:", {Confirmar, Cancelar})
}

// Exercício 3: Validador de Promoção (Lógicos e Relacionais)
// Enunciado: Uma loja dá frete grátis se o valor da compra for maior que R$ 150,00 OU se o cliente tiver um cupom de desconto.
// Peça o valor da compra.
// Pergunte se ele tem cupom (o usuário deve digitar if" ou "nao").
// Use uma estrutura condicional (if) com o operador lógico || para verificar se ele ganhou o frete.
// Exiba "Frete Grátis Liberado" ou "Frete Pago" no console.

let valor_compra = prompt("Valor da Compra:")
let cupom_loja = prompt("Voce tem cupom? digite (sim/nao)")

if (valor_compra > 400 || cupom_loja == "sim"){
    console.log("Frete Grátis da loja liberado")
} else {
    console.log("Frete Pago")
}

// Exercício 4: Sorteador de Brindes (Math)
// Enunciado: Crie um script que simule um sorteio de loteria simples.
// O usuário deve escolher um número de 1 a 10.
// O sistema deve gerar um número aleatório inteiro entre 1 e 10.
// Se o número do usuário for igual ao do sistema, exiba "Parabéns, você ganhou um brinde!". Caso contrário, exiba "Que pena, o número sorteado foi [NÚMERO]".

let usuario_cliente = prompt("Escolha os numeros 1 a 10:")
let usuario_sortudo = Math.floor(Math.random() * 10) + 1

if(usuario_cliente == usuario_sortudo){
    alert("Parabéns, voce ganhou o seu brinde!")
} else {
    alert("Que pena, o número sorteado foi de" + usuario_sortudo)
}

// Exercício 5: Gestão de Frota (Orientação a Objetos)
// Enunciado: Crie uma classe chamada Veiculo.
// Ela deve ter os atributos: modelo, marca e ano.
// Ela deve ter um método chamado idadeVeiculo que recebe o ano atual e calcula quantos anos o carro tem.
// Instancie um objeto (ex: um Corolla 2020), peça o ano atual ao usuário e exiba no alert o modelo do carro e a idade dele calculada pelo método.

class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    idadeVeiculo(anoAtual){
        return anoAtual - this.ano
    }
}

const Carro = new Veiculo("Chevrolet", "Corvette", 1953)

let anoHoje = prompt("Ano em que nos estamos?")
alert("O" + Carro.modelo + "tem" + Carro.idadeVeiculo(anoHoje) = "anos.")



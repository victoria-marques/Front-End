class Prato{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    exibirComoMoedas(total){
        return "R$" + total.toFixed(2)
    }

}

const lasanha = new Prato("Lasanha ao molho Branco", 70.00)


alert("Seja bem vindo ao restaurante Sabor e Saber!")

console.log("Teste")

const cliente = prompt("Bem vindo cliente para um atendimento mais personalizado, digite seu nome:")

let nomeFormatado = cliente.trim().toUpperCase()

alert("Bem vinda: " + nomeFormatado)
// alert(`Bem vindo ${nomeFormatado}`)

const horaAgora = new Date()

const hora = horaAgora.getHours()

if(hora < 11){
    alert(`Bom dia, ${nomeFormatado}, aproveite as delícias do café da manhã!`)
    console.log("Antes das 11")
} else{
    alert(`Boa tarde, ${nomeFormatado}, aproveite as iguarias do almoço!`)
    console.log("Depois das 11")
}

const querPrato = confirm(`Fala meu querido ${nomeFormatado}, quer um prato?`)

if(querPrato){
    let quantidade = prompt("Hoje temos Lasanha ao molho BRanco, quantas você irá querer?")
    let total = lasanha.preco * quantidade
    // alert(total)
    alert(`Bacana o seu total de ${lasanha.nome} é de: ${lasanha.exibirComoMoedas(total)}`)
} else{
    alert("Ok, obrigada pela visita ao restaurante, volte sempre!")
}
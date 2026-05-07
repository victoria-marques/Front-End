document.addEventListener("DOMContentLoaded", function(){
    inicializarHoverCards()
    inicializarVitrine()
})

function inicializarHoverCards(){
    // 2. INTERATIVIDADE NOS CARDS (Feedback visual)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
     });
  });
}

function inicializarVitrine(){
    // 3. DELEGAÇÃO DE EVENTOS

const main = document.querySelector("main")

// Se não existir o main encerra
if(!main) return

main.addEventListener("click", (event) => {
    const clicado = event.target

    //3.1. Quantidade de Itens + ou - 

    if(clicado.classList.contains("btn-menos")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent)
        spanQtd.textContent = Math.max(1, valorAtual - 1) // O valor vai até 1, pois está limitando o número subtraindo o - 1 do valorAtual
        atualizarPrecoCard(box)
        return
    }

    if(clicado.classList.contains("btn-mais")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        spanQtd.textContent = Number(spanQtd.textContent) + 1
        atualizarPrecoCard(box)
        return 

    }

    //3.2. Ação do BTN-PEDIDO

    if(clicado.classList.contains("btn-pedido")){
        event.preventDefault()

        const card = clicado.parentElement
        const nomePrato = card.querySelector("h3").textContent
        const quantidade = Number(card.querySelector(".qtd-valor").textContent)
        const preco = parseFloat(card.querySelector(".preco").getAttribute("data-preco"))

        // Efeito Visual quando clicado "Pedir agora"

        clicado.textContent = "✔️ Adicionado"
        clicado.style.backgroundColor = "#27ae60"
        clicado.disable = true // Ação clicada ele desativa a possibilidade do click que é o botão ativo por um tempo

        setTimeout(() => { // Irá definir um tempo e depois fazer a ação
            clicado.textContent = "Pedir Agora"
            clicado.style.backgroundColor = ""
            clicado.disable = false
        }, 1500)

    const badgeExistente = card.querySelector(".badge-adicionado")

    if(badgeExistente) badgeExistente.remove()
        card.insertAdjacentHTML(
            "beforeend", "<span class='badge-adicionado'> ✔️ no resumo </span>"
        )
    
    setTimeout(function(){
        const badge = card.querySelector(".badge-adicionado")
        if (badge) badge.remove()
    }, 2000)

    // Resetar a quantidade de itens (Novo)
    const box = card.querySelector(".quantidade-box")
    if (box){
        box.querySelector(".qtd-valor").textContent = "1"
        atualizarPrecoCard(box)
    }

    //Acionar ação de salvarPedido()
    salvarPedido( {nome: nomePrato, preco: preco, qtd: quantidade } )

    atualizarContadorPedidos()
    }
}) // Acabou o main ouvinte de click
}

function atualizarPrecoCard(box){
    //4. As funções de ATUALIZAR PREÇO e INSERIR PRODUTO NO RESUMO
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco")) // Pega caso for Real nesse caso é o Number
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)

    
    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",") // toFixed deixa duas casas depois da vírgula em cálculos // replace substitui a informação por outra exemplo: o que ponto vira vírgula
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"
}

function salvarPedido(pedido){
    // Leu 
    const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]" )

    // Modificou
    pedido.subtotal = pedido.preco * pedido.qtd
    lista.push(pedido)

    // Salvou
    localStorage.setItem("techfood_pedidos", JSON.stringify(lista))
}

function atualizarContadorPedidos(){
    //Continua....
}




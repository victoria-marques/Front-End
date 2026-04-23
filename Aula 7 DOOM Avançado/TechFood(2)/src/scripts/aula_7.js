/* ==========================================================
   AULA 07: DOM AVANÇADO - TECHFOOD
   ========================================================== */

// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

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

// 3. DELEGAÇÃO DE EVENTOS

const main = document.querySelector("main")

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
        const quantidade = card.querySelector(".qtd-valor").textContent
        const precoExibido = card.querySelector(".preco").textContent

        // Efeito Visual quando clicado "Pedir agora"

        clicado.textContent = "✔️ Adicionado"
        clicado.style.backgroundColor = "#27ae60"
        clicado.disable = true // Ação clicada ele desativa a possibilidade do click que é o botão ativo por um tempo

        setTimeout(() => { // Irá definir um tempo e depois fazer a ação
            clicado.textContent = "Pedir Agora"
            clicado.style.backgroundColor = ""
            clicado.disable = false
        }, 1500)

    if(!card.querySelector(".badge-adicionado")){
        card.insertAdjacentHTML(
            "beforeend", "<span class='badge-adicionado'> ✔️ no resumo </span>"
        )
    }

    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)
    }
}) // Acabou o main ouvinte de click

//4. As funções de ATUALIZAR PREÇO e INSERIR PRODUTO NO RESUMO

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco")) // Pega caso for Real nesse caso é o Number
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",") // toFixed deixa duas casas depois da vírgula em cálculos // replace substitui a informação por outra exemplo: o que ponto vira vírgula
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"
}

function adicionarItemAoResumo(nome, qtd, preco, cardOrigem){
    const sessaoResumo = document.querySelector("#secao-resumo")
    const listaResumo = document.querySelector("#lista-resumo")

    if(!sessaoResumo || !listaResumo) return

    //Exibindo a sessão resumo
    sessaoResumo.style.display = "block"

    // Criando um item na lista
    const itemLista = document.createElement("li")
    itemLista.classList.add("item-resumo")

    // Informações - TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.textContent = qtd + "x" + nome + " - " + preco // Mostrar todos os valores pegados na parte de cima

    // Criando botão para remover prato
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "❌"
    btnRemover.classList.add("btn-remover")

    // CONTINUAÇÃO....

    btnRemover.addEventListener("click", () =>{
        itemLista.remove()

        const badge = cardOrigem.querySelector(".badge-adicionada") //criada no JavaScript "badge"

        if(badge) badge.remove()

        if(listaResumo.children.length === 0){
            sessaoResumo.style.display = "none" // visualmente removido
        }
    }) // Fechou o evento de click do Listener

    // Parte visual realmente inserida na página
    itemLista.appendChild(textoSpan)
    itemLista.appendChild(btnRemover)
    listaResumo.appendChild(itemLista)

} // Fim da função AdicionarItemAoResumo

const btnLimpar = document.querySelector("#btn-limpar")

if(btnLimpar){
    btnLimpar.addEventListener("click", () =>{
        const listaResumo = document.querySelector("#lista-resumo")
        const sessaoResumo = document.querySelector("#secao-resumo")

        // Remover os badge que criamos no JS (não tem no HTML)
        document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove()) // navegar dentro da class "forEach"

        // Remover os filhos desta lista
        while(listaResumo.firstElementChild){
            listaResumo.firstElementChild.remove() // Se remover a primeira linha a linha  dois será a primeira novamente
        }

        sessaoResumo.style.display = "none" // Sumir a aba visualmente mas deixando os dados salvos no histórico

    })
}
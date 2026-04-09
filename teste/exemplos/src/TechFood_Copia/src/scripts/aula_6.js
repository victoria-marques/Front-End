// 1. Cálculo de Preço
const inputQtd = document.querySelector("#qtd-lasanha")
const precoTexto = document.querySelector("#preco-lasanha")

if(inputQtd && precoTexto){
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 70.0
        const total = Number(inputQtd.value) * precoUnitario
        precoTexto.textContent = `R$ ${total.toFixed(2)}`

        precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22" 
    })
}

// 2.1. Eventos de clique para CLASS - EVENT .TARGET

//Página toda - independente de quem seja
document.addEventListener('click', (event) => {
    const clicado = event.target
    //fazer a ação/mudança/aplicação que você quiser, mediante ao que foi citado
})

// 2.2. Buscando como referencia o Pai #sessao-massas(ID)

const massas = document.querySelector("#sessao-massas")

massas.addEventListener('click', (event) => {
    const clicado = event.target

    if(clicado.classList.contains('bt_pedido')){
        console.log("Você clicou em um botão de MASSAS!")
    }
})

// 2.3. Buscar evento direto da class

const botoesPedido = document.querySelectorAll(".bt_pedido")

botoesPedido.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        botao.textContent = "✓ Pedido enviado"
        botao.style.backgroundColor = "red"
        botao.style.cursir = "default"
        botao.ariaDisabled = true
    })
})
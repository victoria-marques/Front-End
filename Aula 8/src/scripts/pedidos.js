document.addEventListener("DOMContentLoaded", function() {
    renderizarPedidos()
    //continuar...
})

//4. As funções de ATUALIZAR PREÇO e INSERIR PRODUTO NO RESUMO

function renderizarPedidos(){
    const lista = document.querySelector("#lista-pedidos")
    const spanTotal = document.querySelector("#valor-total")
    const spanResumo = document.querySelector("#valor-resumo")
    const spanContador = document.querySelector("#contador-itens")

    if(!lista) return

    const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

    if(pedidos.length === 0){
        lista.innerHTML = "<li class='pedido-vazio'> Nenhum pedido ainda. Acesse o "+" <a href='index.html'> Cardápio </a> Para Adicionar! 😋 </li>"

        if(spanTotal) spanTotal.textContent = "R$ 0,00"
        if(spanResumo) spanResumo.textContent = "R$ 0,00"
        if(spanContador) spanContador.textContent = "R$ 0 itens"

    }

    lista.innerHTML = ""
    let total = 0

   pedidos.forEach(function(pedido, indice){
    const lista = document.createElement("lista")
    lista.classList.add("item-pedido")
  

    // Informações - TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.innerHTML = " <strong> " + pedido.nome + " </strong> " + " - " + pedido.qtd + " x " + " R$ " + pedido.preco.toFixed(2).replace(".", ",") + " = <span class= 'subtotal-item'> R$ " + pedido.subtotal.toFixed(2).replace(".", ",")

    

    // Criando botão para remover prato
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "❌"
    btnRemover.classList.add("btn-remover")





    // CONTINUAÇÃO....

    btnRemover.addEventListener("click", () =>{
        const lista = JSON.parse(localStorage.getItem("techfood_pedidos")|| "[]")

        lista.splice(indice, 1)
        
        localStorage.setItem("techfood_pedidos")
        renderizarPedidos()
       
    }) // Fechou o evento de click do Listener / btn remover

    // Parte visual realmente inserida na página
    lista.appendChild(textoSpan)
    lista.appendChild(btnRemover)
    lista.appendChild(lista)
    total += pedido.subtotal

    //Mais um trecho

    const totalFmt = " R$ " + total.toExponential.toFixed(2).replace(".", ",")


 }) // Fim pedidos.forEach

}

function configurarLimparPedidos(){
    const btn = document.querySelector("#btn-limpar-pedidos")

    if(btn) return

    btn.addEventListener("click", function(){
        localStorage.removeItem("techfood_pedidos")
        renderizarPedidos()
    })
}
const tituloNhoque = document.querySelector('#card-nhoque h3')

const botoesCompra = document.querySelectorAll('.bt_pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')

console.log("1. Mostrando o título Nhoque (Pelo ID)", tituloNhoque)

console.log("2. Quantidade de botões de pedido", botoesCompra.length)

console.log("3. A terceiro.card de uma class", terceiroCard) 

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#Boas-vindas')
const seuNome = document.querySelector('#nome')

saudacao.textContent = hora < 18 ? "Bem Vindo, Boa Tarde!" : "Bem Vindo, Boa Noite!"

seuNome.innerHTML = "Meu <strong>nome</strong> é <em>Celso</em>"
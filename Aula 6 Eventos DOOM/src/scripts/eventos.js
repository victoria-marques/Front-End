const inputQtd = document.querySelector("#btn-curtir")
const contador = document.querySelector("#contador")
let contatorQtd = 0
if(inputQtd && contador){
    inputQtd.addEventListener("click", () => {
        
        // contatorQtd ++
        contatorQtd = contatorQtd + 1
        contador.textContent = `${contatorQtd}`
    })
}

const campo = document.querySelector("#campo-texto")
const preview = document.querySelector("#preview-texto")

campo.addEventListener('input', () => {
    preview.textContent = `Digitando: ${campo.value}`
})

const caixaCor = document.querySelector("#caixa-cor")
caixaCor.addEventListener("mouseover", () => {
    caixaCor.style.backgroundColor = "#0000FF"
})

// ele pega os elementos html com base no id que eu dei pra eles

let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')


// quando clicar em somar ele soma
function somar() {
    // ele pega os campos de entradas (n1 e n2) e converte em numeros
    // faz a operacao e atribui o resultado para os campos de entrada 

    //res.value = Number(n1.value) + Number(n2.value)

    res.innerHTML += `<p> Resultado: ${n1.value} + ${n2.value} = ${Number(n1.value) + Number(n2.value)}</p>`
} 

function subtrair() {
    // ele pega os campos de entradas (n1 e n2) e converte em numeros
    // faz a operacao e atribui o resultado para os campos de entrada 

    //res.value = Number(n1.value) + Number(n2.value)

    res.innerHTML += `<p> Resultado: ${n1.value} - ${n2.value} = ${Number(n1.value) - Number(n2.value)}</p>`
}

function multiplicar() {
    // ele pega os campos de entradas (n1 e n2) e converte em numeros
    // faz a operacao e atribui o resultado para os campos de entrada 

    //res.value = Number(n1.value) + Number(n2.value)

    res.innerHTML += `<p> Resultado: ${n1.value} * ${n2.value} = ${Number(n1.value) * Number(n2.value)}</p>`
}

function dividir() {
    // ele pega os campos de entradas (n1 e n2) e converte em numeros
    // faz a operacao e atribui o resultado para os campos de entrada 

    //res.value = Number(n1.value) + Number(n2.value)
    if (n1.value == 0) {
        res.innerHTML += `<p> Valor inválido.`
    }

    else if (n2.value == 0) {
        res.innerHTML += `<p> Valor inválido.`
    }
    else {
        res.innerHTML += `<p> Resultado: ${n1.value} / ${n2.value} = ${Number(n1.value) / Number(n2.value)}</p>`
    }
}

function limpar() {
    res.innerText = ""
}

function raizquadrada() {
    // ele pega os campos de entradas (n1 e n2) e converte em numeros
    // faz a operacao e atribui o resultado para os campos de entrada 

    if (n1.value == 0 ) {
        res.innerHTML = `<p> Valor inválido.`
    }
    else if (n1.value < 0) {
        res.innerHTML = `<p> Valor inválido.`
    }
    else {
        res.innerHTML += `<p> Resultado: ${Math.sqrt(Number(n1.value))}`
    }
}

function potencia() {
    // ele pega os campos de entradas (n1 e n2) e converte em numeros
    // faz a operacao e atribui o resultado para os campos de entrada 

    
    res.innerHTML += `<p> Resultado: ${Math.pow(Number(n1.value), Number(n2.value))}`
}

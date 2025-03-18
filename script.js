
const res = document.getElementById('res')

const agora = new Date()

const ano = agora.getFullYear()
const mes = agora.getMonth() + 1
const dia = agora.getDate()


const datahoje = (`${dia}/${mes}/${ano}`)

const relogio = setInterval(function time() {

    let diadehoje = new Date ()
    let hr = diadehoje.getHours()
    let min = diadehoje.getMinutes()
    let seg = diadehoje.getSeconds()
    
    res.innerHTML = `<p> Hoje é  ${datahoje} e a hora atual é ${hr}:${min}:${seg} </p>`
})
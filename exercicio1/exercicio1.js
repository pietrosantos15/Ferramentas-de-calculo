




// quando clicar em somar ele soma
function calcular() {

    const salario = Number(document.getElementById('salario').value)
    const horasUteis = Number(document.getElementById('uteis').value)
    const horasFds = Number(document.getElementById('fds').value)
    const res = document.getElementById('res')

    const valorhora = salario / 200
    const extrautil = valorhora * horasUteis
    const horasextras = valorhora * (horasFds * 1.5)

    const salariofinal = extrautil + horasextras

    console.log(`${salariofinal}`)

    res.innerHTML = `<p> Ganhos de hora extra normais: R$ ${extrautil.toFixed(2)}</p>`;
    res.innerHTML += `<p> Ganhos de hora extra aos FDS: R$ ${horasextras.toFixed(2)}</p>`;
    res.innerHTML += `<p> Valor final: R$ ${salariofinal.toFixed(2)}</p>`

}

function limpar() {
    res.innerText = ""
}


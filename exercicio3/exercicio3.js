




function calcular() {
    
    const pessoas = Number(document.getElementById('salario').value)
    const dias = Number(document.getElementById('dias').value)
    const res = document.getElementById('res')
    let valorpessoa
    
    if (pessoas <= 49) {
        valorpessoa = 4.50
    }

    else if (pessoas <= 99) {
        valorpessoa = 4.10
    }

    else if (pessoas <= 149) {
        valorpessoa = 3.80
    }

    else {
        valorpessoa = 3.60
    }

     const valorfinal = valorpessoa * dias * pessoas

    res.innerHTML = `<p> Valor mensal: R$ ${valorfinal.toFixed(2)}</p>`

}

function limpar() {
    res.innerText = ""
}





  


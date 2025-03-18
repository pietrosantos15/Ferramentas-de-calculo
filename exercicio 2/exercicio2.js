


let aumento = 0


function calcular() {
    
    const salario = Number(document.getElementById('salario').value)
    const res = document.getElementById('res')
    
    if (salario <= 1200) {
        aumento = salario * 1.16

    }

    else if (salario <= 2100) {
        aumento = salario * 1.13
    }

    else if (salario <= 3000) {
        aumento = salario * 1.10
    }

    else {
        aumento = salario * 1.05
    }


    res.innerHTML = `<p> Novo salário: R$ ${aumento.toFixed(2)}</p>`

}

function limpar() {
    res.innerText = ""
}



  


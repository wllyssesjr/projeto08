let botao = document.getElementById('btn')
botao.addEventListener('click', () => {
    let nomeAtleta = document.getElementById('nome')
    let nome = String(nomeAtleta.value)
    let saltoUm = document.getElementById('salto1')
    let primeiroSalto = Number(saltoUm.value)
    let saltoDois = document.getElementById('salto2')
    let segundoSalto = Number(saltoDois.value)
    let saltoTres = document.getElementById('salto3')
    let terceiroSalto = Number(saltoTres.value)
    let saltoQuatro = document.getElementById('salto4')
    let quartoSalto = Number(saltoQuatro.value)
    let saltoCinco = document.getElementById('salto5')
    let quintoSalto = Number(saltoCinco.value)
    let resultado = document.getElementById('res')
    let mediaSaltos = (primeiroSalto + segundoSalto + terceiroSalto + quartoSalto + quintoSalto) / 5

    let saltos = [primeiroSalto, segundoSalto, terceiroSalto, quartoSalto, quintoSalto]

    resultado.innerHTML = `<p><strong>Atleta:</strong> ${nome} <br><strong>Saltos:</strong> ${saltos} <br><strong>Média dos saltos:</strong> ${mediaSaltos.toFixed(1)}m</p>`

})
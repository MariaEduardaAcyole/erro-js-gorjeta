let conta = document.querySelector('.conta');
let dez = document.querySelector('.dez');
let vinte = document.querySelector('.vinte');
let quinze = document.querySelector('.quinze');
let btnCalcular = document.querySelector('.calcular');
let gorjeta = document.querySelector('.gorjeta');
let total = document.querySelector('.total');


    function calcular() {
        let valorConta = parseFloat(conta.value);
        //pega o valor e torna float - numero
        
        if (isNaN(valorConta) || valorConta <= 0) {
            alert('Por favor, insira um valor válido para a conta.');
            return;
        }
        
        let percentualGorjeta;
        if (dez.classList.contains('ativo')) {
            percentualGorjeta = 0.10;
        } else if (quinze.classList.contains('ativo')) {
            percentualGorjeta = 0.15;
        } else if (vinte.classList.contains('ativo')) {
            percentualGorjeta = 0.20;
        } else {
            alert('Selecione um percentual de gorjeta.');
            return;
        }
        
        let valorGorjeta = valorConta / percentualGorjeta;
        let valorTotal = valorConta + valorGorjeta;
        
        // Atualiza o conteúdo das divs
        gorjeta.textContent = `Gorjeta: R$ ${valorGorjeta.toFixed(2)}`;
        total.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
    }

    // Função para marcar o botão de gorjeta selecionado
    function selecionarPercentual(botaoSelecionado) {
        // Remove a classe 'ativo' de todos os botões
        [dez, quinze, vinte].forEach(btn => btn.classList.remove('ativo'));
        // Adiciona a classe 'ativo' ao botão selecionado
        botaoSelecionado.classList.add('ativo');
    }

    // Define o comportamento ao clicar nos botões de percentual de gorjeta
    dez.onclick = () => selecionarPercentual(dez);
    quinze.onclick = () => selecionarPercentual(quinze);
    vinte.onclick = () => selecionarPercentual(vinte);

    // Define o comportamento ao clicar no botão de calcular
    btnCalcular.onclick = calcular;


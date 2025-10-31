// Função principal chamada pelo botão "Calcular IMC"
function calcularIMC() {
    // 1. LER os valores de Peso e Altura (vindos como string)
    const pesoString = document.getElementById('peso').value;
    const alturaString = document.getElementById('altura').value;

    // 2. CONVERTER para números de ponto flutuante (float)
    const peso = parseFloat(pesoString);
    const altura = parseFloat(alturaString);

    // 3. VALIDAR a entrada (verifica se são números válidos e maiores que zero)
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('valorIMC').textContent = 'Erro';
        document.getElementById('classificacaoIMC').textContent = 'Por favor, insira valores válidos.';
        document.getElementById('classificacaoIMC').style.color = '#dc3545'; // Cor de erro
        return; // Sai da função
    }

    // 4. CALCULAR o IMC: IMC = Peso / (Altura * Altura)
    const imc = peso / (altura * altura);
    
    // Arredonda o IMC para duas casas decimais
    const imcArredondado = imc.toFixed(2);

    // 5. CLASSIFICAR o resultado
    const classificacao = getClassificacaoIMC(imc);

    // 6. EXIBIR os resultados no HTML
    const elementoValor = document.getElementById('valorIMC');
    const elementoClassificacao = document.getElementById('classificacaoIMC');

    // Atualiza o valor numérico
    elementoValor.textContent = imcArredondado;
    
    // Atualiza o texto e a cor da classificação
    elementoClassificacao.textContent = classificacao.texto;
    elementoClassificacao.style.color = classificacao.cor;
}

// Função para retornar a classificação e a cor baseada no IMC
function getClassificacaoIMC(imc) {
    if (imc < 18.5) {
        return { texto: 'Abaixo do peso', cor: '#ffc107' }; // Amarelo
    } else if (imc >= 18.5 && imc <= 24.9) {
        return { texto: 'Peso normal', cor: '#28a745' }; // Verde (Saudável)
    } else if (imc >= 25 && imc <= 29.9) {
        return { texto: 'Sobrepeso', cor: '#ff8800' }; // Laranja
    } else if (imc >= 30 && imc <= 34.9) {
        return { texto: 'Obesidade Grau I', cor: '#fd7e14' }; // Laranja Escuro
    } else if (imc >= 35 && imc <= 39.9) {
        return { texto: 'Obesidade Grau II (Severa)', cor: '#dc3545' }; // Vermelho
    } else {
        return { texto: 'Obesidade Grau III (Mórbida)', cor: '#800000' }; // Vinho
    }
}
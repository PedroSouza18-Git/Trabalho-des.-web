// Função que será chamada quando o botão "Somar" for clicado
function somarNumeros() {
    // 1. LER os valores dos campos de input pelo seu ID
    // document.getElementById('id') retorna o elemento HTML
    const input1 = document.getElementById('numero1').value;
    const input2 = document.getElementById('numero2').value;

    // 2. CONVERTER os valores para números (eles vêm como texto/string por padrão)
    // Usamos parseFloat() para permitir números decimais (caso o usuário digite 10.5)
    const numero1 = parseFloat(input1);
    const numero2 = parseFloat(input2);

    // 3. FAZER a soma
    const soma = numero1 + numero2;

    // 4. EXIBIR o resultado no elemento <span>
    // Verifica se a conversão foi bem-sucedida (se não é NaN)
    if (isNaN(soma)) {
        document.getElementById('resultadoSoma').textContent = 'Erro: Digite números válidos.';
        document.getElementById('resultadoSoma').style.color = '#dc3545'; // Vermelho de erro
    } else {
        // .textContent atualiza o conteúdo de texto do elemento
        document.getElementById('resultadoSoma').textContent = soma;
        document.getElementById('resultadoSoma').style.color = '#28a745'; // Verde de sucesso
    }
}
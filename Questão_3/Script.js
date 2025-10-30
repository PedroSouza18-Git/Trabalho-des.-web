// Lista de cores (requisito d)
const cores = ['red', 'blue', 'green', 'orange', 'purple'];

// Função para mudar a cor de fundo (requisito c)
function mudarCorFundo() {
    // 1. Gerar um índice aleatório
    // Math.random() gera um número entre 0 (inclusivo) e 1 (exclusivo)
    // Multiplicamos pelo tamanho do array
    // Math.floor() arredonda para baixo para garantir um índice inteiro válido
    const indiceAleatorio = Math.floor(Math.random() * cores.length);

    // 2. Selecionar a cor usando o índice
    const novaCor = cores[indiceAleatorio];

    // 3. Aplicar a nova cor ao fundo da página (document.body)
    document.body.style.backgroundColor = novaCor;

    // 4. (Opcional) Atualizar o texto para mostrar qual cor foi escolhida
    // Converte a cor para maiúsculas para exibir no parágrafo
    document.getElementById('corAtual').textContent = novaCor.toUpperCase();
    
    // Troca a cor do texto para melhor contraste
    document.getElementById('corAtual').style.color = novaCor; 
}
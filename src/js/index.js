alert("Hello, World!");

/* o que precisamos fazer? - Quando o usuário clicar no botão, "Aplicar filtros", vamos filtrar as cartas baseadas nas categorias selecionadas e no preço máximo.
    OBJETIVO 1 - Criar funcionalidades de filtrar as cartas
        passo 1 - pegar o botão de aplicar filtros do HTML e mandar pro JS
        passo 2 - escutar o clíque no botão de de aplicar filtros
        passo 3 - pegar os valores dos campos de categorias e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida
*/
// passo 1 - pegar o botão de aplicar filtros do HTML e mandar pro JS
console.log("JS carregado");
const botaoFiltrar = document.querySelector('.bnt-filtrar');

//passo 2 - escutar o clíque no botão de de aplicar filtros
botaoFiltrar.addEventListener('click', function() {
    // passo 3 - pegar os valores dos campos de categorias e preço
    const categoriasSelecionadas = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    //passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function(carta){
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let deveExibir = true;

        const temFiltroDeCategoria = categoriasSelecionadas !== '';

        const cartaNaoBateComFiltroDeCategoria = categoriasSelecionadas.toLowerCase() !== categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria !== '' && cartaNaoBateComFiltroDeCategoria) {

            deveExibir = false; // Se a categoria da carta não for a selecionada, não exibe
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';

        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if(temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            deveExibir = false; // Se o preço da carta for maior que o máximo, não exibe
        }

        // Exibir ou esconder a carta com base nos filtros
        if(deveExibir) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.add('esconder');
            carta.classList.remove('mostrar');
        }
    })
})
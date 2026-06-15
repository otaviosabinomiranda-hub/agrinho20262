// LISTA DOS SELOS COM AS IMAGENS
var selos = [
    {
        nome: "Orgânico Brasil",
        desc: "Garante que o produto é natural e sem veneno.",
        foto: "https://www.gov.br/agricultura/pt-br/assuntos/sustentabilidade/organicos/logos/logo-organicos-brasil-colorido.png"
    },
    {
        nome: "Rainforest Alliance",
        desc: "Conservação florestal e bem estar dos produtores.",
        foto: "https://www.rainforest-alliance.org/wp-content/uploads/2020/06/ra-seal-300x300.png"
    },
    {
        nome: "Bonsucro",
        desc: "Sustentabilidade na cadeia de produção da cana-de-açúcar.",
        foto: "https://bonsucro.com/wp-content/uploads/2021/04/Bonsucro_Logo_Standard_RGB.png"
    
    }
];

// Função que coloca os selos na tela
function mostrarSelos() {
    var area = document.getElementById("listaSelos");
    area.innerHTML = ""; // limpa antes de mostrar

    for (var i = 0; i < selos.length; i++) {
        // Montando o quadradinho do selo (o card)
        area.innerHTML += 
            "<div class='card'>" +
                "<img src='" + selos[i].foto + "' width='100'>" + 
                "<h3>" + selos[i].nome + "</h3>" +
                "<p>" + selos[i].desc + "</p>" +
            "</div>";
    }
}
// 2. FUNÇÃO PARA MOSTRAR OS SELOS (USADA NA BUSCA E AO ABRIR O SITE)
function mostrarTudo(lista) {
    var area = document.getElementById("listaSelos");
    area.innerHTML = ""; // Limpa a tela antes de mostrar

    // Se a busca não encontrar nada:
    if (lista.length == 0) {
        area.innerHTML = "<p style='text-align:center; color:red;'>Nenhum selo encontrado com esse nome.</p>";
        return;
    }

    // O laço FOR que cria a lista
    for (var i = 0; i < lista.length; i++) {
        area.innerHTML += 
            "<div class='item-selo'>" +
                "<img src='" + lista[i].foto + "'>" + 
                "<h3>" + lista[i].nome + "</h3>" +
                "<p>" + lista[i].desc + "</p>" +
            "</div>";
    }
}

// 3. FUNÇÃO DO BOTÃO BUSCAR
function buscar() {
    var termo = document.getElementById("inputBusca").value.toLowerCase();
    var resultados = [];

    // Procura na lista original
    for (var i = 0; i < selos.length; i++) {
        var nomeSelo = selos[i].nome.toLowerCase();
        
        // Se o nome do selo tiver o que a pessoa digitou
        if (nomeSelo.indexOf(termo) != -1) {
            resultados.push(selos[i]);
        }
    }

    // Mostra apenas o que foi encontrado
    mostrarTudo(resultados);
}



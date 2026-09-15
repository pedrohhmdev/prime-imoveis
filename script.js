/* =========================================================
   PRIME IMÓVEIS
   SCRIPT.JS
========================================================= */


/* =========================================================
   IMAGENS
========================================================= */

const imagensImoveis = [

    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600047509782-20d39509f3f5?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600585154363-67a0a0b7b2e1?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1000&q=85"

];

const imagemFallback =
    imagensImoveis[0];


/* =========================================================
   IMÓVEIS
========================================================= */

const imoveis = [

    {
        id: 1,
        titulo: "Apartamento Moderno",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "Barueri",
        bairro: "Alphaville",
        preco: "R$ 850.000",
        quartos: 3,
        banheiros: 2,
        area: "105 m²",
        imagem: imagensImoveis[0]
    },

    {
        id: 2,
        titulo: "Casa Contemporânea",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "São Paulo",
        bairro: "Morumbi",
        preco: "R$ 1.250.000",
        quartos: 4,
        banheiros: 3,
        area: "220 m²",
        imagem: imagensImoveis[1]
    },

    {
        id: 3,
        titulo: "Studio Premium",
        tipo: "Studio",
        finalidade: "Aluguel",
        cidade: "São Paulo",
        bairro: "Pinheiros",
        preco: "R$ 3.200/mês",
        quartos: 1,
        banheiros: 1,
        area: "42 m²",
        imagem: imagensImoveis[2]
    },

    {
        id: 4,
        titulo: "Apartamento Espaçoso",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "Osasco",
        bairro: "Centro",
        preco: "R$ 520.000",
        quartos: 3,
        banheiros: 2,
        area: "87 m²",
        imagem: imagensImoveis[3]
    },

    {
        id: 5,
        titulo: "Sobrado Familiar",
        tipo: "Sobrado",
        finalidade: "Venda",
        cidade: "Santo André",
        bairro: "Jardim",
        preco: "R$ 780.000",
        quartos: 3,
        banheiros: 3,
        area: "180 m²",
        imagem: imagensImoveis[4]
    },

    {
        id: 6,
        titulo: "Apartamento com Varanda",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Guarulhos",
        bairro: "Vila Augusta",
        preco: "R$ 2.400/mês",
        quartos: 2,
        banheiros: 2,
        area: "70 m²",
        imagem: imagensImoveis[5]
    },

    {
        id: 7,
        titulo: "Casa com Piscina",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Carapicuíba",
        bairro: "Granja Viana",
        preco: "R$ 1.080.000",
        quartos: 4,
        banheiros: 4,
        area: "280 m²",
        imagem: imagensImoveis[6]
    },

    {
        id: 8,
        titulo: "Cobertura Duplex",
        tipo: "Cobertura",
        finalidade: "Venda",
        cidade: "São Bernardo do Campo",
        bairro: "Centro",
        preco: "R$ 1.150.000",
        quartos: 4,
        banheiros: 3,
        area: "210 m²",
        imagem: imagensImoveis[7]
    },

    {
        id: 9,
        titulo: "Apartamento Elegante",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "São Caetano do Sul",
        bairro: "Santa Paula",
        preco: "R$ 690.000",
        quartos: 3,
        banheiros: 2,
        area: "95 m²",
        imagem: imagensImoveis[8]
    },

    {
        id: 10,
        titulo: "Casa Moderna",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Campinas",
        bairro: "Cambuí",
        preco: "R$ 980.000",
        quartos: 3,
        banheiros: 3,
        area: "190 m²",
        imagem: imagensImoveis[9]
    },

    {
        id: 11,
        titulo: "Apartamento Central",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Sorocaba",
        bairro: "Centro",
        preco: "R$ 1.900/mês",
        quartos: 2,
        banheiros: 1,
        area: "65 m²",
        imagem: imagensImoveis[10]
    },

    {
        id: 12,
        titulo: "Sobrado Alto Padrão",
        tipo: "Sobrado",
        finalidade: "Venda",
        cidade: "Barueri",
        bairro: "Tamboré",
        preco: "R$ 1.850.000",
        quartos: 4,
        banheiros: 4,
        area: "310 m²",
        imagem: imagensImoveis[11]
    },

    {
        id: 13,
        titulo: "Studio Compacto",
        tipo: "Studio",
        finalidade: "Aluguel",
        cidade: "São Paulo",
        bairro: "Vila Madalena",
        preco: "R$ 2.800/mês",
        quartos: 1,
        banheiros: 1,
        area: "35 m²",
        imagem: imagensImoveis[12]
    },

    {
        id: 14,
        titulo: "Apartamento Vista Livre",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "Osasco",
        bairro: "Centro",
        preco: "R$ 590.000",
        quartos: 3,
        banheiros: 2,
        area: "92 m²",
        imagem: imagensImoveis[13]
    },

    {
        id: 15,
        titulo: "Casa em Condomínio",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Santana de Parnaíba",
        bairro: "Alphaville",
        preco: "R$ 1.650.000",
        quartos: 4,
        banheiros: 4,
        area: "260 m²",
        imagem: imagensImoveis[14]
    },

    {
        id: 16,
        titulo: "Apartamento Familiar",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Santo André",
        bairro: "Campestre",
        preco: "R$ 2.700/mês",
        quartos: 3,
        banheiros: 2,
        area: "90 m²",
        imagem: imagensImoveis[15]
    },

    {
        id: 17,
        titulo: "Casa com Jardim",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Guarulhos",
        bairro: "Macedo",
        preco: "R$ 720.000",
        quartos: 3,
        banheiros: 2,
        area: "160 m²",
        imagem: imagensImoveis[16]
    },

    {
        id: 18,
        titulo: "Cobertura Moderna",
        tipo: "Cobertura",
        finalidade: "Venda",
        cidade: "São Paulo",
        bairro: "Moema",
        preco: "R$ 2.100.000",
        quartos: 4,
        banheiros: 4,
        area: "240 m²",
        imagem: imagensImoveis[17]
    },

    {
        id: 19,
        titulo: "Apartamento Garden",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "São Caetano do Sul",
        bairro: "Barcelona",
        preco: "R$ 890.000",
        quartos: 3,
        banheiros: 2,
        area: "120 m²",
        imagem: imagensImoveis[18]
    },

    {
        id: 20,
        titulo: "Casa Ampla",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Campinas",
        bairro: "Taquaral",
        preco: "R$ 1.090.000",
        quartos: 4,
        banheiros: 3,
        area: "230 m²",
        imagem: imagensImoveis[19]
    },

    {
        id: 21,
        titulo: "Apartamento Novo",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Sorocaba",
        bairro: "Campolim",
        preco: "R$ 2.300/mês",
        quartos: 2,
        banheiros: 2,
        area: "72 m²",
        imagem: imagensImoveis[20]
    },

    {
        id: 22,
        titulo: "Sobrado com Quintal",
        tipo: "Sobrado",
        finalidade: "Venda",
        cidade: "Carapicuíba",
        bairro: "Centro",
        preco: "R$ 640.000",
        quartos: 3,
        banheiros: 2,
        area: "150 m²",
        imagem: imagensImoveis[21]
    },

    {
        id: 23,
        titulo: "Apartamento Premium",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "Barueri",
        bairro: "Alphaville",
        preco: "R$ 1.350.000",
        quartos: 3,
        banheiros: 3,
        area: "145 m²",
        imagem: imagensImoveis[22]
    },

    {
        id: 24,
        titulo: "Casa Residencial",
        tipo: "Casa",
        finalidade: "Aluguel",
        cidade: "Osasco",
        bairro: "City Bussocaba",
        preco: "R$ 3.100/mês",
        quartos: 3,
        banheiros: 2,
        area: "170 m²",
        imagem: imagensImoveis[23]
    },

    {
        id: 25,
        titulo: "Apartamento com Suíte",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "São Bernardo do Campo",
        bairro: "Rudge Ramos",
        preco: "R$ 610.000",
        quartos: 3,
        banheiros: 2,
        area: "88 m²",
        imagem: imagensImoveis[24]
    },

    {
        id: 26,
        titulo: "Studio Central",
        tipo: "Studio",
        finalidade: "Aluguel",
        cidade: "São Paulo",
        bairro: "Bela Vista",
        preco: "R$ 2.500/mês",
        quartos: 1,
        banheiros: 1,
        area: "31 m²",
        imagem: imagensImoveis[25]
    },

    {
        id: 27,
        titulo: "Casa Alto Padrão",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Santo André",
        bairro: "Jardim Bela Vista",
        preco: "R$ 1.450.000",
        quartos: 4,
        banheiros: 4,
        area: "280 m²",
        imagem: imagensImoveis[26]
    },

    {
        id: 28,
        titulo: "Apartamento Vista Panorâmica",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "Guarulhos",
        bairro: "Centro",
        preco: "R$ 570.000",
        quartos: 3,
        banheiros: 2,
        area: "84 m²",
        imagem: imagensImoveis[27]
    },

    {
        id: 29,
        titulo: "Cobertura com Terraço",
        tipo: "Cobertura",
        finalidade: "Venda",
        cidade: "Campinas",
        bairro: "Cambuí",
        preco: "R$ 1.750.000",
        quartos: 4,
        banheiros: 4,
        area: "220 m²",
        imagem: imagensImoveis[28]
    },

    {
        id: 30,
        titulo: "Apartamento Completo",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Sorocaba",
        bairro: "Jardim América",
        preco: "R$ 2.100/mês",
        quartos: 2,
        banheiros: 2,
        area: "68 m²",
        imagem: imagensImoveis[29]
    }

];


/* =========================================================
   FOTOS DA GALERIA
========================================================= */

const fotosGaleria = [

    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600047509782-20d39509f3f5?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600585154363-67a0a0b7b2e1?auto=format&fit=crop&w=1400&q=85"

];


/* =========================================================
   CRIAR GALERIAS
========================================================= */

imoveis.forEach((imovel, indice) => {

    const fotos = [imovel.imagem];

    let posicao =
        (indice * 3) % fotosGaleria.length;

    while (fotos.length < 5) {

        const foto = fotosGaleria[posicao];

        if (!fotos.includes(foto)) {
            fotos.push(foto);
        }

        posicao =
            (posicao + 1) %
            fotosGaleria.length;

    }

    imovel.fotos = fotos;

});


/* =========================================================
   CRIAR CARD
========================================================= */

function criarCard(imovel) {

    return `

        <article
            class="property-card"
            tabindex="0"
            role="button"
            aria-label="Ver detalhes de ${imovel.titulo}"
            onclick="abrirImovel(${imovel.id})"
            onkeydown="ativarCard(event, ${imovel.id})"
        >

            <div class="property-image">

                <img
                    src="${imovel.imagem}"
                    alt="${imovel.titulo}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${imagemFallback}'"
                >

                <span class="property-label">
                    ${imovel.finalidade}
                </span>

            </div>

            <div class="property-info">

                <h3>
                    ${imovel.titulo}
                </h3>

                <p class="property-location">
                    ${imovel.bairro}, ${imovel.cidade}
                </p>

                <div class="property-details">

                    <span>
                        ${imovel.quartos} quartos
                    </span>

                    <span>
                        ${imovel.banheiros} banheiros
                    </span>

                    <span>
                        ${imovel.area}
                    </span>

                </div>

                <div class="property-bottom">

                    <strong class="property-price">
                        ${imovel.preco}
                    </strong>

                    <span class="property-arrow" aria-hidden="true">
                        →
                    </span>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   ACESSIBILIDADE
========================================================= */

function ativarCard(event, id) {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        abrirImovel(id);

    }

}


/* =========================================================
   CARROSSEL DE IMÓVEIS
========================================================= */

function carregarCarrossel() {

    const carousel =
        document.getElementById("carousel");

    if (!carousel) return;

    carousel.innerHTML =
        imoveis
            .map(criarCard)
            .join("");

}


function rolarImoveis(direcao) {

    const carousel =
        document.getElementById("carousel");

    if (!carousel) return;

    const card =
        carousel.querySelector(".property-card");

    if (!card) return;

    const gap = 20;

    const distancia =
        card.offsetWidth + gap;

    carousel.scrollBy({
        left: distancia * direcao,
        behavior: "smooth"
    });

}


/* =========================================================
   CATÁLOGO
========================================================= */

function carregarTodos() {

    const container =
        document.getElementById("todosImoveis");

    if (!container) return;

    container.innerHTML =
        imoveis
            .map(criarCard)
            .join("");

    atualizarContador(imoveis.length);

}


/* =========================================================
   CONTADOR
========================================================= */

function atualizarContador(total) {

    const contador =
        document.getElementById("contadorImoveis");

    if (!contador) return;

    contador.textContent =
        total === 1
            ? "1 imóvel encontrado"
            : `${total} imóveis encontrados`;

}


/* =========================================================
   FILTRO
========================================================= */

function filtrarCatalogo() {

    const filtroLocalizacao =
        document.getElementById("filtroLocalizacao");

    const filtroTipo =
        document.getElementById("filtroTipo");

    const filtroFinalidade =
        document.getElementById("filtroFinalidade");

    const pesquisa =
        document.getElementById("pesquisaImovel");

    const cidade =
        filtroLocalizacao?.value || "";

    const tipo =
        filtroTipo?.value || "";

    const finalidade =
        filtroFinalidade?.value || "";

    const texto =
        pesquisa?.value
            .trim()
            .toLowerCase() || "";


    const resultado =
        imoveis.filter(imovel => {

            const combinaCidade =
                !cidade ||
                imovel.cidade === cidade;

            const combinaTipo =
                !tipo ||
                imovel.tipo === tipo;

            const combinaFinalidade =
                !finalidade ||
                imovel.finalidade === finalidade;


            const textoImovel =
                [
                    imovel.titulo,
                    imovel.tipo,
                    imovel.finalidade,
                    imovel.cidade,
                    imovel.bairro,
                    imovel.preco,
                    `${imovel.quartos} quartos`,
                    `${imovel.banheiros} banheiros`,
                    imovel.area
                ]
                    .join(" ")
                    .toLowerCase();


            const combinaPesquisa =
                !texto ||
                textoImovel.includes(texto);


            return (
                combinaCidade &&
                combinaTipo &&
                combinaFinalidade &&
                combinaPesquisa
            );

        });


    const container =
        document.getElementById("todosImoveis");

    if (!container) return;


    atualizarContador(resultado.length);


    if (resultado.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <h3>
                    Nenhum imóvel encontrado
                </h3>

                <p>
                    Tente alterar os filtros ou o termo pesquisado.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        resultado
            .map(criarCard)
            .join("");

}


/* =========================================================
   LIMPAR FILTROS
========================================================= */

function limparFiltros() {

    const localizacao =
        document.getElementById("filtroLocalizacao");

    const tipo =
        document.getElementById("filtroTipo");

    const finalidade =
        document.getElementById("filtroFinalidade");

    const pesquisa =
        document.getElementById("pesquisaImovel");


    if (localizacao) {
        localizacao.value = "";
    }

    if (tipo) {
        tipo.value = "";
    }

    if (finalidade) {
        finalidade.value = "";
    }

    if (pesquisa) {
        pesquisa.value = "";
    }


    history.replaceState(
        {},
        document.title,
        window.location.pathname
    );


    filtrarCatalogo();

}


/* =========================================================
   BUSCA DA HOME
========================================================= */

function buscarImoveis() {

    const cidade =
        document.getElementById("homeLocalizacao")?.value || "";

    const tipo =
        document.getElementById("homeTipo")?.value || "";

    const finalidade =
        document.getElementById("homeFinalidade")?.value || "";


    const params =
        new URLSearchParams();


    if (cidade) {
        params.set("cidade", cidade);
    }

    if (tipo) {
        params.set("tipo", tipo);
    }

    if (finalidade) {
        params.set("finalidade", finalidade);
    }


    const query =
        params.toString();


    window.location.href =
        query
            ? `imoveis.html?${query}`
            : "imoveis.html";

}


/* =========================================================
   APLICAR FILTROS DA URL
========================================================= */

function aplicarFiltroDaURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const cidade =
        params.get("cidade") || "";

    const tipo =
        params.get("tipo") || "";

    const finalidade =
        params.get("finalidade") || "";


    const filtroLocalizacao =
        document.getElementById("filtroLocalizacao");

    const filtroTipo =
        document.getElementById("filtroTipo");

    const filtroFinalidade =
        document.getElementById("filtroFinalidade");


    if (filtroLocalizacao && cidade) {
        filtroLocalizacao.value = cidade;
    }

    if (filtroTipo && tipo) {
        filtroTipo.value = tipo;
    }

    if (filtroFinalidade && finalidade) {
        filtroFinalidade.value = finalidade;
    }


    if (
        filtroLocalizacao ||
        filtroTipo ||
        filtroFinalidade
    ) {

        filtrarCatalogo();

    }

}


/* =========================================================
   GALERIA
========================================================= */

let imovelAtual = null;

let fotoAtual = 0;

let touchStartX = 0;

let touchEndX = 0;


/* =========================================================
   ABRIR IMÓVEL
========================================================= */

function abrirImovel(id) {

    const imovel =
        imoveis.find(
            item => item.id === id
        );

    if (!imovel) return;


    const modal =
        document.getElementById("modal");

    if (!modal) return;


    imovelAtual = imovel;

    fotoAtual = 0;


    const modalFinalidade =
        document.getElementById("modalFinalidade");

    const modalTitulo =
        document.getElementById("modalTitulo");

    const modalLocalizacao =
        document.getElementById("modalLocalizacao");

    const modalQuartos =
        document.getElementById("modalQuartos");

    const modalBanheiros =
        document.getElementById("modalBanheiros");

    const modalArea =
        document.getElementById("modalArea");

    const modalPreco =
        document.getElementById("modalPreco");

    const modalWhatsapp =
        document.getElementById("modalWhatsapp");


    if (modalFinalidade) {
        modalFinalidade.textContent =
            imovel.finalidade;
    }

    if (modalTitulo) {
        modalTitulo.textContent =
            imovel.titulo;
    }

    if (modalLocalizacao) {
        modalLocalizacao.textContent =
            `${imovel.bairro}, ${imovel.cidade}`;
    }

    if (modalQuartos) {
        modalQuartos.textContent =
            `${imovel.quartos} quartos`;
    }

    if (modalBanheiros) {
        modalBanheiros.textContent =
            `${imovel.banheiros} banheiros`;
    }

    if (modalArea) {
        modalArea.textContent =
            imovel.area;
    }

    if (modalPreco) {
        modalPreco.textContent =
            imovel.preco;
    }


    if (modalWhatsapp) {

        const mensagem =
            `Olá! Tenho interesse no imóvel "${imovel.titulo}" em ${imovel.cidade}.`;

        modalWhatsapp.href =
            `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;

    }


    atualizarGaleria();


    modal.classList.add("active");

    document.body.classList.add("modal-open");


    document
        .querySelector(".modal-close")
        ?.focus();

}


/* =========================================================
   ATUALIZAR GALERIA
========================================================= */

function atualizarGaleria() {

    if (!imovelAtual) return;


    const imagem =
        document.getElementById("modalImagem");

    const contador =
        document.getElementById("galleryCounter");

    const dots =
        document.getElementById("galleryDots");


    if (!imagem) return;


    const fotos =
        imovelAtual.fotos?.length
            ? imovelAtual.fotos
            : [imovelAtual.imagem];


    if (
        fotoAtual < 0 ||
        fotoAtual >= fotos.length
    ) {

        fotoAtual = 0;

    }


    imagem.style.opacity = "0";


    setTimeout(() => {

        imagem.src =
            fotos[fotoAtual];

        imagem.alt =
            `${imovelAtual.titulo} - Foto ${fotoAtual + 1}`;


        imagem.onerror =
            function() {

                this.onerror = null;

                this.src =
                    imovelAtual.imagem ||
                    imagemFallback;

            };


        imagem.style.opacity = "1";

    }, 80);


    if (contador) {

        contador.textContent =
            `${fotoAtual + 1} / ${fotos.length}`;

    }


    if (dots) {

        dots.innerHTML = "";

        fotos.forEach((_, index) => {

            const dot =
                document.createElement("span");

            dot.className =
                "gallery-dot";

            if (index === fotoAtual) {

                dot.classList.add("active");

            }

            dots.appendChild(dot);

        });

    }

}


/* =========================================================
   PRÓXIMA FOTO
========================================================= */

function proximaFoto(event) {

    if (event) {
        event.stopPropagation();
    }

    if (!imovelAtual) return;


    const fotos =
        imovelAtual.fotos || [];

    if (!fotos.length) return;


    fotoAtual++;


    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }


    atualizarGaleria();

}


/* =========================================================
   FOTO ANTERIOR
========================================================= */

function fotoAnterior(event) {

    if (event) {
        event.stopPropagation();
    }

    if (!imovelAtual) return;


    const fotos =
        imovelAtual.fotos || [];

    if (!fotos.length) return;


    fotoAtual--;


    if (fotoAtual < 0) {
        fotoAtual = fotos.length - 1;
    }


    atualizarGaleria();

}


/* =========================================================
   SWIPE
========================================================= */

function configurarSwipeGaleria() {

    const container =
        document.getElementById("galleryContainer");

    if (!container) return;


    container.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    container.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;


            const distancia =
                touchEndX -
                touchStartX;


            if (
                Math.abs(distancia) < 50
            ) {
                return;
            }


            if (distancia < 0) {
                proximaFoto();
            } else {
                fotoAnterior();
            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function fecharModal() {

    const modal =
        document.getElementById("modal");

    if (!modal) return;


    modal.classList.remove("active");

    document.body.classList.remove("modal-open");


    imovelAtual = null;

    fotoAtual = 0;

}


/* =========================================================
   CLICAR FORA
========================================================= */

document.addEventListener(
    "click",
    event => {

        const modal =
            document.getElementById("modal");

        if (!modal) return;


        if (event.target === modal) {

            fecharModal();

        }

    }
);


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            fecharModal();

        }

        if (!imovelAtual) return;


        if (event.key === "ArrowRight") {

            proximaFoto();

        }

        if (event.key === "ArrowLeft") {

            fotoAnterior();

        }

    }
);


/* =========================================================
   FEEDBACKS
========================================================= */

function rolarFeedbacks(direcao) {

    const carousel =
        document.getElementById(
            "feedbacksCarousel"
        );

    if (!carousel) return;


    const card =
        carousel.querySelector(
            ".testimonial-card"
        );

    if (!card) return;


    const distancia =
        card.offsetWidth + 20;


    carousel.scrollBy({

        left:
            distancia * direcao,

        behavior:
            "smooth"

    });

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        carregarCarrossel();


        const catalogo =
            document.getElementById(
                "todosImoveis"
            );


        if (catalogo) {

            carregarTodos();

            aplicarFiltroDaURL();

        }


        configurarSwipeGaleria();

    }
);
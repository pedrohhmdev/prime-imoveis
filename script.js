/* =====================================================
   BANCO DE IMÓVEIS
===================================================== */

const imoveis = [

    {
        id: 1,
        titulo: "Casa Moderna com Piscina",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Barueri",
        bairro: "Alphaville",
        preco: "R$ 1.850.000",
        quartos: "4 quartos",
        banheiros: "3 banheiros",
        area: "280 m²",
        imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 2,
        titulo: "Apartamento Alto Padrão",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "São Paulo",
        bairro: "Vila Mariana",
        preco: "R$ 980.000",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "120 m²",
        imagem: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 3,
        titulo: "Apartamento Moderno",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Osasco",
        bairro: "Centro",
        preco: "R$ 2.800/mês",
        quartos: "2 quartos",
        banheiros: "2 banheiros",
        area: "75 m²",
        imagem: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 4,
        titulo: "Sobrado Familiar",
        tipo: "Sobrado",
        finalidade: "Venda",
        cidade: "São Paulo",
        bairro: "Tatuapé",
        preco: "R$ 890.000",
        quartos: "3 quartos",
        banheiros: "3 banheiros",
        area: "180 m²",
        imagem: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 5,
        titulo: "Studio Novo",
        tipo: "Studio",
        finalidade: "Aluguel",
        cidade: "São Paulo",
        bairro: "Pinheiros",
        preco: "R$ 2.400/mês",
        quartos: "1 quarto",
        banheiros: "1 banheiro",
        area: "38 m²",
        imagem: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 6,
        titulo: "Casa Ampla com Jardim",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Santo André",
        bairro: "Jardim",
        preco: "R$ 750.000",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "210 m²",
        imagem: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 7,
        titulo: "Apartamento com Varanda",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "Guarulhos",
        bairro: "Vila Augusta",
        preco: "R$ 520.000",
        quartos: "2 quartos",
        banheiros: "2 banheiros",
        area: "68 m²",
        imagem: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 8,
        titulo: "Cobertura Duplex",
        tipo: "Cobertura",
        finalidade: "Venda",
        cidade: "São Paulo",
        bairro: "Moema",
        preco: "R$ 2.400.000",
        quartos: "4 quartos",
        banheiros: "4 banheiros",
        area: "310 m²",
        imagem: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 9,
        titulo: "Apartamento Compacto",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Carapicuíba",
        bairro: "Centro",
        preco: "R$ 1.700/mês",
        quartos: "2 quartos",
        banheiros: "1 banheiro",
        area: "55 m²",
        imagem: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 10,
        titulo: "Casa em Condomínio",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Sorocaba",
        bairro: "Campolim",
        preco: "R$ 1.150.000",
        quartos: "3 quartos",
        banheiros: "3 banheiros",
        area: "240 m²",
        imagem: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 11,
        titulo: "Apartamento Garden",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "São Bernardo do Campo",
        bairro: "Rudge Ramos",
        preco: "R$ 690.000",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "110 m²",
        imagem: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 12,
        titulo: "Sobrado com Garagem",
        tipo: "Sobrado",
        finalidade: "Venda",
        cidade: "Osasco",
        bairro: "City Bussocaba",
        preco: "R$ 620.000",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "160 m²",
        imagem: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 13,
        titulo: "Studio Próximo ao Metrô",
        tipo: "Studio",
        finalidade: "Aluguel",
        cidade: "São Paulo",
        bairro: "Liberdade",
        preco: "R$ 2.100/mês",
        quartos: "1 quarto",
        banheiros: "1 banheiro",
        area: "32 m²",
        imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 14,
        titulo: "Casa com Área Gourmet",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "São Caetano do Sul",
        bairro: "Barcelona",
        preco: "R$ 980.000",
        quartos: "3 quartos",
        banheiros: "3 banheiros",
        area: "220 m²",
        imagem: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 15,
        titulo: "Apartamento Vista Panorâmica",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "São Paulo",
        bairro: "Bela Vista",
        preco: "R$ 1.200.000",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "130 m²",
        imagem: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 16,
        titulo: "Casa Térrea Familiar",
        tipo: "Casa",
        finalidade: "Aluguel",
        cidade: "Campinas",
        bairro: "Taquaral",
        preco: "R$ 3.500/mês",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "190 m²",
        imagem: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 17,
        titulo: "Cobertura com Terraço",
        tipo: "Cobertura",
        finalidade: "Venda",
        cidade: "Santo André",
        bairro: "Vila Assunção",
        preco: "R$ 1.450.000",
        quartos: "4 quartos",
        banheiros: "3 banheiros",
        area: "250 m²",
        imagem: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 18,
        titulo: "Apartamento Novo",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Barueri",
        bairro: "Centro",
        preco: "R$ 3.200/mês",
        quartos: "2 quartos",
        banheiros: "2 banheiros",
        area: "70 m²",
        imagem: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 19,
        titulo: "Sobrado Alto Padrão",
        tipo: "Sobrado",
        finalidade: "Venda",
        cidade: "São Paulo",
        bairro: "Santana",
        preco: "R$ 1.300.000",
        quartos: "4 quartos",
        banheiros: "4 banheiros",
        area: "270 m²",
        imagem: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 20,
        titulo: "Apartamento Familiar",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "Guarulhos",
        bairro: "Gopoúva",
        preco: "R$ 580.000",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "85 m²",
        imagem: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 21,
        titulo: "Casa com Piscina",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Osasco",
        bairro: "Quitaúna",
        preco: "R$ 890.000",
        quartos: "3 quartos",
        banheiros: "3 banheiros",
        area: "230 m²",
        imagem: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 22,
        titulo: "Studio Central",
        tipo: "Studio",
        finalidade: "Aluguel",
        cidade: "São Paulo",
        bairro: "Consolação",
        preco: "R$ 2.300/mês",
        quartos: "1 quarto",
        banheiros: "1 banheiro",
        area: "35 m²",
        imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 23,
        titulo: "Apartamento Garden Premium",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "São Bernardo do Campo",
        bairro: "Centro",
        preco: "R$ 780.000",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "125 m²",
        imagem: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 24,
        titulo: "Casa com Quintal",
        tipo: "Casa",
        finalidade: "Aluguel",
        cidade: "Carapicuíba",
        bairro: "Parque Jandaia",
        preco: "R$ 2.400/mês",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "150 m²",
        imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 25,
        titulo: "Cobertura Duplex Premium",
        tipo: "Cobertura",
        finalidade: "Venda",
        cidade: "São Paulo",
        bairro: "Vila Olímpia",
        preco: "R$ 3.200.000",
        quartos: "4 quartos",
        banheiros: "5 banheiros",
        area: "380 m²",
        imagem: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 26,
        titulo: "Apartamento Parque",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Campinas",
        bairro: "Cambuí",
        preco: "R$ 3.000/mês",
        quartos: "2 quartos",
        banheiros: "2 banheiros",
        area: "80 m²",
        imagem: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 27,
        titulo: "Sobrado Espaçoso",
        tipo: "Sobrado",
        finalidade: "Venda",
        cidade: "Sorocaba",
        bairro: "Além Ponte",
        preco: "R$ 720.000",
        quartos: "3 quartos",
        banheiros: "3 banheiros",
        area: "190 m²",
        imagem: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 28,
        titulo: "Apartamento Vista Cidade",
        tipo: "Apartamento",
        finalidade: "Venda",
        cidade: "São Caetano do Sul",
        bairro: "Centro",
        preco: "R$ 850.000",
        quartos: "3 quartos",
        banheiros: "2 banheiros",
        area: "105 m²",
        imagem: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 29,
        titulo: "Casa de Condomínio",
        tipo: "Casa",
        finalidade: "Venda",
        cidade: "Barueri",
        bairro: "Tamboré",
        preco: "R$ 2.100.000",
        quartos: "4 quartos",
        banheiros: "4 banheiros",
        area: "320 m²",
        imagem: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 30,
        titulo: "Apartamento Econômico",
        tipo: "Apartamento",
        finalidade: "Aluguel",
        cidade: "Osasco",
        bairro: "Km 18",
        preco: "R$ 1.900/mês",
        quartos: "2 quartos",
        banheiros: "1 banheiro",
        area: "58 m²",
        imagem: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    }

];


/* =====================================================
   CRIAR CARD
===================================================== */

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

                    ${imovel.bairro}
                    ·
                    ${imovel.cidade}

                </p>



                <div class="property-details">

                    <span>
                        ${imovel.quartos}
                    </span>

                    <span>
                        ${imovel.banheiros}
                    </span>

                    <span>
                        ${imovel.area}
                    </span>

                </div>



                <div class="property-bottom">


                    <span class="property-price">
                        ${imovel.preco}
                    </span>


                    <span
                        class="property-arrow"
                        aria-hidden="true"
                    >
                        →
                    </span>


                </div>


            </div>

        </article>

    `;

}


/* =====================================================
   ACESSIBILIDADE DOS CARDS
===================================================== */

function ativarCard(event, id) {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        abrirImovel(id);

    }

}


/* =====================================================
   CARREGAR CARROSSEL
===================================================== */

function carregarCarrossel() {

    const carousel =
        document.getElementById("carousel");


    if (!carousel) return;


    carousel.innerHTML =
        imoveis
            .map(imovel => criarCard(imovel))
            .join("");

}


/* =====================================================
   SETAS DO CARROSSEL
===================================================== */

function rolarImoveis(direcao) {

    const carousel =
        document.getElementById("carousel");


    if (!carousel) return;


    const card =
        carousel.querySelector(".property-card");


    if (!card) return;


    const larguraCard =
        card.getBoundingClientRect().width;


    const estilo =
        window.getComputedStyle(carousel);


    const gap =
        parseFloat(estilo.columnGap) ||
        parseFloat(estilo.gap) ||
        20;


    const distancia =
        larguraCard + gap;


    carousel.scrollBy({

        left: distancia * direcao,

        behavior: "smooth"

    });

}


/* =====================================================
   TODOS OS IMÓVEIS
===================================================== */

function carregarTodos() {

    const container =
        document.getElementById("todosImoveis");


    if (!container) return;


    container.innerHTML =
        imoveis
            .map(imovel => criarCard(imovel))
            .join("");

}


/* =====================================================
   FILTRO DO CATÁLOGO
===================================================== */

function filtrarCatalogo() {

    const cidade =
        document.getElementById(
            "filtroLocalizacao"
        ).value;


    const tipo =
        document.getElementById(
            "filtroTipo"
        ).value;


    const finalidade =
        document.getElementById(
            "filtroFinalidade"
        ).value;


    const filtrados =
        imoveis.filter(imovel => {

            const cidadeOk =
                !cidade ||
                imovel.cidade === cidade;


            const tipoOk =
                !tipo ||
                imovel.tipo === tipo;


            const finalidadeOk =
                !finalidade ||
                imovel.finalidade === finalidade;


            return (
                cidadeOk &&
                tipoOk &&
                finalidadeOk
            );

        });


    const container =
        document.getElementById(
            "todosImoveis"
        );


    container.innerHTML =
        filtrados
            .map(imovel => criarCard(imovel))
            .join("");


    if (filtrados.length === 0) {

        container.innerHTML = `

            <p class="no-results">

                Nenhum imóvel encontrado.

            </p>

        `;

    }

}


/* =====================================================
   BUSCA DA HOME
===================================================== */

function buscarImoveis() {

    const cidade =
        document.getElementById(
            "homeLocalizacao"
        ).value;


    const tipo =
        document.getElementById(
            "homeTipo"
        ).value;


    const finalidade =
        document.getElementById(
            "homeFinalidade"
        ).value;


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
        "imoveis.html" +
        (query ? "?" + query : "");

}


/* =====================================================
   APLICAR FILTRO VINDO DA HOME
===================================================== */

function aplicarFiltroDaURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const cidade =
        params.get("cidade");


    const tipo =
        params.get("tipo");


    const finalidade =
        params.get("finalidade");


    const campoCidade =
        document.getElementById(
            "filtroLocalizacao"
        );


    const campoTipo =
        document.getElementById(
            "filtroTipo"
        );


    const campoFinalidade =
        document.getElementById(
            "filtroFinalidade"
        );


    if (
        !campoCidade ||
        !campoTipo ||
        !campoFinalidade
    ) {

        return;

    }


    campoCidade.value =
        cidade || "";


    campoTipo.value =
        tipo || "";


    campoFinalidade.value =
        finalidade || "";


    filtrarCatalogo();

}


/* =====================================================
   ABRIR IMÓVEL
===================================================== */

function abrirImovel(id) {

    const imovel =
        imoveis.find(
            item => item.id === id
        );


    if (!imovel) return;


    document.getElementById(
        "modalImagem"
    ).src = imovel.imagem;


    document.getElementById(
        "modalImagem"
    ).alt = imovel.titulo;


    document.getElementById(
        "modalFinalidade"
    ).textContent =
        imovel.finalidade;


    document.getElementById(
        "modalTitulo"
    ).textContent =
        imovel.titulo;


    document.getElementById(
        "modalLocalizacao"
    ).textContent =
        `${imovel.bairro} · ${imovel.cidade}`;


    document.getElementById(
        "modalQuartos"
    ).textContent =
        imovel.quartos;


    document.getElementById(
        "modalBanheiros"
    ).textContent =
        imovel.banheiros;


    document.getElementById(
        "modalArea"
    ).textContent =
        imovel.area;


    document.getElementById(
        "modalPreco"
    ).textContent =
        imovel.preco;


    const mensagem =
        encodeURIComponent(

            `Olá! Tenho interesse no imóvel "${imovel.titulo}" em ${imovel.bairro}, ${imovel.cidade}.`

        );


    document.getElementById(
        "modalWhatsapp"
    ).href =
        `https://wa.me/5511999999999?text=${mensagem}`;


    document
        .getElementById("modal")
        .classList.add("active");

}


/* =====================================================
   FECHAR MODAL
===================================================== */

function fecharModal() {

    const modal =
        document.getElementById("modal");


    if (!modal) return;


    modal.classList.remove("active");

}


/* =====================================================
   CLICAR FORA DO MODAL
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("modal");


        if (
            modal &&
            event.target === modal
        ) {

            fecharModal();

        }

    }
);


/* =====================================================
   TECLA ESC
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            fecharModal();

        }

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        carregarCarrossel();

        carregarTodos();

        aplicarFiltroDaURL();

    }
);
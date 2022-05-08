const citys = [
    {
        img: "imagens/ventosfortes.png",
        text:'Aprevisão para Uberlândia é\nVentos Fortes'
    },
    {
        img: "imagens/chuvaforte.png",
        text:'Aprevisão para São Paulo é\nChuva Forte'
    },
    {
        img: "imagens/neve.png",
        text:'Aprevisão para Curitiba é\nNeve'
    },
    {
        img: "imagens/ceulimpo.png",
        text:'Aprevisão para Rio de Janeiro é\nCéu limpo'
    },
    {
        img: "imagens/nublado.png",
        text:'Aprevisão para Caldas Novas é \nNublado'
    }
]


function trocacity (ev) {
    const { value } = ev.target
    cid = citys[value];
    const imagem = document.querySelector("#clima");
    imagem.src = cid.img;
    const text = document.querySelector("#text_clima");
    text.innerText = cid.text;
}



/*
function city02 () {
    const img = document.querySelector("#clima");
    img.src="";
}

function city03 () {
    const img = document.querySelector("#clima");
    img.src="";
}

function city04 () {
    const img = document.querySelector("#clima");
    img.src="";
}
*/
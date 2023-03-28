let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let mostrarFilme = document.querySelector("#mostrar-filme");
let card = document.querySelector("#lista-filmes");
let imgCartaz = document.createElement("img");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=abb0e8ac&s=" + inputBuscarFilme.value, {mode:"cors"})
        .then((resp) => resp.json())
        .then((resp) =>{
            resp.Search.forEach((item) =>{
                console.log(item);
                let filme = new Filme(
					item.imdbID,
					item.Title,
					item.Year,
					null,
					null,
					item.Poster,
					null,
					null,
					null,
					null,
					null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    return false;
}

let detalhesFilme = async (id) => {
    fetch("http://www.omdbapi.com/?apikey=ba316868&i="+id)
    .then((resp) => resp.json())
    .then((resp)=>{
        card.style.display="none";
        console.log(resp);
        
        mostrarFilme.innerHTML = 
        `Título: ${resp.Title}<br><br>
        Ano: ${resp.Year}<br><br>
        Gênero: ${resp.Genre}<br><br>
        Duração: ${resp.Runtime}<br><br>
        Sinopse: ${resp.Plot}<br><br>
        Diretor: ${resp.Director}<br><br>
        Atores: ${resp.Actors.split(",  ")}<br><br>
        Prêmios: ${resp.Awards}<br><br>
        Avalição geral: ${resp.imdbRating}<br><br>`;

        imgCartaz.setAttribute("id", "imagem-cartaz");
        imgCartaz.setAttribute("src", resp.Poster);
        mostrarFilme.appendChild(imgCartaz);

    });
}

let listarFilmes = async(filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";

    let btnFechar = document.createElement("button");
    btnFechar.setAttribute("id", "btn-fecha");
    let btnTexto = document.createTextNode("Fechar");
    btnFechar.appendChild(btnTexto);
    let divFechar = document.querySelector("#div-fechar");
    divFechar.appendChild(btnFechar);

    btnFechar.onclick = () => {
        mostrarFilme.style.display = "none";
        btnFechar.style.display = "none";
        card.style.display="flex";
    }

    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                mostrarFilme.style.display= "block";
                btnFechar.style.display= "block";
                detalhesFilme(filme.id);
                console.log(filme.id)
            }
        });
    }
}
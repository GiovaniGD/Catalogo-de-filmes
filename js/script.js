let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let listaFilmes = document.querySelector("#listar-filmes");
let card = document.querySelector("#mostrar-filme");
let navFavoritos = document.querySelector("#nav-favoritos");

btnBuscarFilme.onclick = () =>{
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=abb0e8ac&s="+inputBuscarFilme.value, {mode: "cors"})
        .then((resp) => resp.json())
        .then((resp) =>{
            resp.Search.forEach(item =>{
                console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    item.Type,
                    null,
                    null,
                    item.Poster,
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
    card.style.display = "none";
    return false;
}

let detalhesFilme = async (id) =>{
    fetch("http://www.omdbapi.com/?apikey=abb0e8ac&i="+id)
    .then((resp) => resp.json())
    .then((resp) =>{
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(",  "),
            resp.Runtime,
            resp.Plot,
            resp.Poster,
            resp.Director,
            resp.Actors.split(",  "),
            resp.Awards,
            resp.imdbRating
        )
        card.style.display = "flex";
        card.appendChild(filme.getDetalhesFilme());

        document.querySelector("#btn-fechar").onclick = () =>{
            document.querySelector("#listar-filmes").style.display = "flex";
            document.querySelector("#mostrar-filme").innerHTML = "";
            document.querySelector("#mostrar-filme").style.display = "none";
        }

        document.querySelector("#btn-salvar").onclick = () =>{
            //btnSalvar(filme);
        }

        document.querySelector("#listar-filmes").style.display = "none";
        document.querySelector("#mostrar-filme").style.display = "flex";
    });
}

let listarFilmes = async (filmes) =>{
    let listaFilmes = await document.querySelector("#listar-filmes");
    listaFilmes.style.display = "flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filme").innerhtml = "";
    if(filmes.length > 0){
        filmes.forEach(async(filme) =>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () =>{
                listaFilmes.style.display = "none";
                detalhesFilme(filme.id);
            }
        });
    }
}

        //let filmesString = localStorage.getItem("filmesFavoritos");
        //filmes = JSON.parse(filmesString);
        //filmes.push(filme);
        //filmes = JSON.stringify(filmes);
        //localStorage.setItem("filmesFavoritos", item);
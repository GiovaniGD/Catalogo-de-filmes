let inputBuscarFilme = document.querySelector("input-buscar-filme");
let btnBuscarFilme = document.querySelector("btn-buscar-filme");

btnBuscarFilme.onclick = async () => {
    if(inputBuscarFilme.ariaValueMax.lenght > 0){
        fetch("http://www.omdapi.com/?i=tt3896198&apikey=abb0e8ac"+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item)=>{
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

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes = innerHTML = "";
    console.log(listaFilmes);
    if(filmes.lenght > 0){
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(await filme.getCard());
        });
    }
}

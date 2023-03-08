let inputBuscarFilme = document.querySelector("input-buscar-filme");
let btnBuscarFilme = document.querySelector("btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.ariaValueMax.lenght > 0){
        console.log(inputBuscarFilme.value)
    }
    return false;
}

class Ator{
    constructor(id, nome){
        this.id=id;
        this.nome=nome;
    }
}
class Diretor{
    constructor(id, nome){
        this.id=id;
        this.nome=nome;
    }
}
class Filme{
    constructor(id, titulo, genero, ano, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.genero=genero;
        this.ano=ano;
        this.duracao=duracao;
        this.cartaz=cartaz;
        this.sinopse=sinopse;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
    }
    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let imgCartaz= document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        let hCardTitle=document.createElement("h5");
        hCardTitle.setaAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space—around;");
        divGenero.setAttribute("style","flex—grow:1;");
        let divAnoProducao= document.createElement("div");
        divAnoProducao.setAttribute("style","flex—grow:1;");
        let divClassificacao= document.createElement("div");
        divclassífícacao.setAttribute("style","flex—grow:1;");
        hCardTitle.appendChild(docunent.createTextNode(this.titulo));
        divGeneno.appendchild(docu-ent.createTextNode(this.genero));
        divAnoProducao.appendchild(doculent.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendchild(divGenero);
        divdetalhes.appendChild(divAnoProducao);
        divoetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        return card;
    }
}
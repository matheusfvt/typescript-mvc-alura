import { negociacoesDoDia } from "../interface/negociacoesDoDia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacoesService{

  public obterNegociacoesDoDia(): Promise<Array<Negociacao>>{
    return fetch('http://localhost:8080/dados').then(res => res.json()).then((dados: Array<negociacoesDoDia>) =>{
      return dados.map(dadoDeHoje => {
        return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
      })
    })
  }
}
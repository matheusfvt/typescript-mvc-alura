import { Negociacao } from "./Negociacao.js";

export class Negociacoes{
  
  private negociacoes: Negociacao[] = [];
  //ou Array<Negociacao>

  public adiciona(negociacao: Negociacao){
    this.negociacoes.push(negociacao);
  }

  public lista(): ReadonlyArray<Negociacao>{
    return [...this.negociacoes];
  }
  //ou readonly Negociacao[]
}
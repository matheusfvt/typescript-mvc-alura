import { domInjector } from "../decorator/domInjector.js";
import { inspecionar } from "../decorator/inspecionar.js";
import { logarTempoDeExecucao } from "../decorator/logarTempoDeExecucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { NegociacoesService } from "../service/negociacoesService.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  private negociacoesService = new NegociacoesService();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @inspecionar                        //caso o decorator não tenha parametros e foi programado sem o wrapper, não é preciso do () na hora de chamar
  @logarTempoDeExecucao(true)         //a ordem de execução dos decorators é de cima para baixo, mas primeiro ele precisa realizar todos os de baixo para finalizar o de cima
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociacoes em dias uteis sao validas!");
      return ;
    }
    this.negociacoes.adiciona(negociacao);
    console.log(`
    Data: ${negociacao.data}
    Quantidade: ${negociacao.quantidade}
    Valor: ${negociacao.valor}
    `);
    this.atualizaView();
    this.limpaFormulario();
  }

  importaDados():void{
    this.negociacoesService.obterNegociacoesDoDia().then(negociacoesDeHoje=>{
      return negociacoesDeHoje.filter(negociacaoDeHoje=>{
        return !this.negociacoes.lista().some(negociacao=>negociacao.ehIgual(negociacaoDeHoje))
      })
    })
    .then(negociacoesDeHoje => {
      for(let negociacao of negociacoesDeHoje){
        this.negociacoes.adiciona(negociacao)
      }
      this.negociacoesView.update(this.negociacoes);
    })
  }

  private ehDiaUtil(data: Date) {
    return data.getDay() != DiasDaSemana.DOMINGO && data.getDay() != DiasDaSemana.SABADO;
  }

  private limpaFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "1";
    this.inputValor.value = "0.0";

    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Sua negociacao foi adicionada!");
  }
}

export abstract class View<T>{
  //classe abstrata para ninguem poder fazer instancia de view,
  //ja que é uma classe incompleta e não faz sentido instancia-la, apenas ter filhas

  protected elemento: HTMLElement;



  constructor(seletor:string){       //toda vez que fizer uma instancia de uma filha de view tem a chance de escolher se quer ou nao a checagem do escapar (o ? no escapar eh o que torna opcional)
    const elemento = document.querySelector(seletor);
    if(elemento){                                       //checar se elemento é nulo
      this.elemento = elemento as HTMLElement;
    } else{
      throw new Error(`Seletor ${seletor} não existe no DOM!`);
      
    }
  }


  protected abstract template(model: T):string;
  //metodo abstratato para as filhas de View serem obrigadas a implementar
  //e protected para as filhas poderem usar este metodo como protected também e ninguém poder usar o método delas quando elas forem instanciadas
  //não precisa bloco de código pois as filhas que tem que fazer o próprio método

  //caso nao tenha identificador é public por padrao
  update(model: T):void{
    let template = this.template(model);
    this.elemento.innerHTML = template;
    
  }

}
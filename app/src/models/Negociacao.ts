export class Negociacao{

  //quando é passado public ou private no parametro do construtor ele cria a variavel automaticamente
  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number){}

  //ao inves dos construtores terem private, 
  //substitui por public readonly e n precisa mais dos get's

  // get quantidade(): number{
  //   return this._quantidade;
  // }

  // get valor(): number{
  //   return this._valor;
  // }
  
  //data ainda precisa de gets pois é uma instancia de uma classe
  //e podem chamar metodos dentro dela. como: setDate(12), e mudar o dia para dia 12 mesmo sendo readonly
  //Nesse get de data, ele  cria uma copia da data original atraves do getTime() e bota dentro de uma variavel
  //e como essa variavel so eh criada dentro do metodo get data(): Date, é impossivel modifica-la, e a variavel no construtor é privada
  //assim aplicando programacao defensiva
  get data(): Date{
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number{
    return this.quantidade * this.valor;
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const data = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(data, quantidade, valor);
  }

  public ehIgual(negociacao:Negociacao):boolean{
    return this.data.getDate() === negociacao.data.getDate()
    && this.data.getMonth() === negociacao.data.getMonth()
    && this.data.getFullYear() === negociacao.data.getFullYear();
     
  }
}
export function nomeDoDecorator(){      //esqueleto basico de um decorator
  return function(    //caso nao tenha precise de parametro pode tirar esse return e fzr direto a funcao
    target: any,                    //se é metodo estatico o target é o constructor, se colocar ele em um metodo de instancia ele é o propotype
    propertyKey: string,            //nome do metodo que o decorator pega
    descriptor: PropertyDescriptor  //o metodo em si (tem referencia no metodo)
  ){
    const metodoOriginal = descriptor.value;               //guarda o metodo original em uma variavel
    descriptor.value = function(...args: Array<any>){      //recebe todos os parametros em uma array, caso tenha mais de um (se nao tiver nenhum é uma array vazia)
      const retorno = metodoOriginal.apply(this, args);    //this a funcao em si e o args é o array de parametros
      return retorno;
    }
    return descriptor;
  }
}
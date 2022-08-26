export function logarTempoDeExecucao(emSegundos:boolean = false){
  return function(
    target: any,
    propertyKey: string,
    decorator: PropertyDescriptor
  ){

    const metodoOriginal = decorator.value;
    decorator.value = function(...args: Array<any>){
      let divisor = 1;
      let unidade = 'milisegundos';
      if(emSegundos){
        divisor = 1000;
        unidade = 'segundos';
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${((t2 - t1)/divisor).toFixed(5)} ${unidade}!`);
      retorno;
    };

    return decorator
  }

}

  export function inspecionar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>){
      const retorno = metodoOriginal.apply(this, args);
      console.log(`------INSPECIONAMENTO RODANDO------`);
      console.log(`--- Classe: ${this.constructor.name}`)
      console.log(`--- Método: ${propertyKey}`);
      console.log(`------ Paramêtros: ${JSON.stringify(args)}`);  
      console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
      console.log(`------INSPECIONAMENTO FINALIZADO------`);
      return retorno;
    }
    return descriptor;
  }

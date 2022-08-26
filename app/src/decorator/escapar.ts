export function escapar(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
){
  const metodoOriginal = descriptor.value;
  descriptor.value = function(...args: Array<any>){
    let retorno = metodoOriginal.apply(this, args);
    if(typeof retorno == 'string'){                                     //checa se o retorno do metodo que foi usado o decorator é uma string
      // console.log(`@escapar em ação na classe ${this.constructor.name}, no método ${propertyKey}`);     //this.constructor.name pega o nome da classe que esta sendo executada o decorator e PropertyKey o nome do método
      retorno = retorno.replace(/<script>[\s\S]*?<script>/, '');        //caso for uma string ele tira todas as tags <script></script> de dentro dela
    }
    return retorno;
  }
  return descriptor;
}
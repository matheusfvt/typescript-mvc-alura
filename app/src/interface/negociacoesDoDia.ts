export interface negociacoesDoDia{ //toda interface é pública e abstrata
  montante: number,                //ou seja nao pode ser instanciada e pode ser chamada por qualquer um.
  vezes:number,                    //para uma classe herdar os compartamentos de uma interface, se usa implements
}
/*
é possivel criar uma interface com todas as interfaces do projeto juntas
basta criar uma unica sem nada dentro apenas dando extends em todas as outras
*/

/*
também é possível criar uma interface para que outras classes implementem e 
sejam obrigadas as declarar determinados metodos
 */
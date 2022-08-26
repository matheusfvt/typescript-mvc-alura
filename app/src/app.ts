import { NegociacaoController } from "./controllers/NegociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if(form){
  form.addEventListener('submit', event => {
  event.preventDefault();
  controller.adiciona();
});
} else{
  throw new Error("Não foi possível iniciar a aplicação. Cheque se o ID do form está errado!");
}
const botaoImporta = document.querySelector('#importaBotao');
if(botaoImporta){
  botaoImporta.addEventListener('click', event =>{
    event.preventDefault();
    controller.importaDados();
  })
} else{
  throw new Error("Botão importa não foi encontrado");
}


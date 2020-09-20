import { Component } from '@angular/core';
import { Tarefa } from '../models/Tarefa';

@Component({
  selector: 'app-gerenciador-tarefa',
  templateUrl: './gerenciador-tarefa.component.html'
  
})

export class GerenciadorTarefaComponent {
  descricao=null;
  abertas=[];
  concluidas=[];
  editarTarefa: Tarefa = null;
  
  salvar(){
    if(this.editarTarefa){
      this.editarTarefa.descricao=this.descricao;
    }
    else{
      const d = new  Tarefa(this.descricao);
      this.abertas.push(d);
    }
    this.editarTarefa=null;
    this.descricao=null;
    
  }
  
  concluir(todo:  Tarefa){
    let indice = this.abertas.indexOf(todo);
    this.abertas.splice(indice,1);
    this.concluidas.push(todo);
  }
  
  excluir(todo:  Tarefa){
    const a = this.abertas.indexOf(todo);
    this.abertas.splice(a,1);
  }

  excluirConcluidas(todo:  Tarefa){
    const c = this.concluidas.indexOf(todo);
    this.concluidas.splice(c,1);
  }

  cancelar(): void{
    this.editarTarefa=null;
    this.descricao=null;
  }

  editar(todo: Tarefa){
    this.editarTarefa=todo;
    this.descricao=todo.descricao;
  }
}
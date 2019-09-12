import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor() {}

  ngOnInit() {}
  teste12 = false
  private inspecaoInterna = [{objeto: "Manche", acao: "Destravado", checado: false, abrir: false},
                            {objeto: "Freio de estacionamento", acao: "Aplicado", checado: false, abrir: false},
                            {objeto: "Interruptores", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Magnetos", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Equipamentos Eletrônicos", acao: "OFF", checado: false},
                            {objeto: "Mistura", acao: "Cortada", checado: false, abrir: false},
                            {objeto: "Master", acao: "ON", checado: false, abrir: false},
                            {objeto: "Liquidômetro", acao: "Verificar Quantidade", checado: false, abrir: false},
                            {objeto: "Trem de Pouso", acao: "Verificar lights", checado: false, abrir: false},
                            {objeto: "Master", acao: "OFF", checado: false, abrir: false},
                            {objeto: "Cowl Flap", acao: "Abertos", checado: false, abrir: false},
                            {objeto: "Comandos de Voo", acao: "Verificar Operação", checado: false, abrir: false},
                            {objeto: "Flap", acao: "Verificar Operação e recolher", checado: false, abrir: false},
                            {objeto: "Compensadores", acao: "Verificar operação e neutro", checado: false, abrir: false},
                            {objeto: "Sistema Pito Estático", acao: "Drenar", checado: false, abrir: false},
                            {objeto: "Cintos", acao: "Verificar condições e travamento", checado: false, abrir: false},
                            {objeto: "Janelas", acao: "Verificar limpeza", checado: false, abrir: false},
                            {objeto: "Documentos", acao: "Verificar à bordo", checado: false, abrir: false}]
  private teste = []
  private teste5 = []
  private teste4 = []
  private teste3 = []
  private teste2 = []
  private teste1 = []

  checar(check: boolean){
    if(check == true){
      return check = false
    }else{
      return check = true
    }
  }

}
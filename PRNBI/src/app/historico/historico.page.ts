import { Component, OnInit } from '@angular/core';

import { calculos } from '../models/calculo';
import { Platform, AlertController } from '@ionic/angular';
import { CalculoService } from '../service/calculo.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage {

  teste = "Nenhum Dado Registrado"
  calculos: calculos[]
  msg: any
  constructor(private calculoService: CalculoService,
              private plt: Platform,
              private alertController: AlertController) { }

  ionViewWillEnter() {
    this.plt.ready().then(()=>{
      this.listar()
    })
  }

  async ListaVazia(){

  }
  listar(){
    this.calculoService.getAll().then(clcls =>{
      this.calculos = clcls
      if(this.calculos.length !== 0){
        console.log("Cheguei")
        document.getElementById("noRegistro").style.display = "none";
      }else{
        console.log("Fui expulos do if")
        document.getElementById("noRegistro").style.display = "block";
      }
    })
  }
  
  deletar(calculo: calculos){
    console.log(calculo)
    this.calculoService.delete(calculo.id).then(clcls => {
      setTimeout(()=> this.listar(),100)
    })
  }

  async presentAlert(calculo: calculos) {
    const alert = await this.alertController.create({
      header: 'Apagar',
      message: 'Tem certeza que deseja apagar esse registro?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.deletar(calculo)
          }
        },
        {
          text: 'Não',
          handler: () => {
            
          }
      }]
    });
    await alert.present();
  }
 

  dataHoje(){
    let data = new Date()
    let dia
    if((data.getDate()) >= 10){
      dia = data.getDate()
    }else{
      dia = `0${data.getDate()}`
    }
    let mes
    if((data.getMonth()+1) >= 10){
      mes = data.getMonth()+1
      console.log(mes)
    }else{
      mes = `0${data.getMonth()+1}`
      console.log(mes)
    }
    let ano = data.getFullYear()
    let segundos = data.getSeconds()
    return [dia, mes, ano].join("/")
  }
  hoje = this.dataHoje()
  
}
import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-secao1',
  templateUrl: './secao1.page.html',
  styleUrls: ['./secao1.page.scss'],
})
export class Secao1Page implements OnInit {

  constructor(private menu: MenuController,
              private modalController: ModalController) { }

  ngOnInit() {
  }

  dimensoes = ["Comprimento", "Altura", "Envergadura"]
  comprimentos = ["8,70m", "3,00m", "11,85m"]
  
  fecharMdl(){
    this.modalController.dismiss()
  }
}

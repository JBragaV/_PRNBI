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

  fecharMdl(){
    this.modalController.dismiss()
  }
}

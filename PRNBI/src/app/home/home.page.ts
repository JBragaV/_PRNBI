import { Component } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Secao1Page } from '../secoes/secao1/secao1.page';
import { Secao2Page } from '../secoes/secao2/secao2.page';
import { Secao3Page } from '../secoes/secao3/secao3.page';
import { Secao4Page } from '../secoes/secao4/secao4.page';
import { myEnterAnimation } from '../animacao/enter';
import { myLeaveAnimation } from '../animacao/leave';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController,
              private loadingController: LoadingController
              ) {}

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async mdlSc1(){
    //this.presentLoadingWithOptions()
    const modal = await this.modalController.create({
      component: Secao1Page,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation
    });
    return modal.present();
  }
  async mdlSc2(){
    const modal = await this.modalController.create({
      component: Secao2Page,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation
    });
    return modal.present();
  }
  async mdlSc3(){
    const modal = await this.modalController.create({
      component: Secao3Page,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation
    });
    return modal.present();
  }
  async mdlSc4(){
    const modal = await this.modalController.create({
      component: Secao4Page,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation
    });
    return modal.present();
  }
}

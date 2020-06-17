import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModelsService } from '../models.service';
import { Model } from '../model.model';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.page.html',
  styleUrls: ['./model-detail.page.scss'],
})
export class ModelDetailPage implements OnInit {
  model: Model
  constructor(private activatedroute: ActivatedRoute, private modelsservice: ModelsService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.model = this.modelsservice.getmodel(paramMap.get('modelId'))
      console.log(this.model);

    })
  }

  async deletem() {
    const alertElement = await this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Desea eliminar el modelo?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Eliminar',
        handler: () =>{
          this.modelsservice.deletemodel(this.model.id)
          this.router.navigate(['/models'])      
        }
      }
      ]
    })
    await alertElement.present()
  }

}

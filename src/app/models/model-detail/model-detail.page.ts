import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ModelsService } from '../models.service';
import { Model } from '../model.model';
@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.page.html',
  styleUrls: ['./model-detail.page.scss'],
})
export class ModelDetailPage implements OnInit {
 model:Model
  constructor(private activatedroute: ActivatedRoute,private modelsservice:ModelsService) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(paramMap=>{
      this.model = this.modelsservice.getmodel(paramMap.get('modelId'))
      console.log(this.model);
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ModelsService } from "./models.service";
@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage implements OnInit {
  models = []

  constructor(private modelservice: ModelsService) { }



  ngOnInit() {
    this.models = this.modelservice.getmodels();
  }

}

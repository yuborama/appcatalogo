import { Component, OnInit } from '@angular/core';
import { ModelsService } from "./models.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage implements OnInit {
  models = []

  constructor(private modelservice: ModelsService,private router:Router) { }



  ngOnInit() {
    this.models = this.modelservice.getmodels();
  }
  ionViewWillEnter(){
    this.models = this.modelservice.getmodels();
  }

  newmodel(){
    this.router.navigate(['/new-model'])
  }
}

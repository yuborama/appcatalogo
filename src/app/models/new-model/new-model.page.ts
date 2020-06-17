import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-model',
  templateUrl: './new-model.page.html',
  styleUrls: ['./new-model.page.scss'],
})
export class NewModelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
addg(material,valor){
 const mate = document.querySelector("#lgastos")
 console.log(material.value,valor.value);
 const ioncard= document.createElement('ion-card')
 const newmitem= document.createElement('ion-card-content')
 newmitem.textContent= material.value+'$:'+valor.value
 ioncard.appendChild(newmitem)
 mate.appendChild(ioncard)
 this.clear(material,valor)
}

clear(c1,c2){
  c1.value=''
  c2.value=''
}
}

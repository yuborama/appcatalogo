import { Injectable } from '@angular/core';
import { Model } from "./model.model";
@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  private models: Model[] =
    [
      {
        id: '1',
        nombre: 'chaqueta',
        imageURL: 'https://www.pamotos.com/8554-large_default/chaqueta-sm-racewear-riga-.jpg',
        materials: ['hilo', 'neopreno']
      },
      {
        id: '2',
        nombre: 'otra chaqueta',
        imageURL: 'https://bycity.es/wp-content/uploads/2017/07/Spring_Man_0002__DSC2455.jpg',
        materials: ['hilo', 'neopreno']
      }
    ]

  getmodels() {
    return [...this.models]
  }

  getmodel(modelId: string) {
    return {
      ...this.models.find(model => {
        return model.id === modelId
      })
    }
  }

  addmodel(nombre: string, imageURL: string) {
    this.models.push({
      nombre,
      imageURL,
      id: this.models.length + 1 + "",
      materials: []
    })

  }
  deletemodel(modelId: string) {
    this.models = this.models.filter(model => {
      return model.id !== modelId
    }
    )
  }
  constructor() { }
}

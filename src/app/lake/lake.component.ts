import { Component } from '@angular/core';
import {LakeAnimalService} from "../lake-animal.service";

@Component({
  selector: 'app-lake',
  templateUrl: './lake.component.html',
  styleUrls: ['./lake.component.css']
})
export class LakeComponent {

  constructor(public lakeService : LakeAnimalService ) {
  }



 // animalArray : Array<string>  = [ "🐥", "🦑", "🐑", "🦛", "🐕", "🐢", "🐈", "🐳", "🐪", "🐋", "🐿", "🐡"];

  animalArray : Array<{ name:string,emoji:string }>  = [ ];


  addAnimal() {
    // this.animalArray.push({name:"Duck",emoji:"🦆"});
    this.animalArray.push(this.lakeService.getRandomAnimal());
  }

  removeAnimal() {
    if(this.animalArray.length >0){
      // @ts-ignore
      this.lakeService.animalArray.push(this.animalArray.pop());
    }
  }
}

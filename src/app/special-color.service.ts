import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialColorService {

  constructor() { }

  getSpecialColor() : string{
    return "blue";
  }
}

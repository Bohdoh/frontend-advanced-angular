import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LakeAnimalService {

  animalArray: { name: string, emoji: string }[] = [
    {name: "Elephant", emoji: "🐘"},
    {name: "Kangaroo", emoji: "🦘"},
    {name: "Gorilla", emoji: "🦍"},
    {name: "Octopus", emoji: "🐙"},
    {name: "Koala", emoji: "🐨"},
    {name: "Panda", emoji: "🐼"},
    {name: "Lion", emoji: "🦁"},
    {name: "Giraffe", emoji: "🦒"},
    {name: "Dolphin", emoji: "🐬"},
    {name: "Hedgehog", emoji: "🦔"},
    {name: "Chick", emoji: "🐥"},
    {name: "Squid", emoji: "🦑"},
    {name: "Sheep", emoji: "🐑"},
    {name: "Hippo", emoji: "🦛"},
    {name: "Dog", emoji: "🐕"},
    {name: "Tortoise", emoji: "🐢"},
    {name: "Cat", emoji: "🐈"},
    {name: "Whale", emoji: "🐳"},
    {name: "Camel", emoji: "🐪"},
    {name: "Shark", emoji: "🐋"},
    {name: "Squirrel", emoji: "🐿"},
    {name: "Pufferfish", emoji: "🐡"}
  ];

  constructor() {
  }

  getRandomAnimal(): { name: string, emoji: string } {
    let animalToRemove = this.animalArray[Math.floor(Math.random() * this.animalArray.length)];
    const tempArray = this.animalArray.filter(animal => animal.name !== animalToRemove.name);
    this.animalArray = tempArray;
    return animalToRemove;
  }
}

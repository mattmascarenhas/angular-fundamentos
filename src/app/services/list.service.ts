import { Injectable } from '@angular/core';
import { IAnimals } from '../utils/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(animals: IAnimals[], animal: IAnimals) {
    return animals.filter((a) => a.name !== animal.name);
  }
}

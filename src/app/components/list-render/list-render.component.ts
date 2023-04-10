import { Component } from '@angular/core';
import { IAnimals } from '../../utils/Interfaces';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  // [(Weapon ATK+Base ATK) x (8 + SP/10) + 250 + (150*SkillLV)]
  asura: number = (110 + 452) * (8 + 1377 / 10) + 250 + 150 * 10;

  animals: IAnimals[] = [
    { name: 'Bela', type: 'dog', age: 7.5 },
    { name: 'Tinça', type: 'Cat', age: 3.5 },
    { name: 'Loiro', type: 'Cat', age: 7.5 },
    { name: 'Bob', type: 'Dog' },
  ];

  constructor(private listService: ListService) {}

  showAge(animal: IAnimals): void {
    if (!animal.animalDetails) {
      if (!animal.age) {
        animal.animalDetails = `Não sabemos a idade desse pet! `;
      } else {
        animal.animalDetails = `${animal.name} tem ${animal.age} anos!`;
      }
    } else {
      animal.animalDetails = '';
    }
  }

  removeAnimal(animal: IAnimals) {
    console.log('remover animal');
    this.animals = this.listService.remove(this.animals, animal);
  }
}

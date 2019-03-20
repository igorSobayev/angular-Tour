import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // array con los heroes
  heroes = HEROES;
  // heroe vacio por defecto pero que se va a llenar cuando sea seleccionado uno
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // método de asignación de un heroe
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

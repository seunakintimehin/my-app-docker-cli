import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  styleUrls: ['./app.component.css'],
  template: `
  	<h2>My Heroes</h2>
  	<ul class = "heroes">
  		<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero == selectedHero">
  			<span class="badge">{{hero.id}}</span> {{hero.name}}
  		</li>
  	</ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  	`
})


export class HeroesComponent implements OnInit{
  selectedHero: Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService){
  }

  ngOnInit(): void {
    
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

	constructor(private heroService: HeroService,
							private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

	gotoDetail(id: number): void {
		let link = ['/detail', this.selectedHero.id];
		this.router.navigate(link);
	}

}

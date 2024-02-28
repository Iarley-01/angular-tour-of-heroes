import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { MessageService } from '../message.service';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterOutlet, HeroDetailComponent, HeroSearchComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) {
    
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Heroes Component: selected hero id=${hero.id}`)
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return ;
    }
    
    this.heroService.addHero({ name } as Hero).subscribe(hero => this.heroes.push(hero));
  }
  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    
    this.heroService.deleteHero(hero.id).subscribe();
  }
}

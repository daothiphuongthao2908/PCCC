import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  products : Product[];
  constructor(private _hero: HeroService) { }

  ngOnInit() {
  this._hero.getHeroes()
      .subscribe(p => this.products = p);
}
  }



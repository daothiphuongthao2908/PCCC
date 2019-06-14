import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
 
  constructor(private _hero: HeroService) { }

  products : Product[];
  ngOnInit() {
    this._hero.getHeroes()
    .subscribe(p => this.products = p);
  }

}

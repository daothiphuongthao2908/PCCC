import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

   products:Product[];
   listSearchProduct : Product[];
   
  constructor(private _hero : HeroService) { }


  _search: string;
  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    this.listSearchProduct = this.search ? this.products.filter(p => p.ten.toLowerCase().includes(this.search) == true) : [];
  }
  
  ngOnInit() {
    this._hero.getHeroes()
    .subscribe(p => this.products = p);

  }
  }

  
  //  SeggestSearch($this){
  //   var setext = document.getElementById($this).value;
  //   if(setext!=""){
      
  //   }
  //   else{


    // console.log($this);
  


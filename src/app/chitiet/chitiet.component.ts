import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  


  Sanpham=this._hero.products[1];
  constructor( private _hero : HeroService , 
    private _route:ActivatedRoute
  ) {
    const id =+ this._route.snapshot.paramMap.get("id")
    this.Sanpham=this._hero.products.find(c=>c.id===id);
   }
  
  ngOnInit() {
  }

}

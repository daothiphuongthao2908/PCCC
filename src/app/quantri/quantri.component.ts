import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quantri',
  templateUrl: './quantri.component.html',
  styleUrls: ['./quantri.component.css']
})
export class QuantriComponent implements OnInit {

  constructor(private _hero: HeroService) { }
  
  products : Product[];
  filtercontact = [];
  selectedProductadmin: Subject<any> = new Subject;
  selectededit: Subject<any> = new Subject;

  //Ẩn Hiện Form
  showform = false;
  them() {
    this.showform = true;
  }
  huythem() {
    this.showform = false;
  }

  getpopup(det) {
    this.selectedProductadmin.next(det);
  }

  edit(det1) {
    this.selectededit.next(det1);
  }

  //xóa
  delete(id:number) {
    const index = this.products.findIndex(p => p.id === id );
    this.products.splice(index,1);
  }

  //thêm
  product_id : number;
  product_ten : string;
  product_img : string;
  product_mota : string;

  add() {
    this.product_id = this._hero.products.length + 1;
    this._hero.products.push({
      id : this.product_id,
      ten : this.product_ten,
      img : this.product_img,
      mota : this.product_mota,
    })
  };


  ngOnInit() {
    this._hero.getHeroes()
    .subscribe(p => this.products = p);
  }

}

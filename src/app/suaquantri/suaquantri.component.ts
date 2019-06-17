import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';



declare var $ : any;
@Component({
  selector: 'app-suaquantri',
  templateUrl: './suaquantri.component.html',
  styleUrls: ['./suaquantri.component.css']
})
export class SuaquantriComponent implements OnInit {

  @Input() list1: Subject<any>;
  fulldetailsadmin: any[];
  @Input() fulledit: Product;

    edit_id : number;
    edit_ten : string;
    edit_mota : string;
    edit_img : string;

  //save edit
  save() {
    this._heroService.products.lastIndexOf({
      id : this.edit_id,
      ten : this.edit_ten,
      mota : this.edit_mota,
      img : this.edit_img
    })
  }

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.list1.subscribe(
      det1 => {
        this.fulledit = det1;
        $("#bd-example-modal-lg").modal('show');
      },
      error => {
        console.log(error);
      }

    )
  }


}

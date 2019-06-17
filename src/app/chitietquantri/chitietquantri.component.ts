import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Subject } from 'rxjs';

declare var $ : any;

@Component({
  selector: 'app-chitietquantri',
  templateUrl: './chitietquantri.component.html',
  styleUrls: ['./chitietquantri.component.css']
})
export class ChitietquantriComponent implements OnInit {

  @Input() list: Subject<any>;
  @Input() list1: Subject<any>;

  fulldetailsadmin: any[];
  fulledit : any[];
  products : Product[];

  constructor() { }

  ngOnInit() {
    this.list.subscribe(
      det => {
        this.fulldetailsadmin = det;
        $("#exampleModaldetail").modal('show');
      },
      error => {
        console.log(error);
      }

    )


  }

}

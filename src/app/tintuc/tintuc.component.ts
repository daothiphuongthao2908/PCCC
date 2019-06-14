import { Component, OnInit } from '@angular/core';
import { Tintuc } from '../Tintuc';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {

  constructor(private _hero : HeroService , private router: Router) { }

  Tintucs :Tintuc[];
  filtercontact = [];
  
  page = [];
  pitem = 3;
  cpage = 1;
  creatPage() {
    this.page = [];
    let n = this.filtercontact.length % this.pitem != 0 ? this.filtercontact.length / this.pitem + 1 : this.Tintucs.length / this.pitem
    for (let i = 1; i <= n; i++) {
      this.page.push(i);
    }
  }
  setPage(p: number) {
    this.cpage = p;
  }

  ngOnInit() {
    this._hero.getHeroestintuc()
    .subscribe(p => this.Tintucs = p);
    this.filtercontact = this.Tintucs;
    this.creatPage();
  }

}

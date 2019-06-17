import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {TrangchuComponent} from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { Thietbi1Component } from './thietbi1/thietbi1.component';
import { HeroesComponent } from './heroes/heroes.component';
import { QuantriComponent } from './quantri/quantri.component';

const routes: Routes = [
  { path: '', redirectTo: '/trangchu', pathMatch: 'full' },

  {path:'trangchu', component: TrangchuComponent},
  {path:'gioithieu', component: GioithieuComponent},
  {path:'sanpham', component: SanphamComponent},
  {path:'tintuc', component: TintucComponent},
  {path:'lienhe', component: LienheComponent},
  // {path:'chitiet', component: ChitietComponent},
  {path:'chitiet/:id', component: ChitietComponent},
  {path:'thietbi1', component: Thietbi1Component},
  {path:'admin', component: HeroesComponent},
  {path:'quantri', component: QuantriComponent},

];

@NgModule({
  imports:
   [CommonModule,
     RouterModule.forRoot(routes)],
declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { DanhmucsanphamComponent } from './danhmucsanpham/danhmucsanpham.component';
import { Thietbi1Component } from './thietbi1/thietbi1.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    SanphamComponent,
    TintucComponent,
    DanhmucsanphamComponent,
    Thietbi1Component,
    LienheComponent,
    ChitietComponent,
    HeroesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

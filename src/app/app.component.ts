import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pccc';

  a=[{
    id:1,
    img:"../assets/PCCC/cuon vong/voi1.png",
    ten:"Cuộn vòng",
    mota:"This card has supporting text below as a natural lead-in to additional content."

  },
  {
    id:2,
    img:"../assets/PCCC/cuon vong/VÒI VJ65.png",
    ten:"Cuộn Vòng VJ165",
    mota:"dkhdufdunjhfehđjkjdkwhdiwuywjhdxjsxnjmznxmzbnxmcbcjdhfụhd"  },
  {
    id:3,
    img:"../assets/PCCC/hệ thong bao cháy/Báo cháy Esser/a2.png",
    ten:" Hê thống báo cháy",
    mota:"Điện áp làm việc: 24VDC Dòng điện khi báo động: 0.025mA Cường độ âm: 100dB/m",
  },
  {
    id:4,
    img:"../assets/PCCC/hệ thong bao cháy/Báo cháy Esser/a5.png",
    ten:"Trung tâm báo cháy",
    mota:"Điện áp hoạt động: 220V AC/50Hz Phạm vi điện áp: ±20% "
    
    
  },
  ];

  searchID = this.a;

  _search: string;
  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    this.searchID = this.search ? this.a.filter(p => p.ten.toLowerCase().includes(this.search) == true) : [];
  }

}




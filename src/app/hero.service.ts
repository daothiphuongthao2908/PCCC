import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { Tintuc } from './Tintuc';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
     
   }
  
   
   products:Product[]=[{ 
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

  tintuc : Tintuc[]=[{
      id:1,
      img:"../assets/tintuc.jpg",
      tenbaibao:"Cháy nhà xưởng ở Bình Dương, khói bốc cao kèm theo tiếng nổ",
      chitiet: "13h30 hôm nay, 22.5, hỏa hoạn xảy ra ở một nhà xưởng nằm sát quốc lộ 13, đoạn qua thị xã Thuận An, tỉnh Bình Dương. Cảnh sát PCCC tỉnh Bình Dương đang điều động nhiều phương tiện cùng hàng chục chiến sĩ đến dập lửa. ",
      src : "https://laodong.vn/xa-hoi/chay-nha-xuong-o-binh-duong-khoi-boc-cao-kem-tieng-no-lon-734855.ldo"
  },
  {
    id:2,
    img:"../assets/tintuc1.png",
    tenbaibao:" Dân hoảng sợ bỏ chạy tán loạn vì đường dây cáp viễn thông cháy, phát nổ dữ dội ở Sài Gòn",
    chitiet: "Người dân sinh sống trên đường Hương Lộ 2, phường Bình Trị Đông, quận Bình Tân, TPHCM phát hiện đường dây cáp viễn thông cháy rồi phát nổ dữ dội nên hoảng loạn bỏ chạy. ",
    src : "http://kenh14.vn/dan-hoang-so-bo-chay-tan-loan-vi-duong-day-cap-vien-thong-chay-phat-no-du-doi-o-sai-gon-20190520190835475.chn"
},
{
  id:3,
  img:"../assets/tintuc1.png",
  tenbaibao:"3 Dân hoảng sợ bỏ chạy tán loạn vì đường dây cáp viễn thông cháy, phát nổ dữ dội ở Sài Gòn",
  chitiet: "Người dân sinh sống trên đường Hương Lộ 2, phường Bình Trị Đông, quận Bình Tân, TPHCM phát hiện đường dây cáp viễn thông cháy rồi phát nổ dữ dội nên hoảng loạn bỏ chạy. ",
  src : "http://kenh14.vn/dan-hoang-so-bo-chay-tan-loan-vi-duong-day-cap-vien-thong-chay-phat-no-du-doi-o-sai-gon-20190520190835475.chn"
},
{
  id:4,
  img:"../assets/tintuc1.png",
  tenbaibao:"4 Dân hoảng sợ bỏ chạy tán loạn vì đường dây cáp viễn thông cháy, phát nổ dữ dội ở Sài Gòn",
  chitiet: "Người dân sinh sống trên đường Hương Lộ 2, phường Bình Trị Đông, quận Bình Tân, TPHCM phát hiện đường dây cáp viễn thông cháy rồi phát nổ dữ dội nên hoảng loạn bỏ chạy. ",
  src : "http://kenh14.vn/dan-hoang-so-bo-chay-tan-loan-vi-duong-day-cap-vien-thong-chay-phat-no-du-doi-o-sai-gon-20190520190835475.chn"
},
{
  id:5,
  img:"../assets/tintuc1.png",
  tenbaibao:"5 Dân hoảng sợ bỏ chạy tán loạn vì đường dây cáp viễn thông cháy, phát nổ dữ dội ở Sài Gòn",
  chitiet: "Người dân sinh sống trên đường Hương Lộ 2, phường Bình Trị Đông, quận Bình Tân, TPHCM phát hiện đường dây cáp viễn thông cháy rồi phát nổ dữ dội nên hoảng loạn bỏ chạy. ",
  src : "http://kenh14.vn/dan-hoang-so-bo-chay-tan-loan-vi-duong-day-cap-vien-thong-chay-phat-no-du-doi-o-sai-gon-20190520190835475.chn"
},
]
     

  getHeroes(): Observable<Product[]> {
    return of (this.products);
  }

  getHeroestintuc(): Observable<Tintuc[]> {
    return of (this.tintuc);
  }
}

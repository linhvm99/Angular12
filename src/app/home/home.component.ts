import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public districts: string[] = [];
  public vietnam = [
    { city: 'Chọn tỉnh thành', district: [] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];

  public counter = 0;
  public counterSquare = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.counterSquare = this.common.square(this.counter);
    this.common.setCounter(this.common.getCounter() + 1);
  }

  public changeCity(event: any) {
    const city = event.target.value;
    console.log('Event: ', city);

    if(!city){
      return;
    }
    // Cách 1
    // const search = this.vietnam.filter(data => data.city === city);
    // console.log('Search: ', search);
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }

    // Cách 2
    // this.districts = this.vietnam.find(data => data.city == city)?.district || [];
  
  
  
    this.districts = this.vietnam.find(data => data.city === city)?.district || [];
  }
}

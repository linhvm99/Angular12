import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private httpServerServices: HttpServerService) { }

  ngOnInit(): void {
    this.httpServerServices.getComments().subscribe(data => {
      console.log('Data: ', data);
    });

    this.httpServerServices.getRandomUsers(5).subscribe(data => {
      console.log('Users data: ', data)
    })
  }

  ngOnchange(): void {

  }

}

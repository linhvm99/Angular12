import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../services/http-server.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent implements OnInit {

  constructor(private httpServerService: HttpServerService) { }

  ngOnInit(): void {
    this.httpServerService.deleteComments(4).subscribe(data => {
      console.log('Delete Data: ', data);
    })
  }

}

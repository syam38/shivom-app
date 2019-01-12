import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private data: any;
  constructor(private service:AppService) { }

  ngOnInit() {
    this.service.getData().subscribe((res)=>{
      this.data = res;
    })
  }

}

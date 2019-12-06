import { HarunService } from './../service/harun.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harun',
  templateUrl: './harun.component.html',
  styleUrls: ['./harun.component.css']
})
export class HarunComponent implements OnInit {

  products=[];

  constructor(private harunService: HarunService) { }

  ngOnInit() {
    this.viewHarun();
  }

  viewHarun(){
    this.harunService.getHarun().subscribe((res: any)=>{
      this.products=res;
      
    })
  }

}

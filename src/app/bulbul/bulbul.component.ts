import { BulbulService } from './../service/bulbul.service';
import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-bulbul',
  templateUrl: './bulbul.component.html',
  styleUrls: ['./bulbul.component.css']
})
export class BulbulComponent implements OnInit {

  name;
  email;
  address;
  bulbuls = [];

  viewName;
  viewEmail;
  viewAddress;
  constructor(private bulbulService: BulbulService) { }

  ngOnInit() {
    this.viewBulbul();
  }

  viewBulbul(){
    this.bulbulService.getBulbul().subscribe((res: any) => {
      this.bulbuls = res;
      console.log(this.bulbuls);
    })
  }


  saveBulbul(){
    let data = {
      Name: this.name,
      Email: this.email,
      Address: this.address
    }
    this.bulbulService.postBulbul(data).subscribe( (res) =>{
      if(res==1 ){
        alert('success');
        this.viewBulbul();
        this.bulbuls;
      }
    });
  }


  viewUser(userId){
    this.bulbuls.forEach((user)=>{
      if(user.Id == userId){
          this.viewName = user.Name;
          this.viewEmail = user.Email;
          this.viewAddress = user.Address;
      }
    })
  }

}

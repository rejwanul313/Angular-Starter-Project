import { User } from '../model/user';
import { SaykatService } from './../service/saykat.service';
import { BulbulService } from './../service/bulbul.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saykat',
  templateUrl: './saykat.component.html',
  styleUrls: ['./saykat.component.css']
})
export class SaykatComponent implements OnInit {
  // id ='';
  // name = '';
  // email = '';
  // address = '';
  // saykat = [];
  saykat = new User();
  users: User[] = [];
  
  constructor(
    // private bulbulService: BulbulService
    private saykatService: SaykatService
    ) { }

  ngOnInit() {
    // this.viewSaykat();
    this.displaySaykat();
  }

  // viewSaykat(){
  //   this.bulbulService.getBulbul().subscribe((res: any) =>{
  //     this.saykat = res;
  //   });
  // }

  displaySaykat(){
    this.saykatService.getSaykat().subscribe((res: any) =>{
      this.users = res;
      console.log(this.users);
    })
  }

  saveSaykat(){
    if( this.saykat.Name != ''){
      
      this.saykatService.postSaykat(this.saykat).subscribe((res)=>{
        if(res == 1){
          alert('success');
          this.displaySaykat();
          this.saykat = new User();
        }
      })
    }else{
      alert('Warning, Please fill all required fields')
    }
  }

  updateUser(){
    if(this.saykat.Name != ''){
      // let info = {
      //   Id : this.id,
      //   Name: this.name,
      //   Email: this.email,
      //   Address: this.address
      // }
      // this.saykatService.updateUser(info).subscribe((res)=>{
      //     alert('successfully updated');
      //     this.displaySaykat();
      //     this.id = '';
      //     this.name = '';
      //     this.email = '';
      //     this.address = '';
      // })
    }else{
      alert('Warning, Please fill all required fields')
    }
  }
  removeUser(id){
      this.saykatService.deleteUser(id).subscribe((res)=>{
          alert('successfully delete');
          this.displaySaykat();
      })
    
  }



  selectedView(Id){
    // this.saykat.forEach((user) =>{
    //   if(user.Id == Id){
    //     this.name = user.Name;
    //     this.email = user.Email;
    //     this.address = user.Address;
    //     this.id = user.Id;
    //   }
    // })
  }
  updateData(){
    
    
  }
}

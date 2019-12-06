import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaykatService {

  constructor(private http: HttpClient) { }

  getSaykat(){
    return this.http.get('http://localhost/testapi/api/user');
  }
  postSaykat(data){
    return this.http.post('http://coderuni.com/apitest/api/user', data);
  }

  
  updateUser(data){
    return this.http.put('http://coderuni.com/apitest/api/user', data);
  }

  deleteUser(id){
    return this.http.delete('http://coderuni.com/apitest/api/user/' + id);
  }
}

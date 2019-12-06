import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarunService {

  constructor(private http: HttpClient) { }

  getHarun(){
    return this.http.get('http://coderuni.com/apitest/api/product');
  }

  postHarun(data){
    return this.http.post('http://coderuni.com/apitest/api/product', data);
  }

  updateHarun(data){
    return this.http.put('http://coderuni.com/apitest/api/product', data);
  }

  deleteHarun(id){
    return this.http.delete('http://coderuni.com/apitest/api/product' +id);
  }

}

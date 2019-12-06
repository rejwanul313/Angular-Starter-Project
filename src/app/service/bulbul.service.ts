import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulbulService {

  constructor(private http: HttpClient) { }

  getBulbul() {
    // return this.http.get('http://coderuni.com/apitest/api/user');
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.get('./assets/mydata.json');
  }

  postBulbul(data){
    // return this.http.post('https://jsonplaceholder.typicode.com/users', data);
    // return this.http.post('http://coderuni.com/apitest/api/user', data);
    return this.http.post('./assets/mydata.json', data);
  }
}

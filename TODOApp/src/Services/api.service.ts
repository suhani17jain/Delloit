import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get(`${this.url}/todos`)
  }

  getTodoItem(id) {
    return this.http.get(`${this.url}/todos/${id}`)
  }

  addTododItem(item) {
    return this.http.post(`${this.url}/todos`, item)
  }

  updateTododItem(item, id) {
    return this.http.put(`${this.url}/todos/${id}`, item)
  }

  deleteododItem(id) {
    return this.http.delete(`${this.url}/todos/${id}`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this.baseUrl + 'users').subscribe({ 
      next: response => { this.users = response }, 
      error: e => console.log(e) 
    });

  }
}

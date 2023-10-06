import {Component, OnInit} from '@angular/core';
import jwt_decode from "jwt-decode";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  id: number | null = null;
  apiUrl = 'http://127.0.0.1:8000/api/users/';
  userData: any;

  constructor(private httpClient: HttpClient,
              private router: Router
              ) {}

  ngOnInit() {
    let token = localStorage.getItem('token');

    if (token !== null) {
      let decoded: any = jwt_decode(token);
      this.id = decoded.id;

      const url = `${this.apiUrl}${this.id}`;

      this.httpClient.get(url).subscribe((data: any) => {
        this.userData = data;
      }, (error) => {
        console.error('Erreur lors de la requête HTTP :', error);
      });
    } else {
      console.error('Le jeton JWT est introuvable dans le stockage local.');
    }
  }
  btbill(){
    return this.router.navigate(["admin/bill"]);
  }
}


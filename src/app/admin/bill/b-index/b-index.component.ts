import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-b-index',
  templateUrl: './b-index.component.html',
  styleUrls: ['./b-index.component.css']
})
export class BIndexComponent implements OnInit {
  id: number | null = null;
  apiUrl = 'http://127.0.0.1:8000/api/users/';
  userData: any;

  constructor(private httpClient: HttpClient) {
  }

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
}

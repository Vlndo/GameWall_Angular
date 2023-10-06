import {Component, OnInit} from '@angular/core';
import jwt_decode from "jwt-decode";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css']
})


export class UIndexComponent implements OnInit {
  id: number | null = null;
  apiUrl = 'http://127.0.0.1:8000/api/users/';
  userData: any;

  constructor(private httpClient: HttpClient) {}

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

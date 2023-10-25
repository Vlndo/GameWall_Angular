import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit{
  url: string = "http://127.0.0.1:8000/api/bills";
  constructor(private http:HttpClient) {
  }
  ngOnInit() {

    const productData:any = localStorage.getItem('cart_items');
    const userData:any = localStorage.getItem('cart_email');




    const requestData = {
      billNumber: '7887878787',
      payment: 'Paypal',
      keeys: productData.keeys,
      billuser: userData.email
    };

    this.http.post(this.url, requestData)
      .subscribe(response => {
        console.log('Facture créée avec succès', response);
      }, error => {
        console.error('Erreur lors de la création de la facture', error);
      });
  }











}

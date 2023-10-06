import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-b-details',
  templateUrl: './b-details.component.html',
  styleUrls: ['./b-details.component.css']
})
export class BDetailsComponent implements OnInit{
  constructor(private activated: ActivatedRoute, private http: HttpClient) {}

  url: string = "http://127.0.0.1:8000/api/bills/";
  bill: any;

  ngOnInit() {
    let bid = this.activated.snapshot.paramMap.get("bid");

    this.http.get(this.url + bid).subscribe((data: any) => {
      this.bill = data;
    });
  }
}


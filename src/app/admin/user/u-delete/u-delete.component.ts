import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../_services/token.service";

@Component({
	selector: "app-u-delete",
	templateUrl: "./u-delete.component.html",
	styleUrls: ["./u-delete.component.css"],
})
export class UDeleteComponent implements OnInit {
  constructor(private activated: ActivatedRoute,private http: HttpClient,private router: Router,private token: TokenService) {
  }

  ngOnInit(): void {


  }
  btDelete():void {
  let uid = this.activated.snapshot.paramMap.get('uid')
  this.http.delete('http://127.0.0.1:8000/api/users/' + uid).subscribe(
    (data: any) => {
      this.token.clearToken();
      return this.router.navigate(["/"]);
    })
  }
}

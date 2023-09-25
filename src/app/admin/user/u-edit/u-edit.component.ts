import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
	selector: "app-u-edit",
	templateUrl: "./u-edit.component.html",
	styleUrls: ["./u-edit.component.css"],
})
export class UEditComponent implements OnInit {

  user: any = {
    email: '',
    name: '',
    password: "",
    age: '',
  }

  constructor(private activated: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    let uid = this.activated.snapshot.paramMap.get('uid')
    this.http.get('http://127.0.0.1:8000/api/users/' + uid).subscribe(
      (data: any) => {
        console.log(data)
        this.user = data
      })
  }

  onSubmit(): void {
    console.log(this.user)
    let uid = this.activated.snapshot.paramMap.get("uid");
    const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });

    this.http
      .patch(`http://127.0.0.1:8000/api/users/${uid}`, this.user, { headers: headers })
      .subscribe(
        (data) => {
          console.log("Formulaire envoyé avec succès :", data);
        },
        (error) => {
          console.error("Erreur lors de l'envoi du formulaire :", error);
        }
      );
  }









}

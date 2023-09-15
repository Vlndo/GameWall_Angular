import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICredential } from "../_interfaces/credential";
import { IToken } from "../_interfaces/token";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	url = "http://127.0.0.1:8000/api/login";

	constructor(private http: HttpClient) {}

	login(credentials: ICredential): Observable<IToken> {
		return this.http.post<IToken>(this.url, credentials);
	}
}

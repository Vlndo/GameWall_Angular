import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class TagService {
	url = "http://127.0.0.1:8000/api/tags?page=1";
	constructor(private http: HttpClient) {}

	getTags(): Observable<any> {
		return this.http.get(this.url);
	}
}

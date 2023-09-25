import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ImagesService {
	url = "http://127.0.0.1:8000/api/images?page=1";

	constructor(private http: HttpClient) {}

	// getImages(): Observable<any> {
	// 	return this.http.get(this.url);
	// }
	getImages(): Observable<Blob> {
		return this.http.get(this.url, {
			responseType: "blob",
		});
	}
}

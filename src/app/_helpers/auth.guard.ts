import { CanActivateFn } from "@angular/router";

export const AuthGuard: CanActivateFn = (route, state) => {
	return true;
};

//------------------------ VERSION DETAILLEE --------------------------------

// import { CanActivateFn } from "@angular/router";
// import { Observable } from "rxjs";
// import {
// 	ActivatedRouteSnapshot,
// 	CanActivate,
// 	Router,
// 	RouterStateSnapshot,
// 	UrlTree,
// } from "@angular/router";
// import { Injectable } from "@angular/core";

// @Injectable({
// 	providedIn: "root",
// })
// export class AuthGuard implements CanActivate {
// 	canActivate(
// 		route: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot,
// 	):
// 		| Observable<boolean | UrlTree>
// 		| Promise<boolean | UrlTree>
// 		| boolean
// 		| UrlTree {
// 		return false;
// 	}
// }

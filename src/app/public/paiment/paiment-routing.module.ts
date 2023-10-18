import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { PaimentMethodComponent } from "./paiment-method/paiment-method.component";
import { SuccessComponent } from "./success/success.component";

const routes: Routes = [
	{ path: "", component: CartComponent },
	{ path: "paiment-method", component: PaimentMethodComponent },
	{ path: "success", component: SuccessComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PaimentRoutingModule {}

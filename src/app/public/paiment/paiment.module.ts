import { PaimentRoutingModule } from "./paiment-routing.module";
import { CartComponent } from "./cart/cart.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PaimentMethodComponent } from "./paiment-method/paiment-method.component";
import { NgxPayPalModule } from "ngx-paypal";
import { SuccessComponent } from "./success/success.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [CartComponent, PaimentMethodComponent, SuccessComponent],
	imports: [
		PaimentRoutingModule,
		CommonModule,
		NgOptimizedImage,
		FormsModule,
		NgxPayPalModule,
		ReactiveFormsModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaimentModule {}

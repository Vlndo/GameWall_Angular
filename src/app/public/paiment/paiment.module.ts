import { PaimentRoutingModule } from "./paiment-routing.module";
import { CartComponent } from "./cart/cart.component";
import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [CartComponent],
	imports: [
		PaimentRoutingModule,
		CommonModule,
		NgOptimizedImage,
		FormsModule,
	],
})
export class PaimentModule {}

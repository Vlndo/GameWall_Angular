import { PaimentRoutingModule } from "./paiment-routing.module";
import { CartComponent } from "./cart/cart.component";
import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";

@NgModule({
	declarations: [CartComponent],
	imports: [PaimentRoutingModule, CommonModule, NgOptimizedImage],
})
export class PaimentModule {}

import { PaimentRoutingModule } from "./paiment-routing.module";
import { CartComponent } from "./cart/cart.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [CartComponent],
	imports: [PaimentRoutingModule, CommonModule],
})
export class PaimentModule {}

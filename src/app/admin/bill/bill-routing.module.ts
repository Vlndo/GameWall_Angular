import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BIndexComponent } from "./b-index/b-index.component";

const routes: Routes = [
	{ path: "", redirectTo: "index", pathMatch: "full" },
	{ path: "index", component: BIndexComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BillRoutingModule {}

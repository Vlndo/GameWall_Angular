import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UEditComponent } from "./u-edit/u-edit.component";
import { UDeleteComponent } from "./u-delete/u-delete.component";
import { UIndexComponent } from "./u-index/u-index.component";

const routes: Routes = [
	{ path: "", redirectTo: "index", pathMatch: "full" },
	{ path: "index", component: UIndexComponent },
	{ path: "edit/:id", component: UEditComponent },
	{ path: "delete/:id", component: UDeleteComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}

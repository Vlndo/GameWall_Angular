import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AlayoutComponent } from "./alayout/alayout.component";

const routes: Routes = [
	{
		path: "",
		component: AlayoutComponent,
		children: [
			{ path: "", redirectTo: "dashboard", pathMatch: "full" },
			{ path: "dashboard", component: DashboardComponent },
			{
				path: "user",
				loadChildren: () =>
					import("./user/user.module").then((m) => m.UserModule), // le paramettre m est le m de module
			},
			{
				path: "bill",
				loadChildren: () =>
					import("./bill/bill.module").then((m) => m.BillModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}

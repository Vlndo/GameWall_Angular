import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IPayPalConfig, ICreateOrderRequest } from "ngx-paypal";
import { environment } from "src/app/_environment/environment";
import {HttpClient} from "@angular/common/http";

@Component({
	selector: "app-paiment-method",
	templateUrl: "./paiment-method.component.html",
	styleUrls: ["./paiment-method.component.css"],
})
export class PaimentMethodComponent implements OnInit {
	public payPalConfig?: IPayPalConfig;
	showSuccess!: any;
	cartTotal!: any;



	constructor(private router: Router,private http:HttpClient) {}

	ngOnInit(): void {
		this.initConfig();
		this.cartTotal =
			JSON.parse(localStorage.getItem("cart_total") as any) || [];
		console.log(this.cartTotal);



  }
	private initConfig(): void {
		this.payPalConfig = {
			currency: "EUR",
			clientId: `${environment.Client_ID}`,
			createOrderOnClient: (data) =>
				<ICreateOrderRequest>{
					intent: "CAPTURE",
					purchase_units: [
						{
							amount: {
								currency_code: "EUR",
								value: `${this.cartTotal}`,
								breakdown: {
									item_total: {
										currency_code: "EUR",
										value: `${this.cartTotal}`,
									},
								},
							},
							items: [
								{
									name: "Enterprise Subscription",
									quantity: "1",
									category: "DIGITAL_GOODS",
									unit_amount: {
										currency_code: "EUR",
										value: `${this.cartTotal}`,
									},
								},
							],
						},
					],
				},
			advanced: {
				commit: "true",
			},
			style: {
				label: "paypal",
				layout: "vertical",
			},
			onApprove: (data, actions) => {
				console.log(
					"onApprove - transaction was approved, but not authorized",
					data,
					actions,
				);
				actions.order.get().then((details: any) => {
					console.log(
						"onApprove - you can get full order details inside onApprove: ",
						details,
					);
				});
			},
			onClientAuthorization: (data) => {
				console.log(
					"onClientAuthorization - you should probably inform your server about completed transaction at this point",
					data,
				);
				if (data.status === "COMPLETED") {
          let bill = {
            email: localStorage.getItem("cart_email"),
            billNumber: `${Math.floor(
              Math.random() * 9,
            )}${Math.floor(Math.random() * 9)}${Math.floor(
              Math.random() * 9,
            )}${Math.floor(Math.random() * 9)}${Math.floor(
              Math.random() * 9,
            )}${Math.floor(Math.random() * 9)}${Math.floor(
              Math.random() * 9,
            )}${Math.floor(Math.random() * 9)}`,
          };
          this.router.navigate(['paiment/success'])
        }
          this.showSuccess = true;
			},
			onCancel: (data, actions) => {
				console.log("OnCancel", data, actions);
			},
			onError: (err) => {
				console.log("OnError", err);
			},
			onClick: (data, actions) => {
				console.log("onClick", data, actions);
			},
		};
	}
}

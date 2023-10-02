import { Component } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";

@Component({
  selector: "app-galery",
  templateUrl: "./galery.component.html",
  styleUrls: ["./galery.component.css"],
})
export class GaleryComponent {
  products: any[] = [];
  searchQuery: string = '';
  filteredProducts: any[] = [];
  selectedPlatform: string = '';
  uniquePlatforms: string[] = [];
  uniqueTags: string[] = [];
  selectedTag: string = '';
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response["hydra:member"];
      this.filteredProducts = this.products;
      this.uniquePlatforms = this.getUniquePlatforms(this.products);
      this.uniqueTags = this.getUniqueTags(this.products);

      console.log(this.products);
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      (product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || this.searchQuery === '') &&
      (this.selectedPlatform === '' || this.productHasPlatform(product, this.selectedPlatform)) &&
      (this.selectedTag === '' || this.productHasTag(product, this.selectedTag))
    );
  }

  productHasPlatform(product: any, platformName: string): boolean {
    return product.platforms.some((platform: { name: string; }) => platform.name === platformName);
  }


  getUniquePlatforms(products: any[]): string[] {
    const platformsSet = new Set<string>();
    products.forEach(product => {
      product.platforms.forEach((platform: { name: string; }) => {
        platformsSet.add(platform.name);
      });
    });
    return Array.from(platformsSet);
  }
  productHasTag(product: any, tagName: string): boolean {
    return product.tags.some((tag: { name: string; }) => tag.name === tagName);
  }
  getUniqueTags(products: any[]): string[] {
    const tagsSet = new Set<string>();
    products.forEach(product => {
      product.tags.forEach((tag: { name: string; }) => {
        tagsSet.add(tag.name);
      });
    });
    return Array.from(tagsSet);
  }
}

import { Product } from "./Product";
import type { ProductDetails } from "./Product";


export class ProductCatalog {
    private products: Product[];

    constructor(products: ProductDetails[]){
        const productList = products.map(product => new Product(product));
        this.products = productList;
    }

    getAllProducts(): Product[]{
        return this.products;
    }

    getProductBySlug(slug: string): Product | undefined{
        if(!slug){
            throw new Error("Slug is required");
        }
        return this.products.find(product => product.slug === slug)
    }

    getProductByCategory(category: string): Product[]{
        return this.products.filter(product => product.category === category);
    }

    getById(id: number): Product | undefined{
        if(!id){
            throw new Error("ID is required");
        }
        return this.products.find(product => product.id === id);
    }
}
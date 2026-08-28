export interface ProductDetails{
    id: number;
    title: string;
    slug: string;
    price: number;
    category: string;
    image: string;
    description: string;
    inStock: boolean;
}

export class Product{
    id: number;
    title: string;
    slug: string;
    price: number;
    category: string;
    image: string;
    description: string;
    inStock: boolean;

    constructor(details: ProductDetails){
        this.id = details.id;
        this.title = details.title;
        this.slug = details.slug;
        this.price = details.price;
        this.category = details.category;
        this.image = details.image;
        this.description = details.description;
        this.inStock = details.inStock;
    }

    getSlug(): string{
        return this.slug;
    }

    getProductPrice(): string{
        return `$${this.price}`;
    }

    getProductInStock(): boolean{
        return this.inStock            
    }
}
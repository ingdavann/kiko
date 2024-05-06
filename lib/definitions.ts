export type ProductType = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
}

export type CartProductType = {
    id: number;
    name: string;
    image: string;
    price: number;
    onClick?: () => void;
}
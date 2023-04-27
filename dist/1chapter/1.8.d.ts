interface Product {
    name: string;
    price: number;
    account: number;
    buy(): void;
}
declare let p: Product;
interface Pet {
    name: string;
    love: number;
    health: number;
    toHealth(): void;
}
interface Dog extends Pet {
    strain: string;
    guardHome(): void;
}
interface List {
    add(): void;
    remove(): void;
}
declare class ArrayList implements List {
    add(): void;
    remove(): void;
}

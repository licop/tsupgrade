interface Book {
    ISBN: string;
    book_name: boolean;
    book_price: string;
    store_count?: number;
    publish?: string;
}
type SubBook = Pick<Book, 'ISBN' | 'book_name' | 'book_price'>;
declare class Customer {
    name: string;
    age: number;
}
type SubCustmer = Pick<Customer, 'name'>;

interface Todo {
    readonly title: string;
    completed: boolean;
    description: string;
    date?: Date;
    publisher?: string;
}
type Todo_ = Required<Todo>;
type Todo__ = Partial<Todo>;
type Todo___ = Readonly<Todo>;
declare function add(a: number, b: number): number;
type AddReturn = ReturnType<typeof add>;
declare function add1(a: number, b: string): string;
type AddParams = Parameters<typeof add1>;

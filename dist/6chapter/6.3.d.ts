interface Person {
    name: string;
    age: number;
}
type Filter<T, U> = T extends U ? T : never;
type PersonName = Filter<keyof Person, string>;
interface Person {
    name: string;
    age: number;
}
type Readonly1<T> = {
    readonly [P in keyof T]: T[P];
};
type Partial1<T> = {
    [P in keyof T]?: T[P];
};
type NonNullable1<T> = {
    [P in keyof T]-?: NonNullable<T[P]>;
};
type ReadonlyPerson = Readonly<Person>;
type PartialPerson = Partial<Person>;
type NonNullablePerson = NonNullable<Person>;

interface Admin {
    name: string;
    privileges: string[];
}
interface Employee {
    name: string;
    startDate: Date;
}
type UnknownEmployee = Employee | Admin;
declare function printEmployeeInformation(emp: UnknownEmployee): void;
declare function cal(num: string | number): void;
declare function padLeft(value: string, padding: string | number): string;
interface Padder {
    getPaddingString(): string;
}
declare class SpaceRepeatingPadder implements Padder {
    private numSpaces;
    constructor(numSpaces: number);
    getPaddingString(): string;
}
declare class StringPadder implements Padder {
    private value;
    constructor(value: string);
    getPaddingString(): string;
}
declare let padder: Padder;
declare function isNumber(x: any): x is number;
declare function isString(x: any): x is string;
declare function cal1(arr: string | number): void;
declare function isPromise(value: any): value is PromiseLike<unknown>;

declare class People {
    name: string;
    _age: number;
    addr: string;
    static count: number;
    constructor(_name: string, _addr: string);
    set age(val: number);
    get age(): number;
    doEat(): void;
    doStep(): void;
}
declare let p1: People;

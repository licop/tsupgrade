declare let data1: Object;
declare let data2: {};
declare let src: string | number;
type Obj1 = {
    username: string;
};
type Obj2 = {
    age: number;
};
declare let obj: Obj1;
declare let obj2: Obj2;
declare let obj3: Obj1 & Obj2;
type num = 1 | 2 | 3;
declare let n: num;
type increaseFlag = 0 | 1;
declare function isStartUp(increase: increaseFlag): void;

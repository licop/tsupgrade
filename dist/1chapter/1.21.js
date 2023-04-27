"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类与静态成员
class People {
    constructor(_name, _age, _addr) {
        this.name = _name;
        this.age = _age;
        this.addr = _addr;
        People.count++;
    }
    doEat() { }
    doStep() { }
}
People.count = 0;
let p1 = new People('licop', 20, 'beijing');
let p2 = new People('anna', 21, 'panjin');
console.log(People.count);
p1.doEat();

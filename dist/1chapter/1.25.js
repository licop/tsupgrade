"use strict";
// set和get方法, 可以对属性进行控制
class People {
    constructor(_name, _addr) {
        this._age = 0;
        this.name = _name;
        this.addr = _addr;
        People.count++;
    }
    set age(val) {
        if (val > 10 && val < 108) {
            this._age = val;
        }
        else {
            throw new Error('年龄不在合适的范围');
        }
    }
    get age() {
        return this._age;
    }
    doEat() { }
    doStep() { }
}
People.count = 0;
let p1 = new People('licop', 'beijing');
p1.age = 200;

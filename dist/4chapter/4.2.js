"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类使用泛型
class ArrayList {
    constructor() {
        this.index = 0;
        this.arr = [];
    }
    add(ele) {
        this.arr[this.index++] = ele;
    }
    get(index) {
        return this.arr[index];
    }
}
let arrList = new ArrayList();
arrList.add('adc');

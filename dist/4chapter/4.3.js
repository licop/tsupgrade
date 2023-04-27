"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 给定泛型默认值
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

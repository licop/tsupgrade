"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommercialBank {
    constructor(name, address) {
        this.address = "beijing";
        this.name = "wangwu";
        this.address = address;
        this.name = name;
    }
    loan() {
        console.log(this.name + " 银行贷款");
    }
}
exports.default = CommercialBank;
//function createFactoryConstructor(constructorTyp: new (...args: any) =>any) {
function createFactoryConstructor(constructorTyp) {
    console.log(constructorTyp.name + "被创建..");
    new constructorTyp();
}
createFactoryConstructor(CommercialBank);

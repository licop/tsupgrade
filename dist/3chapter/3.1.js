"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vechile = void 0;
// 断言
class Vechile {
    constructor(brand_, vechileNo_, days_) {
        this.total = 0; // 支付的租赁总费用
        this.brand = brand_;
        this.vechileNo = vechileNo_;
        this.days = days_;
    }
    calculateRent() {
        console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");
        return 0;
    }
}
Vechile.count = 3;
exports.Vechile = Vechile;
class Car extends Vechile {
    constructor(brand_, vechileNo_, days_, type_) {
        super(brand_, vechileNo_, days_);
        this.brand = "Car品牌"; // 品牌
        this.type = type_;
    }
    // 根据车的型号来获取租用一天该型号车的租金
    getPriceByType() {
        let rentMoneyByDay = 0; //每天的租金
        if (this.type === "普拉多巡洋舰") {
            rentMoneyByDay = 800;
        }
        else if (this.type === "凯美瑞旗舰版") {
            rentMoneyByDay = 400;
        }
        else if (this.type === "威驰智行版") {
            rentMoneyByDay = 200;
        }
        return rentMoneyByDay;
    }
    calculateRent() {
        super.calculateRent();
        console.log("小轿车租赁...");
        return this.days * this.getPriceByType();
    }
}
class Bus extends Vechile {
    constructor(brand_, vechileNo_, days_, seatNum_) {
        super(brand_, vechileNo_, days_); //使用父类的构造函数的好处
        this.seatNum = seatNum_;
    }
    getPriceBySeatNum() {
        //计算租赁价格
        let rentMoneyByDay = 0; //每天的租金
        if (this.seatNum <= 16) {
            rentMoneyByDay = 800;
        }
        else if (this.seatNum > 16) {
            rentMoneyByDay = 1600;
        }
        return rentMoneyByDay;
    }
    calculateRent() {
        super.calculateRent();
        return this.days * this.getPriceBySeatNum();
    }
}
class Truck extends Vechile {
    constructor(brand_, type_, days_, ton_) {
        super(brand_, type_, days_);
        this.ton = ton_;
    }
    CalRentPrice() {
        //计算租赁价格
        let rentMoneyByDay = 0; //每天的租金
        if (this.ton <= 500) {
            //500吨
            rentMoneyByDay = 750;
        }
        else if (this.ton > 500) {
            rentMoneyByDay = 1350;
        }
        return rentMoneyByDay;
    }
    calRent() {
        return this.CalRentPrice() * this.days;
    }
}
class Customer {
    rent(vechile) {
        let car = vechile;
        console.log("car.type", car.type);
        car.calculateRent();
    }
}
let cust = new Customer();
let car = new Car("AA", "LICOP", 30, 'ANAN');
cust.rent(car);

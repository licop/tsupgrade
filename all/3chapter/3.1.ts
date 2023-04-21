// 断言
export class Vechile {
  static count: number = 3;
  public brand: string; // 品牌
  public vechileNo: string; // 车牌号
  public days: number; // 租赁天数
  public total: number = 0; // 支付的租赁总费用

  constructor(brand_: string, vechileNo_: string, days_: number) {
    this.brand = brand_;
    this.vechileNo = vechileNo_;
    this.days = days_;
  }

  public calculateRent() {
    console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");
    return 0;
  }
}

class Car extends Vechile {
  public type: string; // 车的型号
  public brand: string = "Car品牌"; // 品牌
  constructor(
    brand_: string,
    vechileNo_: string,
    days_: number,
    type_: string
  ) {
    super(brand_, vechileNo_, days_);
    this.type = type_;
  }
  // 根据车的型号来获取租用一天该型号车的租金
  public getPriceByType() {
    let rentMoneyByDay: number = 0; //每天的租金
    if (this.type === "普拉多巡洋舰") {
      rentMoneyByDay = 800;
    } else if (this.type === "凯美瑞旗舰版") {
      rentMoneyByDay = 400;
    } else if (this.type === "威驰智行版") {
      rentMoneyByDay = 200;
    }
    return rentMoneyByDay;
  }

  public calculateRent() {
    super.calculateRent();
    console.log("小轿车租赁...");
    return this.days * this.getPriceByType();
  }
}

class Bus extends Vechile {
  public seatNum: number; // 座位数
  constructor(
    brand_: string,
    vechileNo_: string,
    days_: number,
    seatNum_: number
  ) {
    super(brand_, vechileNo_, days_); //使用父类的构造函数的好处
    this.seatNum = seatNum_;
  }

  public getPriceBySeatNum() {
    //计算租赁价格
    let rentMoneyByDay: number = 0; //每天的租金
    if (this.seatNum <= 16) {
      rentMoneyByDay = 800;
    } else if (this.seatNum > 16) {
      rentMoneyByDay = 1600;
    }
    return rentMoneyByDay;
  }
  public calculateRent() {
    super.calculateRent();
    return this.days * this.getPriceBySeatNum();
  }
}

class Truck extends Vechile {
  ton!: number; // 座位数
  constructor(brand_: string, type_: string, days_: number, ton_: number) {
    super(brand_, type_, days_);
    this.ton = ton_;
  }

  CalRentPrice() {
    //计算租赁价格
    let rentMoneyByDay: number = 0; //每天的租金
    if (this.ton <= 500) {
      //500吨
      rentMoneyByDay = 750;
    } else if (this.ton > 500) {
      rentMoneyByDay = 1350;
    }
    return rentMoneyByDay;
  }
  public calRent() {
    return this.CalRentPrice() * this.days;
  }
}

class Customer {
  rent(vechile: Vechile) {
    let car = vechile as Car
    console.log("car.type", car.type)
    car.calculateRent()
  }
}

let cust:Customer = new Customer()
let car:Car = new Car("AA", "LICOP", 30, 'ANAN')
cust.rent(car)

export {}


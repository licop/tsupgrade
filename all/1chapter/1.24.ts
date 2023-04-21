// 单例模式的第二种实现方式
export default class DateUtil {
  static dateUtil: DateUtil
  static getInstance() {
    if(this.dateUtil) {
      this.dateUtil = new DateUtil()
    } 
    return this.dateUtil
  }
  
  private constructor() {
    console.log('创建对象')
  }

  formatDate() {
    console.log("fomatDate")
  }
  diffDateByDay() {} // 两个日期之间的天数计算
  diffDateByHour() {} // 两个日期之间的小时计算
  timeConversion(restTime: number) {} // 天 时 分 秒
}
console.log("abc")

const dateUtil1 = DateUtil.getInstance()
const dateUtil2 = DateUtil.getInstance()
console.log(dateUtil1 === dateUtil2)
const dateUtil3 = DateUtil.getInstance()

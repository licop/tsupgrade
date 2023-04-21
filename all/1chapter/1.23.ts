// 单例模式指一个类只允许外部获取它的唯一的实力对象
// 单例模式的两种实现方式

// 第一种方式 立即创建单件模式
export default class DateUtil {
  static dateUtil = new DateUtil()

  private constructor() {
    // 只执行一次
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

const dateUtil1 = DateUtil.dateUtil
const dateUtil2 = DateUtil.dateUtil

console.log(dateUtil1 === dateUtil2) // true
dateUtil1.formatDate()



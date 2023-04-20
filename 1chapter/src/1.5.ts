// 使用常量
// 方法参数不能定义为具体类型，只能初级使用 number，string 基本类型替代，降低了代码的可读性和可维护性。
const Status = {
  MANAGER_ADUIT_FAIL: -1,
  NO_ADUIT: 0,
  MANAGER_ADUIT_SUCCESS: 1,
  FINAL_ADUIT_SUCCESS: 2
}
// 审核类
class MyAduit {

  getAduitStatus(status: number): void {

    if (status === Status.NO_ADUIT) {
      console.log("没有审核");
    } else if (status === Status.MANAGER_ADUIT_SUCCESS) {
      console.log("经理审核通过");
    } else if (status === Status.FINAL_ADUIT_SUCCESS) {
      console.log("财务审核通过");
    }
  }
}

const aduit = new MyAduit();
aduit.getAduitStatus(Status.NO_ADUIT)


// 使用枚举

// 有默认值和可以自增值,节省编码时间
// 语义更清晰,可读性增强，可以明确参数类型为枚举类型
export enum EnumAuditStatus {
  MANAGER_ADUIT_FAIL = -1, //第一个常量值设置为-1
  NO_ADUIT, // 0
  MANAGER_ADUIT_SUCCESS, // 1
  FINAL_ADUIT_SUCCESS, //  2
}

type Expense = {
  id: number
  events: string
  time: Date
  enumAuditStatus: EnumAuditStatus
}

// 审核类
class MyAduit1 {
  getAduitStatus(status: EnumAuditStatus): void {
    if (status === EnumAuditStatus.NO_ADUIT) {
      console.log("没有审核")
    } else if (status === EnumAuditStatus.MANAGER_ADUIT_SUCCESS) {
      console.log("经理审核通过")
    } else if (status === EnumAuditStatus.FINAL_ADUIT_SUCCESS) {
      console.log("财务审核通过")
    }
  }
}

const aduit1 = new MyAduit1()
aduit1.getAduitStatus(EnumAuditStatus.NO_ADUIT)

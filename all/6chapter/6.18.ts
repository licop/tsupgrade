// 已知条件1：接口和类
interface Action<T = any> {
  type: string
  payload?: T
}

class FoodModule {
  public static topic: string
  public count!: number

  delay(promise: Promise<number>) {
    return promise.then((second: number) => ({
      type: 'delay',
      payload: `延迟 ${second} 秒`
    }))
  }

  searchFoodByCity(action: Action<String>) {
    return {
      payload: action.payload,
      type: 'searchFoodByCity'
    }
  }

}

// 下面是 FoodModule 类的 delay 和 searchFoodByCity 方法的泛型类型 分别是：
type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>> // delay方法类型
type syncMethod<T, U> = (action: Action<T>) => Action<U> // searchFoodByCity方法类型

// 要求实现1：根据上面两个已知条件，综合利用 infer, keyof, in keyof 来得到下面类型：
type asyncMethodConnect<T, U> = (input: T) => Action<U> // delay方法类型
type syncMethodConnect<T, U> = (action: T) => Action<U> // searchFoodByCity方法类型


type Convert<T> = T extends any ? T : never
type FoodModuleKeys = Convert<keyof FoodModule> // "delay" | "searchFoodByCity" | "count"

type ExtractAction<F> = F extends (...args: infer Args) => infer R
  ? (...args: Args) => Action<R>
  : never


// 要求实现2： 根据上面两个已知条件和实现1，最终获取到下面类型。
// type LastResult = {
//   delay: asyncMethodConnect<number, string>;
//   searchFoodByCity: syncMethodConnect<String, String>;
// }

type ModuleNameType<T> = {
  [F in keyof T]: T[F] extends Function ? F : never
}[keyof T]

type FoodMdlNameType = ModuleNameType<FoodModule>

type Connect<T extends FoodModule, K extends FoodMdlNameType> = {
  [P in K]: FoodModule[P] extends asyncMethod<infer T1, infer U1>
    ? asyncMethodConnect<T1, U1>
    : FoodModule[P] extends syncMethod<infer T2, infer U2>
    ? syncMethodConnect<T2, U2>
    : never
}

const foodModule = new FoodModule()

type ConnectedFoodModule = Connect<typeof foodModule, 'delay' | 'searchFoodByCity'>

// const connectedFoodModule: ConnectedFoodModule = {
//   delay: (input: Promise<number>) => ({
//     type: 'delay',
//     payload: `延迟 ${input} 秒`
//   }),
//   searchFoodByCity: (action: Action<string>) => ({
//     type: 'searchFoodByCity',
//     payload: action.payload
//   }),
//   topic: '',
//   count: 0
// }




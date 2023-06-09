# 代码实战演练：如何用交叉类型 + 方法重载 + 泛型 rest 参数合并 n 多个对象。

**作业目的：**

学会泛型 rest 参数的运用，提高交叉类型 + 方法重载的综合应用。

**训练技能点:**

方法重载，交叉类型，泛型 rest 参数，也用到了下一章的 infer **【 infer 如果思考了还不能理解，可先看完第九章的 infer 后 再回来做本题】**

**作业说明:**

上一讲我们运用方法重载 + 交叉类型完成 3 个对象交叉的实现，那么思考 —— 当要交叉的对象个数很多，不确定时，比如要把 很多对象合并交叉【比如：用户，角色，权限，菜单，审批，部门，日志对象合并】那该如何做呢？代码我已经给出，请写出你对这段代码的理解。

```js
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void  ? I  : never;
function combine<T extends object[]>(...unionObj: T):UnionToIntersection<T[number]>
function combine<T extends object[]>(...unionObj: T) {
  return unionObj.reduce((acc, obj) => ({
    ...acc,
    ...obj
  }), {});
}
const crossResult2 = combine({ count: 2, price: 4, name: { ownName: "kate" } },
  { price: 2 }, { address: "beijing" })
crossResult2.address//success
crossResult2.count//success
```

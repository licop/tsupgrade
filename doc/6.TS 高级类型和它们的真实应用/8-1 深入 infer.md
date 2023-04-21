# 8-1 深入 infer

**infer 的定义**：infer 表示在 extends 条件语句中以占位符出现的等到使用时才推断出来的数据类型。

素材:

```ts
interface Customer {
  custname: string;
  buymoney: number;
}

class Subject {
  constructor(public subid: number, public subname: string) {}
}
let chineseSubject = new Subject(100, "语文");
let mathSubject = new Subject(101, "数学");
let englishSubject = new Subject(101, "英语");
let setZhangSanSubject = new Set([chineseSubject, mathSubject]);
```



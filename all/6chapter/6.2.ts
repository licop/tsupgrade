// infer 实例
class Subject {
  constructor(public subid: number, public subname: string) {}
}
let chineseSubject = new Subject(100, "语文")
let mathSubject = new Subject(101, "数学")
let englishSubject = new Subject(101, "英语")
let setZhangSanSubject = new Set([chineseSubject, mathSubject])

type SetType<T> = T extends Set<infer P> ? P : never
type CurType = SetType<typeof setZhangSanSubject> // Subject

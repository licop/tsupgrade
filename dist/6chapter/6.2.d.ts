declare class Subject {
    subid: number;
    subname: string;
    constructor(subid: number, subname: string);
}
declare let chineseSubject: Subject;
declare let mathSubject: Subject;
declare let englishSubject: Subject;
declare let setZhangSanSubject: Set<Subject>;
type SetType<T> = T extends Set<infer P> ? P : never;
type CurType = SetType<typeof setZhangSanSubject>;

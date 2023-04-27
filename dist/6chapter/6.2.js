"use strict";
class Subject {
    constructor(subid, subname) {
        this.subid = subid;
        this.subname = subname;
    }
}
let chineseSubject = new Subject(100, "语文");
let mathSubject = new Subject(101, "数学");
let englishSubject = new Subject(101, "英语");
let setZhangSanSubject = new Set([chineseSubject, mathSubject]);

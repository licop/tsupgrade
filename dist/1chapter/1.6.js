"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  数字枚举
var Week;
(function (Week) {
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wensday"] = 3] = "Wensday";
    Week[Week["ThirsDay"] = 4] = "ThirsDay";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Sarturday"] = 6] = "Sarturday";
    Week[Week["Sunday"] = 7] = "Sunday";
})(Week || (Week = {}));
console.log(Week.Friday);
console.log(Week[4]);
//  字符串枚举
var WeekEnd;
(function (WeekEnd) {
    WeekEnd["Monday"] = "myMonday";
    WeekEnd["Tuesday"] = "Tuesday";
    WeekEnd["Wensday"] = "Wensday";
    WeekEnd["ThirsDay"] = "ThirsDay";
    WeekEnd["Friday"] = "Friday";
    WeekEnd["Sarturday"] = "Sarturday";
    WeekEnd["Sunday"] = "Sunday";
})(WeekEnd || (WeekEnd = {}));

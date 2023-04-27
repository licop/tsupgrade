"use strict";
// 为什么要用函数重载【好处和应用场景】
// 一组具有相同名字，不同参数类表和返回值无关并且具有一个实现签名和一个或多个重签名的函数
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var MessageType;
(function (MessageType) {
    MessageType["Image"] = "Image";
    MessageType["Audio"] = "Audio";
})(MessageType || (MessageType = {}));
let messages = [
    {
        id: 1,
        type: MessageType.Image,
        sendmessage: "你好啊,今晚咱们一起去三里屯吧",
    },
    {
        id: 2,
        type: MessageType.Audio,
        sendmessage: "朝辞白帝彩云间，千里江陵一日还",
    },
    {
        id: 3,
        type: MessageType.Audio,
        sendmessage: "你好！张无忌",
    },
    {
        id: 4,
        type: MessageType.Audio,
        sendmessage: "刘老根苦练舞台绝技！",
    },
    {
        id: 5,
        type: MessageType.Image,
        sendmessage: "今晚王牌对王牌节目咋样?",
    },
];
function searchMsg(condition) {
    if (typeof condition === 'number') {
        return messages.find(msg => condition === msg.id);
    }
    else {
        return messages.filter(msg => condition === msg.type);
    }
}
searchMsg(MessageType.Audio).forEach(msg => {
    console.log(msg);
});
(_a = searchMsg(1)) === null || _a === void 0 ? void 0 : _a.id;

// 对象属性变量

let obj = {username: 'licop', age: '23'}
// let username = 'username'
// username 改成常量不会报错，使用let会报错，因为username的值可能不固定
const username = 'username'
let u = obj[username]

export {}
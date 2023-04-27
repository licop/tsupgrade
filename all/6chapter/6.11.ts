// record实战

interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

let todoList: Todo[] = [
  {
    title: "开发权限管理模块",
    completed: true,
    description: "使用Vue3+typescript来开发",
  },
  {
    title: "年会",
    completed: false,
    description: "12月29号上午开心酒店1楼105",
  },
];
// 实现效果:
const pickTodoList = {
  开发权限管理模块: {
    title: "开发权限管理模块",
    completed: true,
  },
  年会: {
    title: "年会",
    completed: false,
  },
};

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

function arrToObj<T, K extends keyof T>(arr: T[], mainKey: K, pickKeys: Array<K>): Record<string, Pick<T, K>> {
  let obj: Record<string, Pick<T, K>> = {}
  arr.forEach(item => {
    obj[item[mainKey] as string] = {} as Pick<T, K>
    pickKeys.forEach(key => {
      obj[item[mainKey] as string][key] = item[key] 
    })
  })
  
  return obj
}  

const obj = arrToObj(todoList, 'title', ['title', 'completed'])
console.log(obj)

// 第二种写法
// 获取数组中的元素类型



export {}

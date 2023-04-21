# 8-16 视频作业：关于 Record 的一个作业题



```ts
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
```

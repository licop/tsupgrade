// 感知声明文件存在的意义

export type IncreaseBoolean = Boolean | 1 | 0;

export function mounted(isStartUp: IncreaseBoolean) {
  if (isStartUp) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

mounted(true);

export {};
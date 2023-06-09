// 1 集合类

// 单例模式 保证外部只允许得到同一个对象
export class Collection<T = any> {
  static collection: Collection = new Collection();
  
  private constructor() {
    console.log("构造。。。。");
  }
  
  public static test() {
    console.log("test....");
  }

  private containerMap = new Map<string | symbol, any>();

  public set(id: string | symbol, value: T): void {
    this.containerMap.set(id, value);
  }

  public get(id: string | symbol): T {
    return this.containerMap.get(id);
  }

  public has(id: string | symbol): Boolean {
    return this.containerMap.has(id);
  }
}

export default Collection.collection;

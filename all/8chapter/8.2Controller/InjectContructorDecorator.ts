// 元数据 -- 为了帮助类，方法，属性实现一定的功能，而附加在其上的一些数据
import 'reflect-metadata'

import CollectionInstance from './Collection'
type MyParameterDecorator = (target: any,
  paramname: string | symbol, parameterIndex: number) => void;

  
export default function InjectContructor(injectid?: string): MyParameterDecorator {
  return (target, paramname, paramindex) => {


    console.log(" 进入构造函数的参数装饰器....", target);
    console.log("获取类构造器参数类型组成的数组....")
    const constructorParamTypeArr =
     Reflect.getMetadata("design:paramtypes", target);
    console.log("design:paramtypes:", constructorParamTypeArr)
 
    let injectInstance = new constructorParamTypeArr[paramindex]()//   //new UserService()
    CollectionInstance.set(injectid!, injectInstance);
    console.log("构造器装饰器结束========================");

  }
}
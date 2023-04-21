let str:string|undefined;
console.log('str:', str)

// data: string | undefined
function fn(data?: string) {
  // data?.toString()
  // data!.toString()
  if(data) data.toString()
}

fn()

// any, unknown, undefined类型可以接收undefined
// any, unknown, null类型可以接收null
let data:unknown = undefined

export {}
# Vue3 源码中的 infer 在响应数据的解套应用

```ts
export function unref<T>(ref: T): T extends Ref<infer V> ? V : T {
  return isRef(ref) ? (ref.value as any) : ref;
}
```

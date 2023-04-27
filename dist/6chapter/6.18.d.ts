interface Action<T = any> {
    type: string;
    payload?: T;
}
declare class FoodModule {
    static topic: string;
    count: number;
    delay(promise: Promise<number>): Promise<{
        type: string;
        payload: string;
    }>;
    searchFoodByCity(action: Action<String>): {
        payload: String | undefined;
        type: string;
    };
}
type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>>;
type syncMethod<T, U> = (action: Action<T>) => Action<U>;
type asyncMethodConnect<T, U> = (input: T) => Action<U>;
type syncMethodConnect<T, U> = (action: T) => Action<U>;
type Convert<T> = T extends any ? T : never;
type FoodModuleKeys = Convert<keyof FoodModule>;
type ExtractAction<F> = F extends (...args: infer Args) => infer R ? (...args: Args) => Action<R> : never;
type Connect<T extends FoodModule, K extends keyof FoodModule> = {
    [P in K]: FoodModule[P] extends asyncMethod<infer T1, infer U1> ? asyncMethodConnect<T1, U1> : FoodModule[P] extends syncMethod<infer T2, infer U2> ? syncMethodConnect<T2, U2> : never;
};
declare const foodModule: FoodModule;
type ConnectedFoodModule = Connect<typeof foodModule, 'delay' | 'searchFoodByCity'>;
type MyPick<T, K extends keyof T> = {
    [P in K]: T[K];
};
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

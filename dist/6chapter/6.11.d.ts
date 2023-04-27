type EleofArr<T> = T extends Array<infer R> ? R : never;
export declare function getSubItemFromArr<T extends EleofArr<T>[], K extends keyof EleofArr<T>>(arr: T, keys: K[]): void;
export {};

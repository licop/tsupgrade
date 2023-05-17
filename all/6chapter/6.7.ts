// TS 高级类型——Extract 和它的真实应用

// Extract是条件类型的简写
// type Extract<T, U> = T extends U ? T : never;

type TestExtract = Extract<string, string | number> // string

export {}

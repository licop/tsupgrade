interface Customer {
    custname: string;
    buymoney: number;
}
type CustFn = (params: Customer) => string;
type CustParaTyp = CustFn extends (params: infer P) => any ? P : never;
type CustReturnTyp = CustFn extends (params: any) => infer R ? R : never;
type ReturnTyp<T> = T extends (params: any) => infer R ? R : never;
type CustReturnTyp1 = ReturnTyp<CustFn>;
type EleOrArr<T> = T extends Array<infer P> ? P : never;
type EleofArrTest = EleOrArr<Array<string>>;

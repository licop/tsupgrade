interface Car {
    brandNo: string;
}
interface Plane {
    No: string;
    brandNo: string;
}
type TypVechile = Car | Plane;
declare let vechile: TypVechile;

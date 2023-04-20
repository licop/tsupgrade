interface Car {
  brandNo: string
}
interface Plane {
  No: string
  brandNo: string
}
type TypVechile = Car | Plane

let vechile: TypVechile = { brandNo: "奔驰", No: "A1001" }


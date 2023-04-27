"use strict";
class FoodModule {
    delay(promise) {
        return promise.then((second) => ({
            type: 'delay',
            payload: `延迟 ${second} 秒`
        }));
    }
    searchFoodByCity(action) {
        return {
            payload: action.payload,
            type: 'searchFoodByCity'
        };
    }
}
const foodModule = new FoodModule();
// const connectedFoodModule: ConnectedFoodModule = {
//   delay: (input: Promise<number>) => ({
//     type: 'delay',
//     payload: `延迟 ${input} 秒`
//   }),
//   searchFoodByCity: (action: Action<string>) => ({
//     type: 'searchFoodByCity',
//     payload: action.payload
//   }),
//   topic: '',
//   count: 0
// }

// 个有点诡异的复杂映射类型的重要应用

type MouseEvent = {
  eventType: 'click';
  x: number;
  y: number
}

type KeyEvent = {
  eventType: 'keyUp';
  key: number;
}

type EventRec = EventFunctions<MouseEvent | KeyEvent, 'eventType'>


type EventFunctions<Events extends Record<string, any>, EventKey extends keyof Events> = {
  [Event in Events as Event extends Events ? Event[EventKey] : never]: (event: Event) => any

  // [Event in  Events as Event[EventKey]]: (event: Event) => any
}


export {}
import axios from "axios";

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    if (this.queue.length) {
      this.queue.shift();
    }
    return this.queue;
  }
}

export function makeMap(startingRoom, world = null) {
  let currentRoomId = startingRoom["room_id"];
  let map = JSON.parse(world);
  let direction = "";
  for (let key in map[currentRoomId]) {
    if (map[currentRoomId][key] === "?") {
      direction = key;
      break;
    }
  }

  if (direction) {
    console.log(direction);
  }
  console.log(map);
  return map;
}

import { Injectable } from '@angular/core';

@Injectable()
export class KeyboardService {

  static LEFT = 37;
  static UP = 38;
  static RIGHT = 39;
  static DOWN = 40;

  keys = {};

  constructor() { }

  listenForEvents(keys: Array<number>) {
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));

    keys.forEach(function(key) {
      this.keys[key] = false;
    }.bind(this));
  }

  onKeyDown(event: KeyboardEvent): void {
    let keyCode = event.keyCode;
    if (keyCode in this.keys) {
      event.preventDefault();
      this.keys[keyCode] = true;
    }
  }

  onKeyUp(event: KeyboardEvent): void{
    let keyCode = event.keyCode;
    if (keyCode in this.keys) {
      event.preventDefault();
      this.keys[keyCode] = false;
    }
  }

  isDown(keyCode: number) {
    if (!(keyCode in this.keys)) {
      throw new Error(`Keycode ${keyCode} is not being listened to`);
    }

    return this.keys[keyCode];
  }

}

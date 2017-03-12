import { Component, OnInit } from '@angular/core';

import { Game } from '../game'
import { Game1 } from '../game.data';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

  game: Game

  constructor() { }

  ngOnInit() {
    this.game = Game1;
  }

}

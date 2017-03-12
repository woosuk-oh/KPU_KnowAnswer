import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { Game2 } from '../game.data';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

  game: Game

  constructor( ) { }

  ngOnInit() {
    this.game = Game2;
  }

}

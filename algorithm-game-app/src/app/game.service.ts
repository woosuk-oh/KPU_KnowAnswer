import { Injectable } from '@angular/core';

import { Game } from './game';
import { GAMES } from './game.data';

@Injectable()
export class GameService {

  constructor() { }

  getGame(id: number): Promise<Game> {
    return this.getGames().then(games => {
      return games.find(game => {
        return game.id === id;
      });
    });
  }

  getGames(): Promise<Game[]> {
    return Promise.resolve(GAMES);
  }

}
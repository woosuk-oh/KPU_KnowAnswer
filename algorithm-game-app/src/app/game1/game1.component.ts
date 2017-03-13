import { Component, OnInit } from '@angular/core';

import { Game } from '../game'
import { Game1 } from '../game.data';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { } from 'rxjs';

/*

import { LoaderService } from '../loader.service';
import { KeyboardService } from '../keyboard.service';

class Map {
  rows = 12;
  cols = 12;
  tsize = 64;
  layers: [[
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,
    3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
    3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
    3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3
  ], [
      4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
      4, 4, 4, 0, 5, 4, 4, 4, 4, 4, 4, 4,
      4, 4, 4, 0, 0, 3, 3, 3, 3, 3, 3, 3
    ]];

  constructor() { }

  getTile(layer: number, col: number, row: number): 0 | 1 | 2 | 3 | 4 | 5 {
    return this.layers[layer][row * this.cols + col];
  }

  isSolidTileAtXY(x: number, y: number): boolean {
    let col = Math.floor(x / this.tsize);
    let row = Math.floor(y / this.tsize);

    return this.layers.reduce(function (res, layer, index: number) {
      let tile = this.getTile(index, col, row);
      let isSolid = tile === 3 || tile === 5;
      return res || isSolid;
    }.bind(this), false);
  }

  getCol(x: number): number {
    return Math.floor(x / this.tsize);
  }

  getRow(y: number): number {
    return Math.floor(y / this.tsize);
  }

  getX(col: number): number {
    return col * this.tsize;
  }

  getY(row: number): number {
    return row * this.tsize;
  }
}

class Camera {

  x: number;
  y: number;

  maxX: number;
  maxY: number;

  following: Player;

  constructor (
    private map: Map, 
    public width: number, 
    public height: number
  ) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
  }

  follow(sprite: Player): void {
    this.following = sprite;
    sprite.screenX = 0;
    sprite.screenY = 0;
  }

  update() {
    this.following.screenX = this.width / 2;
    this.following.screenY = this.height / 2;

    this.x = this.following.x - this.width / 2;
    this.y = this.following.y - this.height / 2;

    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));

    if (this.following.x < this.width / 2 || this.following.x > this.maxX + this.width / 2) {
      this.following.screenX = this.following.x - this.x;
    }

    if (this.following.y < this.height / 2 || this.following.y > this.maxY + this.height / 2) {
      this.following.screenY = this.following.y - this.y;
    }
  }
}

class Player {

  width: number;
  height: number;

  image;
  screenX: number;
  screenY: number;

  Loader = new LoaderService();

  static SPEED = 256;

  constructor(
    private map: Map,
    public x: number,
    public y: number
  ) {
    this.map = map;
    this.x = x;
    this.y = y;
    
    this.width = map.tsize;
    this.height = map.tsize;

    this.image = this.Loader.getImage('player');
  }

  move(delta: number, dirx: number, diry: number) {
    //move player
    this.x += dirx * Player.SPEED * delta;
    this.y += diry * Player.SPEED * delta;

    this.collide(dirx, diry);

    let maxX = this.map.cols * this.map.tsize;
    let maxY = this.map.rows * this.map.tsize;
    
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));
  }

  collide(dirx: number, diry: number) {
    let row, col;
    let left = this.x - this.width / 2;
    let right = this.x + this.width / 2 - 1;
    let top = this.y - this.height / 2;
    let bottom = this.y + this.height / 2 - 1;

    let collision = 
      this.map.isSolidTileAtXY(left, top) ||
      this.map.isSolidTileAtXY(right, top) ||
      this.map.isSolidTileAtXY(right, bottom) ||
      this.map.isSolidTileAtXY(left, bottom);
    
    if (!collision) {
      return;
    }

    if (diry > 0) {
      row = this.map.getRow(bottom);
      this.y = -this.height / 2 + this.map.getY(row);
    } else if (diry < 0) {
      row = this.map.getRow(top);
      this.y = this.height / 2 + this.map.getY(row + 1);
    } else if (dirx > 0) {
      col = this.map.getCol(right);
      this.x = -this.width / 2 + this.map.getX(col);
    } else if (dirx < 0) {
      col = this.map.getCol(left);
      this.x = this.width / 2 + this.map.getX(col + 1);
    }
  }
}

class Miro {
  
  tileAtlas;
  map: Map;
  camera: Camera;
  ctx: CanvasRenderingContext2D;

  previousElapsed: number;

  constructor(
    private Loader: LoaderService,
    private Keyboard: KeyboardService,
    private player: Player,
  ) {
    this.Loader = Loader;
    this.Keyboard = Keyboard;
  }
  
  load(): Promise<{}>[] {
    return [
      this.Loader.loadImage('tiles', '../../assets/tiles.png'),
      this.Loader.loadImage('player', '../../assets/character.png')
    ];
  }

  init(): void {
    let Keyboard = this.Keyboard;
    Keyboard.listenForEvents(
      [KeyboardService.LEFT, KeyboardService.RIGHT, KeyboardService.UP, KeyboardService.DOWN]
    );

    this.tileAtlas = this.Loader.getImage('tiles');
    
    this.player = new Player(this.map, 160, 160);
    this.camera = new Camera(this.map, 512, 512);
    this.camera.follow(this.player);
  }

  update(delta) {
    let dirx = 0;
    let diry = 0;
    
    if (this.Keyboard.isDown(KeyboardService.LEFT)) {
      dirx = -1;
    } else if (this.Keyboard.isDown(KeyboardService.RIGHT)) {
      dirx = 1;
    } else if (this.Keyboard.isDown(KeyboardService.UP)) {
      diry = -1;
    } else if (this.Keyboard.isDown(KeyboardService.DOWN)) {
      diry = 1;
    }

    this.player.move(delta, dirx, diry);
    this.camera.update();
  }

  drawLayer(layer: number) {
    let startCol = Math.floor(this.camera.x / this.map.tsize);
    let endCol = startCol + (this.camera.width / this.map.tsize);
    let startRow = Math.floor(this.camera.y / this.map.tsize);
    let endRow = startRow + (this.camera.height / this.map.tsize);
    let offsetX = -this.camera.x + startCol * this.map.tsize;
    let offsetY = -this.camera.y + startRow * this.map.tsize;

    for (let c = startCol; c <= endCol; c++) {
      for (let r = startRow; r <= endRow; r++) {
        let tile = this.map.getTile(layer, c, r);
        let x = (c - startCol) * this.map.tsize + offsetX;
        let y = (r - startRow) * this.map.tsize + offsetY;

        if (tile !== 0) {
          this.ctx.drawImage(
            this.tileAtlas,
            (tile - 1) * this.map.tsize,
            0,
            this.map.tsize,
            this.map.tsize,
            Math.round(x),
            Math.round(y),
            this.map.tsize,
            this.map.tsize
          );
        }
      }
    }
  }

  run(context: CanvasRenderingContext2D) {
    this.ctx = context;
    this.previousElapsed = 0;

    let p = this.load();
    Promise.all(p).then(function(loaded) {
      this.init();
      window.requestAnimationFrame(this.tick);
    }.bind(this));
  }

  tick(elapsed: number) {
    window.requestAnimationFrame(this.tick);

    this.ctx.clearRect(0, 0, 512, 512);

    let delta = (elapsed - this.previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25);
    this.previousElapsed = elapsed;

    this.update(delta);
    this.render();
  }

  render() {
    this.drawLayer(0);

    this.ctx.drawImage(
      this.player.image,
      this.player.screenX = this.player.width / 2,
      this.player.screenY - this.player.height / 2
    );

    this.drawLayer(1);
    this.drawGrid();
  }

  drawGrid() {
    let width = this.map.cols * this.map.tsize;
    let height = this.map.rows * this.map.tsize;
    let x, y;

    for (let r = 0; r < this.map.rows; r++) {
      x = -this.camera.x;
      y = r * this.map.tsize - this.camera.y;

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(width, y);
      this.ctx.stroke();
    }

    for (let c = 0; c < this.map.cols; c++) {
      x = c * this.map.tsize - this.camera.x;
      y = -this.camera.y;

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x, height);
      this.ctx.stroke();
    }
  }

}

*/


@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css'],
//  providers: [LoaderService, KeyboardService]
})
export class Game1Component implements OnInit {

  game: Game;
  items: FirebaseListObservable<any>;
  results: Array<string> = [];

  FORWARD = "FWRD";
  BACKWARD = "BWRD";
  TURNRIGHT = "TUNR";
  TURNLEFT = "TUNL";

  constructor(
    private af: AngularFire,
//    private miro: Miro
  ) {
    this.items = af.database.list('/server/member/mory/keyvalue/separatedKeys', { preserveSnapshot: true });

    this.items.subscribe((snapshots) => {
      this.results = [];
      snapshots.forEach((snapshot) => {
        console.log(snapshot.key, snapshot.val());
        this.results.push(snapshot.val());
      });
      console.log(this.results);
    });
        
  }

  ngOnInit(): void {
    this.game = Game1;
  }

  onChange(): void {
    console.log("디비 내용 변함!!");
  }

}

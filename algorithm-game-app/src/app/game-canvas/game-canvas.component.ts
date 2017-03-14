import { Component, ViewChild, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';

import { map } from './map';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit, AfterViewInit {

  private size: number;

  private tileAtlas: HTMLImageElement;
  private player: HTMLImageElement;

  playerX: number = 1;
  playerY: number = 7;

  @ViewChild("gameCanvas")
  gameCanvas: ElementRef;

  constructor() {
    this.size = 512;
  }

  ngOnInit() {
    this.tileAtlas = new Image();
    this.tileAtlas.src = "../../assets/images/tiles.png";
    
    this.player = new Image();
    this.player.src = "../../assets/images/player.png";
  }

  ngAfterViewInit() {
    let ctx: CanvasRenderingContext2D = this.gameCanvas.nativeElement.getContext("2d");
    
    let background = this.tileAtlas;
    background.onload = function() {
      for (let c = 0; c < map.cols; c++) {
        for (let r = 0; r < map.rows; r++) {
          let tile = map.getTile(0, c, r);
          if (tile != 0) {
            ctx.drawImage(
              background,
              (tile - 1) * map.tsize,
              0,
              map.tsize,
              map.tsize,
              c * map.tsize,
              r * map.tsize,
              map.tsize,
              map.tsize
            )
          }
        }
      }
    }
    /*
    let p = this.player;
    p.onload = function() {
      ctx.drawImage(
        p,
        (map.getTile(1, 1, 7) - 1) * map.tsize,
        0,
        map.tsize,
        map.tsize,
        1 * map.tsize,
        7 * map.tsize,
        map.tsize,
        map.tsize
      )
    }
    */
  }

  getSize() {
    return this.size;
  }

  @Input()
  setSize(newValue: number) {
    this.size = Math.floor(newValue);
  }

}

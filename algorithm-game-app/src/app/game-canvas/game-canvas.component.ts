import { Component, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

import { map } from './map';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements AfterViewInit {

  private size: number;

  @ViewChild("gameCanvas")
  gameCanvas: ElementRef;

  constructor() {
    this.size = 512;
  }

  ngAfterViewInit() {
    let ctx: CanvasRenderingContext2D = this.gameCanvas.nativeElement.getContext("2d");
    
    let tileAtlas = new Image();
    tileAtlas.src = "../../assets/images/tiles.png";
    tileAtlas.onload = function() {
      for (let c = 0; c < map.cols; c++) {
        for (let r = 0; r < map.rows; r++) {
          let tile = map.getTile(0, c, r);
          if (tile != 0) {
            ctx.drawImage(
              tileAtlas,
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
      for (let c = 0; c < map.cols; c++) {
        for (let r = 0; r < map.rows; r++) {
          let tile = map.getTile(1, c, r);
          if (tile != 0) {
            ctx.drawImage(
              tileAtlas,
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
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 512, 512);
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

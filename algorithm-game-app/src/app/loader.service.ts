import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  images = {};

  constructor() { }

  loadImage(key, src: string) {
    let img = new Image();
    let d = new Promise(function(resolve, reject) {
      img.onload = function() {
        this.images[key] = img;
        resolve(img);
      }.bind(this);

      img.onerror = function() {
        reject(`불러올 수 없는 이미지: ${src}`);
      };
    }.bind(this));

    img.src = src;
    return d;
  }

  getImage(key) {
    return (key in this.images) ? this.images[key] : null;
  }

}

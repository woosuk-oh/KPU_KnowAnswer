import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { Game } from '../game'
import { Game1 } from '../game.data';

import { AngularFire, FirebaseListObservable, FirebaseListFactory } from 'angularfire2';
import { Observable } from 'rxjs';

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
  deg = 0;

  x = 0;
  y = 0;

  subCount = 0;

  rt = `rotate(${this.deg}deg)`;
  tx = `translateX(${this.x}px)`;
  ty = `translateY(${this.y}px)`;

  style = `${this.rt} ${this.tx} ${this.ty}`;

  @Input()
  currentStyles: {};

  FORWARD = "FWRD";
  BACKWARD = "BWRD";
  TURNRIGHT = "TUNR";
  TURNLEFT = "TUNL";

  isTutorialOneFinished: boolean;
  isTutorialTwoFinished: boolean;
  isTutorialThreeFinished: boolean;
  isStarted: boolean;

  stream;

  constructor(
    private af: AngularFire,
//    private miro: Miro
  ) {
    // this.stream = Observable.interval(1000).take(10);
    this.items = af.database.list('/server/member/mory/keyvalue/separatedKeys', { preserveSnapshot: true });
  }

  ngOnInit(): void {
    this.game = Game1;
    this.isTutorialOneFinished = false;
    this.isTutorialTwoFinished = false;
    this.isTutorialThreeFinished = false;
    this.isStarted = false;

    // TODO:: 하나의 스트림마다 딜레이를 주어야 함??? 아마도.. 근데 이건 안먹힐 거임
    this.items.delay(500).subscribe((snapshots) => {
      this.results = [];
      snapshots.forEach((snapshot) => {
        console.log(snapshot.key, snapshot.val());
        this.results.push(snapshot.val());
      });
      let str = this.results.toString();

      if (!(this.isTutorialThreeFinished) && (this.isStarted)) {
        // 튜토리얼 1 클리어 체크
        // 앞으로
        if (this.results[1] == "FWRD" && this.results[2] == "0") {
          this.isTutorialOneFinished = true;
          console.log("튜토리얼 1 클리어");
        }

        // 튜토리얼 2 클리어 체크
        // 앞으로, 오른쪽회전
        if (this.isTutorialOneFinished) {
          if (this.results[2] == "TUNR" && this.results[3] == "0") {
            this.isTutorialTwoFinished = true;
            console.log("튜토리얼 2 클리어");
          }
        }

        // 튜토리얼 3 클리어 체크
        // 앞으로, 오른쪽회전, 뒤로
        if (this.isTutorialTwoFinished) {
          if (this.results[3] == "BWRD" && this.results[4] == "0") {
            this.isTutorialThreeFinished = true;
            console.log("튜토리얼 3 클리어");
          }
        }
      } else {
        this.subCount++;
        this.results.forEach((value: string, index: number, array: string[]) => {
          switch(value) {
            case "FWRD":
              // 위로 움직이려면  translateY 더하자
              // 오른쪽으로 움직이려면  translateX 더하자 단위는 픽셀
              console.log("FWRD 정상적으로 움직임!", this.subCount);
              this.y -= 64 / (this.subCount);
              break;

            case "BWRD":
              console.log("BWRD 정상적으로 움직임!", this.subCount);
              this.y += 64 / (this.subCount);
              break;

            case "TUNR":
              console.log("TUNR 정상적으로 움직임!", this.subCount);
              this.deg += 90;
              break;

            case "TUNL":
              console.log("TUNL 정상적으로 움직임!", this.subCount);
              this.deg -= 90;
              break;
          }

          setTimeout(function() {
            console.log("1초쯤 쉬어도 괜찮겠지?");
          }, 1);
          this.setCurrentStyles();
        })
      }
      console.log("subCount: ", this.subCount);
      console.log(str);
    });
    this.subCount = 0;
  }

  start(): void {
    alert("게임 시작!!");
    this.isStarted = true;
  }

  skipTutorial(): void {
    this.isStarted = true;
    this.isTutorialOneFinished = true;
    this.isTutorialTwoFinished = true;
    this.isTutorialThreeFinished = true;
  }

  setCurrentStyles() {
    this.currentStyles = {
      'transform': `
        rotate(${this.deg}deg) 
        translateX(${this.x}px)
        translateY(${this.y}px)`
    };
  }

}

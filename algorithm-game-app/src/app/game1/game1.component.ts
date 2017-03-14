import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Game } from '../game'
import { Game1 } from '../game.data';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  isTutorialOneFinished: boolean;
  isTutorialTwoFinished: boolean;
  isTutorialThreeFinished: boolean;
  isStarted: boolean;

  @ViewChild("gamePlayer")
  gamePlayer: ElementRef;

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
      let str = this.results.toString();
      
      if (!(this.isTutorialThreeFinished)) {
        // 튜토리얼 1 클리어 체크
        // 앞으로
        if (str == "mory,FWRD,0,0,0,0,0,0,0,0,0") {
          this.isTutorialOneFinished = true;
          console.log("튜토리얼 1 클리어");
        }

        // 튜토리얼 2 클리어 체크
        // 앞으로, 오른쪽회전
        if (this.isTutorialOneFinished) {
          if (str == "mory,FWRD,TUNR,0,0,0,0,0,0,0,0") {
            this.isTutorialTwoFinished = true;
            console.log("튜토리얼 2 클리어");
          }
        }

        // 튜토리얼 3 클리어 체크
        // 앞으로, 오른쪽회전, 뒤로
        if (this.isTutorialTwoFinished) {
          if (str == "mory,FWRD,TUNR,BWRD,0,0,0,0,0,0,0") {
            this.isTutorialThreeFinished = true;
            console.log("튜토리얼 3 클리어");
          }
        }
      } else {
        
        this.results.forEach((value: string, index: number, array: string[]) => {
          switch(value) {
            case "FWRD":
              // 위 보고 있으면
              this.gamePlayer.nativeElement.style.transform = `translateY(${300})`;
              break;
            case "BWRD":
              break;
            case "TUNR":
              this.gamePlayer.nativeElement.style.transform = `rotate(${90}deg)`;
              break;
            case "TUNL":
              this.gamePlayer.nativeElement.style.transform = `rotate(${-90}deg)`;
              break;
          }
        })
      }
      console.log(str);
    });
  }

  ngOnInit(): void {
    this.game = Game1;
    this.isTutorialOneFinished = false;
    this.isTutorialTwoFinished = false;
    this.isTutorialThreeFinished = false;
    this.isStarted = false;
  }

  start(): void {
    alert("게임 시작!!");
    this.isStarted = true;
  }

}

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
  deg = 0;
  
  x = 0;
  y = 0;

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
        
        console.log(this.gamePlayer.nativeElement);
        this.results.forEach((value: string, index: number, array: string[]) => {
          switch(value) {
            case "FWRD":
            // 위로 움직이려면  translateY 더하자
              // 오른쪽으로 움직이려면  translateX 더하자 단위는 픽셀 
              console.log("FWRD 정상적으로 움직임!");
              this.y -= 64;
              this.gamePlayer.nativeElement.style.transform = `translateY(${this.y}px)`;
              break;

            case "BWRD":
              console.log("BWRD 정상적으로 움직임!");     
              this.y += 64;
              this.gamePlayer.nativeElement.style.transform = `translateY(${this.y}px)`;
              break;

            case "TUNR":
              console.log("TUNR 정상적으로 움직임!");
              this.deg += 90;
              this.gamePlayer.nativeElement.style.transform = `rotate(${this.deg}deg)`;
              break;

            case "TUNL":
              console.log("TUNL 정상적으로 움직임!");
              this.deg -= 90;
              this.gamePlayer.nativeElement.style.transform = `rotate(${this.deg}deg)`;
              break;
          }

          setTimeout(function() {
            console.log("1초쯤 쉬어도 괜찮겠지?");
          }, 1000);
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

  skipTutorial(): void {
    this.isStarted = true;
    this.isTutorialOneFinished = true;
    this.isTutorialTwoFinished = true;
    this.isTutorialThreeFinished = true;
  }

}

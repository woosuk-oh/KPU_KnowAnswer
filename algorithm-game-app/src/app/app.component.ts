import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Game } from './game';

const Games: Game[] = [
  { id: 1, detail: `
   ① 등록금 환불은 학점당 단가로 책정되는 산업대 학생 및 일반대 학생중 수업연한 초과자만 해당됩니다. 기존에 등록금 환불시 서류를 해당부서에 내는 번거로움과 부모명의 계좌 제출에
         따른 민원이 발생되어 학생들이 입력한 등록금 환불계좌로 반환처리가
         되겠습니다. 따라서 등록금 반환을 악용하는 일이 없도록 당부 부탁드립니다.
     `, imageUrl: "../assets/images/1.png" },
  { id: 2, detail: "두 번째 게임 설명", imageUrl: "../assets/images/2.png" },
  { id: 3, detail: "세 번째 게임 설명", imageUrl: "../assets/images/3.png" },
  { id: 4, detail: "네 번째 게임 설명", imageUrl: "../assets/images/4.png" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "알고리즘 게임을 해볼까?";
  items: FirebaseListObservable<any[]>;

  selectedGame: Game;
  games: Game[];

  constructor(private af: AngularFire, private router: Router) {
    this.items = af.database.list('/server/member/mory/keyvalue/separatedKeys');
    this.games = Games;
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
    this.playGame();
  }

  playGame():void {
    this.router.navigate(['game', this.selectedGame.id]);
  }
}

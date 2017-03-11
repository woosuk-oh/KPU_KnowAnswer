import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

const Games = [
  { detail: "첫 번째 게임 설명", image: "첫 번째 사진" },
  { detail: "두 번째 게임 설명", image: "두 번째 사진" },
  { detail: "세 번째 게임 설명", image: "세 번째 사진" },
  { detail: "네 번째 게임 설명", image: "네 번째 사진" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  games;

  constructor(af: AngularFire) {
    this.items = af.database.list('/server/member/mory/keyvalue/separatedKeys');
    this.games = Games;
  }
}

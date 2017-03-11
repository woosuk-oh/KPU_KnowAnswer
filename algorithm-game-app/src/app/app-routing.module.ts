import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * TODO:: import Component to route
 * import { ... } from '(component path)';
 */
import { GameComponent } from './game/game.component';

/**
 * TODO:: Add routes
 * { path: '(routing-path)', componenet: (Component) }
 */
const routes: Routes = [
  { path: 'game/:id', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StageComponent } from './stage/stage.component';

const routes: Routes = [
  /**
   * TODO:: Add routes
   * { path: '(routing-path)', componenet: (Component) }
   */
  { path: 'stage', component: StageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


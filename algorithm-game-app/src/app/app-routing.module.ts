import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * TODO:: import Component to route
 * import { ... } from '(component path)';
 */

const routes: Routes = [
  /**
   * TODO:: Add routes
   * { path: '(routing-path)', componenet: (Component) }
   */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * TODO:: import Component to route
 * import { ... } from '(component path)';
 */

/**
 * TODO:: Add routes
 * { path: '(routing-path)', componenet: (Component) }
 */
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


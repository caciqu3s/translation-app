import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherPageComponent } from './pages/another-page/another-page.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplePageComponent
  },
  {
    path: 'another',
    component: AnotherPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

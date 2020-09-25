import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { AnotherPageComponent } from './pages/another-page/another-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent,
    AnotherPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

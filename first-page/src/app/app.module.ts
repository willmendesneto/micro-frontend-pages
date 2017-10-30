import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', redirectTo: '/first', pathMatch: 'full' },
      { path: 'first', component: MainComponent, pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

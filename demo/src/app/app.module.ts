import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {MovielistService} from './services/movielist/movielist.service';

//import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [MovielistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

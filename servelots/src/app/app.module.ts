import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { ServelotsComponent } from './servelots/servelots.component';
import { JanastuComponent } from './janastu/janastu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CONST_ROUTING} from './app.routing';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServelotsComponent,
    JanastuComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CONST_ROUTING,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

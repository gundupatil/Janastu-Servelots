import { Routes, RouterModule } from '@angular/router';
import { ServelotsComponent } from "./servelots/servelots.component";
import { JanastuComponent } from "./janastu/janastu.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/servelots', pathMatch: 'full' },
    { path: 'servelots', component: ServelotsComponent },
    { path: 'janastu', component: JanastuComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ImdbComponent} from './imdb/imdb.component';
import {FormsModule} from '@angular/forms';
import {ImdbService} from './imdb/services/imdb.service';
import {HttpClientModule} from '@angular/common/http';
import {CelebDetailComponent} from './imdb/celeb-detail/celeb-detail.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, ImdbComponent, CelebDetailComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserAnimationsModule, MatProgressSpinnerModule, MatInputModule],
  providers: [ImdbService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

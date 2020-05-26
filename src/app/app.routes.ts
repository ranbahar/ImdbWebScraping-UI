import {Routes} from '@angular/router';
import {ImdbComponent} from './imdb/imdb.component';
import {CelebDetailComponent} from './imdb/celeb-detail/celeb-detail.component';
import {ImdbDetailGuard} from './imdb/imdb-detail.guard';


export const appRoutes: Routes = [
  {path: 'celebs', component: ImdbComponent},
  {path: 'celebs/:id', component: CelebDetailComponent, canActivate: [ImdbDetailGuard]},
  {path: '', redirectTo: 'celebs', pathMatch: 'full'},
  {path: '**', redirectTo: 'celebs', pathMatch: 'full'}
];

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  //   <div><h1>{{title}}</h1>
  //     <app-imdb></app-imdb>
  //   </div>
  // `,

      `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{title}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/celebs']">Home</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `,


// templateUrl: './app.component.html',
// styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'IMDB Top 100 Celebs';
}

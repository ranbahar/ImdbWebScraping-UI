import {Component, OnInit} from '@angular/core';
import {ICeleb} from '../../types/ICeleb';
import {ActivatedRoute, Router} from '@angular/router';
import {Gender} from '../../types/Gender';
import {ImdbService} from '../services/imdb.service';

@Component({
  // selector: 'app-celeb-detail',
  templateUrl: './celeb-detail.component.html',
  styleUrls: ['./celeb-detail.component.css', '/src/app/imdb/imdb.component.css']
})
export class CelebDetailComponent implements OnInit {
  pageTitle = 'Celeb Detail';
  celeb: ICeleb;
  isEdit = false;
  isSpinnerOn = false;

  // private errorMessage = 'error';

  constructor(private route: ActivatedRoute, private imdbService: ImdbService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCelebById(+this.route.snapshot.paramMap.get('id'));
  }

  getCelebById(id: number) {

    this.pageTitle += ` ID: ${id}`;

    this.imdbService.getCeleb(id).subscribe(data => {
      this.celeb = data;
    });
  }

  update() {
    this.isSpinnerOn = true;
    this.imdbService.update(this.celeb).subscribe(data => {
      this.celeb = data;
      this.isEdit = false;
      this.isSpinnerOn = false;
    });
  }

  onBack(): void {
    this.isEdit = false;
    this.router.navigate(['/celebs']);
  }

  onEdit(): void {
    this.isEdit = true;
  }
}

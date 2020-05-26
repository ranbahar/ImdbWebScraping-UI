import {Component, OnInit} from '@angular/core';
import {ICeleb} from '../types/ICeleb';
import {ImdbService} from './services/imdb.service';
import {Router} from '@angular/router';

@Component({
  // selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent implements OnInit {


  // tslint:disable-next-line:variable-name
  private _celebFilter: string;
  // tslint:disable-next-line:variable-name
  private _imdbService: ImdbService;
  filterCelebs: ICeleb[];
  celebsList: ICeleb[] = [];
  errorMessage: string;
  isSpinnerOn = false;

  constructor(imdbService: ImdbService, private router: Router) {
    this._imdbService = imdbService;
    this.celebFilter = '';
  }


  get celebFilter(): string {
    return this._celebFilter;
  }

  set celebFilter(value: string) {
    this._celebFilter = value;
    this.filterCelebs = this.celebFilter ? this.performFilter(this.celebFilter) : this.celebsList;
  }

  ngOnInit(): void {
    this.getCelebList();
  }

  private getCelebList() {
    this.errorMessage = '';
    if (this.celebsList) {
      this._imdbService.getCelebrities().subscribe({
        next: celebs => {
          this.celebsList = celebs;
          this.filterCelebs = this.celebsList;
        },
        error: err => this.errorMessage = err
      });
    }
  }

  performFilter(filterBy: string): ICeleb[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.celebsList.filter((celeb: ICeleb) =>
      celeb.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  removeCeleb(id: number): void {
    this._imdbService.removeCeleb(id).subscribe(() => this.getCelebList());
  }

  reloadList() {
    this.errorMessage = '';
    this.isSpinnerOn = true;
    this._imdbService.getCelebrities(true).subscribe({
      next: celebs => {
        this.celebsList = celebs;
        this.filterCelebs = this.celebsList;
        this.isSpinnerOn = false;
      },
      error: err => {
        this.errorMessage = err;
        this.isSpinnerOn = false;
      }
    });
  }

  removeErrorMsg() {
    this.errorMessage = '';
  }
}

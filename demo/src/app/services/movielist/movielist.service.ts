import { Injectable } from '@angular/core';

@Injectable()
export class MovielistService {
  listItems: any[]=['Movieone', 'Movietwo', 'Moviethree'];
  constructor() { }
  getMovies(){
    return this.listItems;
  }

}

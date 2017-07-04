import { Component, OnInit } from '@angular/core';
import{MovielistService} from '../services/movielist/movielist.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  srcpath: string="assets/images/IndianViralNews.jpg";
  title: string="Testing directives and Binding";
 listItems: any[];  
 user: string="Testing Attribute Directive";
 constructor(private _movielist: MovielistService) {
    this.listItems=this._movielist.getMovies();
   }

  ngOnInit() {
  }
  onselect(){
    console.log('Button Clicked');
  }

}

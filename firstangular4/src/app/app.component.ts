import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  obj= {
    id:"1",
    name:"Danny"

  }
  arr=["abc","def","ghi"];
  isTrue=true;
  myName="Danny";
  items=["Angular4","ReactJS","UnderScore"];
  newItem="";
  pushItem=function(){
    if(this.newItem!=""){
      this.items.push(this.newItem);
      this.newItem="";
    }

  }
  removeItem=function(index){
     this.items.splice(index,1);
    }
}

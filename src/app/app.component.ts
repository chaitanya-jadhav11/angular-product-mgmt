import {Component } from '@angular/core';

@Component({
  selector: 'pm-root',
 // templateUrl: './app.component.html',
 template: `
 <div><h1>{{title}}</h1></div>
 <div>My first compoment</div>
 ` ,
})

// styleUrls: ['./app.component.css']
export class AppComponent {
  title = 'Product Management';
}

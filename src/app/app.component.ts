import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
`
  // <app-customers></app-customers>
  // styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'my-appee';

  constructor() { }

  ngOnInit() {

  }
}

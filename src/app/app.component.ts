import { Component } from '@angular/core';

import { WistItem } from 'src/shared/models/wistItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    new WistItem('Learn Angular'),
    new WistItem('Get coffe', true),
    new WistItem('Find grass that cuts itself')
  ];
  title = 'angular-learning';
}

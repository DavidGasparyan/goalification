import { Component } from '@angular/core';

@Component({
  selector: 'goalification-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui';
  links = [
    {
      route: ['/'],
      description: 'Home',
    },
    {
      route: ['/goals'],
      description: 'Goals',
    },
    {
      route: ['/approves'],
      description: 'Approves',
    },
  ]

  getYear() {
    const date = new Date();

    return date.getFullYear();
  }

  showInfo(link: any) {

  }
}

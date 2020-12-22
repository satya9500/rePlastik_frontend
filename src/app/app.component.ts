import { Component } from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService) {
  }
  public title = 'rePlastik';
  public items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home'
    },
    {
      title: 'Let\'s Recycle',
      icon: 'layers-outline',
      link: '/recycle'
    },
    {
      title: 'My Recycle History',
      icon: 'archive-outline',
      link: '/history'
    },
    {
      title: 'My Rewards',
      icon: 'award-outline',
      link: '/rewards'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: '/logout'
    },
  ];
  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}

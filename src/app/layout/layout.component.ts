import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) {
  }
  public items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: '/profile'
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

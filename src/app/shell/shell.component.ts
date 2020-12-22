import { Component, OnInit } from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';
import {NbAuthService} from '@nebular/auth';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  constructor(private sidebarService: NbSidebarService, private authService: NbAuthService) {
  }
  user: any;
  public title = 'rePlastik';
  public items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/app/home'
    },
    {
      title: 'Let\'s Recycle',
      icon: 'layers-outline',
      link: '/app/recycle'
    },
    {
      title: 'My Recycle History',
      icon: 'archive-outline',
      link: '/app/history'
    },
    {
      title: 'My Rewards',
      icon: 'award-outline',
      link: '/app/rewards'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: '/auth/logout'
    },
  ];

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.authService.onTokenChange()
      .subscribe((token) => {
        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
        }
        console.log(this.user);
      });
  }

  toggle(): any {
    this.sidebarService.toggle(true);
    return false;
  }

}

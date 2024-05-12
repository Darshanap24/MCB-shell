import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MCB_Shell';

  menuList = [
    {
      id: 1,
      title: 'Explore',
      target: 'home',
      active: true,
      hovered: false,
      collapsed: false,
      icon: 'assets/images/placeholder_icon.svg',
      activeIcon: 'assets/images/placeholder_icon_active.svg',
    },
    {
      id: 2,
      title: 'Anatomy',
      target: 'anatomy',
      active: false,
      hovered: false,
      collapsed: false,
      icon: 'assets/images/placeholder_icon.svg',
      activeIcon: 'assets/images/placeholder_icon_active.svg',
    },
    {
      id: 3,
      title: 'Grids',
      target: 'grid',
      active: false,
      hovered: false,
      collapsed: false,
      icon: 'assets/images/placeholder_icon.svg',
      activeIcon: 'assets/images/placeholder_icon_active.svg',
    },
    {
      id: 4,
      title: 'Login',
      target: 'login',
      active: false,
      hovered: false,
      collapsed: false,
      icon: 'assets/images/placeholder_icon.svg',
      activeIcon: 'assets/images/placeholder_icon_active.svg',
    },
    {
      id: 5,
      title: 'Side bar',
      target: 'sidebar',
      active: false,
      hovered: false,
      collapsed: false,
      icon: 'assets/images/placeholder_icon.svg',
      activeIcon: 'assets/images/placeholder_icon_active.svg',
    },
    {
      id: 6,
      title: 'Single column',
      target: 'single-column',
      active: false,
      hovered: false,
      collapsed: false,
      icon: 'assets/images/placeholder_icon.svg',
      activeIcon: 'assets/images/placeholder_icon_active.svg',
    },
  ];

  constructor(public router: Router) {}

  menuClicked(event: any) {
    this.router.navigate([event.target]);
  }
}

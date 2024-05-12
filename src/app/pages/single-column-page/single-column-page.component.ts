import { Component, OnInit } from '@angular/core';

type Tabs = {
  id: number;
  title: string;
  link: string;
  count: number;
  active: boolean;
  disabled: boolean;
};

@Component({
  selector: 'app-single-column-page',
  templateUrl: './single-column-page.component.html',
  styleUrls: ['./single-column-page.component.scss'],
})
export class SingleColumnPageComponent implements OnInit {
  tabItems: Tabs[] = [
    {
      id: 1,
      title: 'Explore',
      link: '#',
      active: true,
      disabled: false,
      count: 0,
    },
    {
      id: 2,
      title: 'Code',
      link: '#',
      active: true,
      disabled: false,
      count: 0,
    },
    {
      id: 3,
      title: 'Submit a query',
      link: '#',
      active: true,
      disabled: false,
      count: 0,
    },
  ];

  currentActiveTab: any;

  constructor() {}

  ngOnInit(): void {}
}

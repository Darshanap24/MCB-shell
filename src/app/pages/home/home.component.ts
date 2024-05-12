import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ds_tiles: any = [
    {
      title: 'MCB Web',
      description:
        'Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/icons/logo-mcb-icon-default.svg',
      color: '#DC143D',
    },
    {
      title: 'MCB Imagery',
      description:
        'Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/icons/logo-mcb-icon-default.svg',
      color: '#49BEAA',
    },
    {
      title: 'MCB Native',
      description:
        'Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/icons/logo-mcb-icon-default.svg',
      color: '#1971C2',
    },
    {
      title: 'MCB Voice and Tone',
      description:
        'Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/icons/logo-mcb-icon-default.svg',
      color: '#2E3031',
    },
  ];

  ds_templates: any = [
    {
      title: 'MCB Web Templates',
      description:
        'Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/icons/logo-mcb-icon-default.svg',
      color: '#FFFFFF',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

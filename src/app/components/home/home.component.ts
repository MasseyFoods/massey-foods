import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Paths } from 'src/app/app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public get Paths() {
    return Paths;
  }
  
  constructor(
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Welcome to Massey Foods');
    this.meta.updateTag({
      'description': 'Massey Foods - home'
    });
  }
}

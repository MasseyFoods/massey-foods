import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Paths } from 'src/app/app-routing.module';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public get Paths() {
    return Paths;
  }

  constructor(
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Frequently Asked Questions');
    this.meta.updateTag({
      'description': 'Massey Foods - faq'
    });
  }
}

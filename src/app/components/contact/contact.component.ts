import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Paths } from 'src/app/app-routing.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public get Paths() {
    return Paths;
  }

  constructor(
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Ready to Order?');
    this.meta.updateTag({
      'description': 'Massey Foods - contact'
    });
  }
}

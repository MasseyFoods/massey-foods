import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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

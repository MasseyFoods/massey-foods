import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map } from 'rxjs/operators';

import { Paths } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public background: string = "./assets/images/background.jpeg";
  public backgroundMin: string = "./assets/images/background-min.jpeg";
  public logo: string = "./assets/images/logo.png";
  public logoMin: string = "./assets/images/logo-min.png";

  public get Paths(): typeof Paths {
    return Paths;
  }

  public get isHandset$(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }

  constructor(private breakpointObserver: BreakpointObserver) { }
}

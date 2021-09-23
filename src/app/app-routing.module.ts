import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';

export enum Paths {
  contact = 'contact',
  catalog = 'catalog',
  faq = 'faq',
  home = '',
}

const routes: Routes = [
  { path: Paths.contact, component: ContactComponent },
  { path: Paths.catalog, component: CatalogComponent },
  { path: Paths.faq, component: FaqComponent },
  { path: Paths.home, component: HomeComponent },
  { path: 'home', redirectTo: Paths.home },
  { path: 'index', redirectTo: Paths.home },
  { path: '**', redirectTo: Paths.home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

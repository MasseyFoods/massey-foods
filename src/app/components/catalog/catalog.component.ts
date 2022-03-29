import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title, Meta } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { Paths } from 'src/app/app-routing.module';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, AfterViewInit {
  public get Paths() {
    return Paths;
  }

  public displayedColumns: string[] = ['name', 'desc', 'price'];
  public catalog: Catalog | undefined;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  public filter: string = '';

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private title: Title,
    private meta: Meta,
    private http: HttpClient
  ) { }

  public ngOnInit(): void {
    this.title.setTitle('Food Catalog');
    this.meta.updateTag({
      'description': 'Massey Foods - catalog'
    });
  }

  public ngAfterViewInit(): void {
    this.catalog = new Catalog(this.http);
    this.catalog.getCatalog().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public applyFilter() {
    this.dataSource.filter = this.filter.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }

  public clear() {
    this.filter = '';
    this.applyFilter();
  }

  public onPaginateChange() {
    const matTable = document.getElementById('matTable');
    matTable?.scrollIntoView();
  }
}

export class Catalog {
  constructor(private http: HttpClient) { }

  public getCatalog(): Observable<any[]> {
    const jsonLocation: string = 'assets/data/products.json';
    return this.http.get<any[]>(jsonLocation);
  }
}

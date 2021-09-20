import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'desc', 'price'];
  catalog: Catalog | undefined;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  isLoading = true;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.catalog = new Catalog(this.http);
    this.catalog.getCatalog().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export class Catalog {
  constructor(private http: HttpClient) { }

  getCatalog(): Observable<any[]> {
    const jsonLocation: string = 'assets/data/products.json';

    return this.http.get<any[]>(jsonLocation);
  }
}
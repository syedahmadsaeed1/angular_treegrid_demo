import { Component, OnInit } from '@angular/core';
import { VirtualScrollService } from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './datasource';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: "./app.component.html",
  providers: [VirtualScrollService]
})
export class AppComponent implements OnInit {
  public data: Object[] = [{}];

  ngOnInit(): void {
    dataSource();
    this.data = virtualData;
  }
}
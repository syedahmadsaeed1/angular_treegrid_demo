

import { Component, OnInit } from '@angular/core';
import { VirtualScrollService, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './datasource';
import { ContextMenuService, EditService, SortService, ResizeService } from '@syncfusion/ej2-angular-grids';
import { ContextMenuItem, EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: "./app.component.html",
  providers: [VirtualScrollService, ContextMenuService, EditService, SortService, ResizeService]
})
export class AppComponent implements OnInit {
  public data: Object[] = [{}];
  public editSettings: EditSettingsModel = {};
  public contextMenuItems: ContextMenuItem[] = [];

  ngOnInit(): void {
    dataSource();

    this.data = virtualData;
    this.editSettings = {
      allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Dialog", showConfirmDialog: true,
      showDeleteConfirmDialog: true
    };
    this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Edit', 'Delete', 'Save', 'Cancel'];
  }
}
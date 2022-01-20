

import { Component, OnInit, ViewChild } from '@angular/core';
import { VirtualScrollService, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './datasource';
import { ContextMenuService, EditService, SortService, ResizeService } from '@syncfusion/ej2-angular-grids';
import { ContextMenuItem, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: "./app.component.html",
  providers: [VirtualScrollService, ContextMenuService, EditService, SortService, ResizeService]
})
export class AppComponent implements OnInit {
  public data: Object[] = [{}];
  public editSettings: object = {};
  public contextMenuItems: any;
  @ViewChild('treegrid')
  //@ts-ignore
  public treeGridObj: TreeGridComponent;

  ngOnInit(): void {
    dataSource();

    this.data = virtualData;
    this.editSettings = {
      allowEditing: true, allowAdding: true, allowDeleting: true, mode: "column", showConfirmDialog: true,
      showDeleteConfirmDialog: true
    };
    this.contextMenuItems = [
      { text: 'Add Next', target: '.e-content', id: 'next' },
      { text: 'Add Child', target: '.e-content', id: 'child' },
      { text: 'Multi Select', target: '.e-content', id: 'multi' },
      { text: 'Copy Rows', target: '.e-content', id: 'copy' },
      { text: 'Cut Rows', target: '.e-content', id: 'cut' },
      { text: 'Paste Next', target: '.e-content', id: 'paste-next' },
      { text: 'Paste Child', target: '.e-content', id: 'paste-child' },
      'SortAscending', 'SortDescending', 'Edit', 'Delete', 'Filter'
    ];
  }

  contextMenuClick(args?: MenuEventArgs): void {
    this.treeGridObj.getColumnByField('taskID');
    debugger
    if (args?.item.id === 'collapserow') {
      this.treeGridObj.collapseRow(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
    } else {
      this.treeGridObj.expandRow(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
    }
  }

  contextMenuOpen(arg: BeforeOpenCloseEventArgs): void {
    let elem = arg.event.target as Element;
    let uid = elem.closest('.e-row')!.getAttribute('data-uid');
    let test = getValue('hasChildRecords', this.treeGridObj.grid.getRowObjectFromUID(uid!).data)
    debugger
    if (isNullOrUndefined(test)) {
      document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + 'none' + ';');
      document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + 'none' + ';');
    } else {
      let flag: boolean = getValue('expanded', this.treeGridObj.grid.getRowObjectFromUID(uid!).data);
      let val: string = flag ? 'none' : 'block';
      document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
      val = !flag ? 'none' : 'block';
      document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
    }
  }
}
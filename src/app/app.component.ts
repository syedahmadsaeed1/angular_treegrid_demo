

import { Component, OnInit, ViewChild } from '@angular/core';
import { VirtualScrollService, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './datasource';
import { ContextMenuService, EditService, SortService, ResizeService, GridComponent } from '@syncfusion/ej2-angular-grids';
import { ContextMenuItem, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';
import { ContextMenuComponent } from '@syncfusion/ej2-angular-navigations';
import { DialogComponent, ButtonPropsModel } from '@syncfusion/ej2-angular-popups';

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
  @ViewChild('edit_dialog')
  //@ts-ignore
  public editDialog: DialogComponent;
  public visible: Boolean = false;
  public hidden: Boolean = false;
  public showCloseIcon: Boolean = false;
  public confirmCloseIcon: Boolean = true;
  public animationSettings: Object = { effect: 'None' };
  public hide: any;
  public target: string = '.control-section';
  public alertWidth: string = '250px';
  public confirmWidth: string = '400px';
  public promptWidth: string = '330px';
  public position: any = { X: 100, Y: 100 };
  public promptHeader: string = 'Join Wi-Fi network';
  @ViewChild('treegrid')
  //@ts-ignore
  public treeGridObj: TreeGridComponent;

  @ViewChild('grid')
  public grid: any;
  @ViewChild('contextmenu')
  public contextmenu: any;
  @ViewChild('headercontextmenu')
  public headercontextmenu: any;
  public selectitem: string[] = [''];
  public headermenuItems: MenuItemModel[] = [
    {
      text: 'Edit Column',
      id: 'edit'
    },
    {
      text: 'New Column',
      id: 'new'
    },
    {
      text: 'Delete Column',
      id: 'delete'
    },
    {
      text: 'Choose Column',
      id: 'choose'
    },
    {
      text: 'Freeze Column',
      id: 'freeze'
    },
    {
      text: 'Filter Column',
      id: 'filter'
    },
    {
      text: 'Multi-Sort',
      id: 'sort'
    }
  ];

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
      'Edit', 'Delete', 'Filter'
    ];
  }

  rowContextMenuClick(args: MenuEventArgs): void {
    if (args.item.id === 'next') {
      //@ts-ignore
      this.treeGridObj.addRecord(this.treeGridObj.getSelectedRecords()[0], 'Next');
    }
    // if (args.item.id === 'child') {
    //   //@ts-ignore
    //   this.treeGridObj.addRecord(this.treeGridObj.getSelectedRecords()[0], 'Child');
    // }
    // if (args.item.id === 'multi') {
    //   //@ts-ignore
    //   this.treeGridObj.selectRows([this.treeGridObj.getSelectedRows()[0], this.treeGridObj.getSelectedRows()[1]]);
    // }
    if (args.item.id === 'copy') {
      this.treeGridObj.copy();
    }
    // if (args.item.id === 'cut') {
    //   this.treeGridObj.cut();
    // }
    // if (args.item.id === 'paste-next') {
    //   this.treeGridObj.paste('Next');
    // }
    // if (args.item.id === 'paste-child') {
    //   this.treeGridObj.paste('Child');
    // }

  }

  contextMenuOpen(arg: BeforeOpenCloseEventArgs): void {
    // let elem = arg.event.target as Element;
    // let row = elem.closest('.e-row')
    // if (row) {
    //   let uid = row.getAttribute('data-uid');
    //   let test = getValue('hasChildRecords', this.treeGridObj.grid.getRowObjectFromUID(uid!).data)
    //   if (isNullOrUndefined(test)) {
    //     document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + 'none' + ';');
    //     document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + 'none' + ';');
    //   } else {
    //     let flag: boolean = getValue('expanded', this.treeGridObj.grid.getRowObjectFromUID(uid!).data);
    //     let val: string = flag ? 'none' : 'block';
    //   }
    // }
  }

  columnContextMenuOpen(args: any): void {
    //handle selection of context menu items here
    if (args.item.properties.id === "edit") {
      this.editDialog.show();
    }
  }

  // public alertDlgButtons: Object[] = [{
  //   buttonModel: {
  //     isPrimary: true,
  //     content: 'Edit',
  //     cssClass: 'e-flat',
  //   },
  //   click: function () {
  //     //handle the alert dialog's action here
  //     //@ts-ignore
  //     this.hide();
  //   }
  // }];

  public promptDlgBtnClick = (): void => {
    this.editDialog.hide();
  }

  public alertDlgButtons: ButtonPropsModel[] = [
    {
      click: this.promptDlgBtnClick.bind(this), buttonModel: { content: 'Edit', isPrimary: true }
    },
    {
      click: this.promptDlgBtnClick.bind(this), buttonModel: { content: 'Cancel' }
    }
  ];


}
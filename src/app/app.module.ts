
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService, EditService } from '@syncfusion/ej2-angular-treegrid';
import { ResizeService, ContextMenuService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        ButtonModule,
        DropDownListAllModule,
        ContextMenuModule,
        DialogModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
        SortService,
        FilterService,
        EditService,
        ResizeService,
        ContextMenuService,
    ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {HeaderComponent,DialogOverviewExampleDialog} from './header/header.component';
import {MasterViewComponent} from './master-view.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    declarations: [
        HeaderComponent,
        SideMenuComponent,
        MasterViewComponent,
        FilterPipe,
        DialogOverviewExampleDialog
    ],
    exports : [
        MasterViewComponent
    ],
    entryComponents:[DialogOverviewExampleDialog],
    imports: [
        BrowserModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        RouterModule,
        MatInputModule,
        MatSelectModule
    ],
    providers: []
})
export class MasterViewModule { }

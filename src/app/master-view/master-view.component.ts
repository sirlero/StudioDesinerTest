import { Component } from '@angular/core';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent{
  openMenu = false;

  toggleMenu(bool){
    this.openMenu = bool;
  }

}

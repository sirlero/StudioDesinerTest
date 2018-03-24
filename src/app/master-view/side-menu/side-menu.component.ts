import { Component, OnInit, ViewChild, Input } from '@angular/core';
import MEALS from './meals.consts';
import { get, map } from 'lodash';


@Component({
  selector: 'app-side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() openMenu;
  @ViewChild('drawer') public drawer;
  mealTypes = MEALS;
  public searchText = '';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if(get(changes,'openMenu.currentValue')){
      this.drawer.open();
    }else{
      this.drawer.close();
    }
  }

  deleteSearch(){
    this.searchText = '';
  }
}

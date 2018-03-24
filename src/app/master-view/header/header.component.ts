import {Component,EventEmitter,Output, Inject} from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { RecipesService } from '../../recipes-serivce/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  addItem = {};
  public menuOpen = false;
  @Output() navToggle = new EventEmitter();
  constructor(public dialog: MatDialog, private recipesService:RecipesService) { }

  openDialog(){
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.recipesService.addRecipe(result);
    });
  }

  openMenu(){
    this.menuOpen = !this.menuOpen;
    this.navToggle.emit(this.menuOpen);
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: `dialog.component.html`,
  styleUrls: ['dialog.component.scss']
})
export class DialogOverviewExampleDialog {
  categories = ['Breakfast','Lunch','Salad','Baking'];
  addItem = {
    title: '',
    category: '',
    description: '',
    img:'',
    id:''
  };
  constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}

}
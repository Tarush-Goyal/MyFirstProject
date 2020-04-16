import { Component, OnInit, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-books-menu",
  templateUrl: "./books-menu.component.html",
  styleUrls: ["./books-menu.component.scss"]
})
export class BooksMenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  enterBook=false;
  enterMenu=false;

  Book() {
    this.trigger.openMenu();
    this.enterBook=true;
  }

  exitBook() {
    this.enterBook=false;
    setTimeout (() => {
      if(this.enterMenu===false)
      {this.trigger.closeMenu();}
    }, 50);

  }

  exitMenu() {
    this.trigger.closeMenu();
    this.enterMenu=false;
  }

  constructor() {}

  ngOnInit(): void {}
}

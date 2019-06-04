import {MenuItem} from 'primeng/api';
import {Component, OnInit} from "@angular/core";



@Component({
  selector: 'p-menubar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class Menubar implements OnInit{

  items: MenuItem[];

  ngOnInit() {
    this.items = [];
  }
}

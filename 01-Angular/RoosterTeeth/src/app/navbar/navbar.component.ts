import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @ViewChild('stickyMenu') menu: ElementRef;

  sticky: boolean = false;
  posicion: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.posicion = this.menu.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset-120;
      if(windowScroll >= this.posicion){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}



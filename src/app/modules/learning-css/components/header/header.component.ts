import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('mobileNav') mobileNav: ElementRef | undefined;
  @ViewChild('backDrop') backDrop: ElementRef | undefined;
  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }

  showMobileNav() {
    if(this.mobileNav && this.backDrop) {
      this.renderer2.addClass(this.mobileNav.nativeElement, 'open');
      this.renderer2.addClass(this.backDrop.nativeElement, 'open');
    }
  }

  closeMobileNav() {
    if(this.mobileNav && this.backDrop) {
      this.renderer2.removeClass(this.mobileNav.nativeElement, 'open');
      this.renderer2.removeClass(this.backDrop.nativeElement, 'open');
    }
  }

}

import {AfterViewChecked, AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildViewComponent} from '../../components/child-view/child-view.component';

// this component examples the invert data flow that make parent re-render error
@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
  prevHero = '';
  comment = '';

  // Query for a VIEW child of type `ChildViewComponent`
  // @ts-ignore
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  constructor() {
  }

  // use component @Output to update changes
  setPrevHero(hero: string): void {
    this.prevHero = hero;
  }

  ngAfterViewChecked(): void {
    // viewChild is set after the view has been initialized
    console.log('AfterViewInit');

    // this line makes component re-render twice
    // the first render old state of prev hero
    // this.prevHero = this.viewChild.hero;
  }

  ngAfterViewInit(): void {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      console.log('AfterViewChecked (no change)');
    } else {

      // prev hero will never be display current val when viewChild.hero is changed
      // this.prevHero = this.viewChild.hero;

      console.log('AfterViewChecked');
    }
  }

}

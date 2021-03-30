import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit {

  hero = 'Stephen Strange';
  @Output() heroEvt: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  triggerHeroEvt(): void {
    this.heroEvt.emit(this.hero);
  }
}

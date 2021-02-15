import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  minutes = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.minutes++;
    }, 60000);
  }

}

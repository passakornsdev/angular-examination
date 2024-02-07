import { Component, OnInit } from '@angular/core';
import { ModalServices } from '../../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private modalServices: ModalServices) {}

  ngOnInit() {}

  showConfirmModal() {
    this.modalServices.showConfirmModal();
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalServices } from '../../../modules/learning-css/services/modal.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent implements OnInit {
  constructor(private modalService: ModalServices) {}

  ngOnInit(): void {}

  confirm() {
    this.modalService.confirmModal();
  }

  cancel() {
    this.modalService.dismiss();
  }
}

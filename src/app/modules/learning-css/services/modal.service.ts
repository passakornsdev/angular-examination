import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ModalServices {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  showConfirmModal() {
    // TO DO CHECK ANGULAR SECURITY ABOUT DIRECT DOM ACCESSING AND THE USE OF NATIVE DOM API
    const backdrop = this.document.body.querySelector('.backdrop') as HTMLDivElement;
    if (backdrop) {
      backdrop.classList.add('backdrop-active');
    }
  }

  confirmModal() {
    this.dismiss();
  }

  dismiss() {
    const backdrop = this.document.body.querySelector('.backdrop') as HTMLDivElement;
    if (backdrop) {
      backdrop.classList.remove('backdrop-active');
    }
  }
}

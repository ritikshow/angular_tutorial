import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  showNotification = false;

  notifications = [
    { tableNo: 'SF08', orderNo: 246, message: 'Items Are Prepared!' },
    { tableNo: 'SF04', orderNo: 245, message: 'Items Are Prepared!' },
    { tableNo: 'SF03', orderNo: 244, message: 'Items Are Prepared!' },
    { tableNo: 'Online', orderNo: 243, message: 'Items Are Prepared!' },
    { tableNo: 'Online', orderNo: 240, message: 'Items Are Prepared!' },
    { tableNo: 'SF04', orderNo: 242, message: 'Items Are Prepared!' }
  ];

  constructor(private _eref: ElementRef) {}

  toggleNotification() {
    this.showNotification = !this.showNotification;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showNotification = false;
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
})
export class V1Component {
  // To control open/closed state of the drawer from outside
  @Input() isOpen = false;
  // To let the host know when the modal is closed.
  @Output() closed = new EventEmitter();

  close() {
    this.closed.emit();
  }
}

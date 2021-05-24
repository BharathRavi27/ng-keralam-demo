import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-v2-drawer',
  templateUrl: './v2-drawer.component.html',
})
export class V2DrawerComponent implements OnInit {
  @Input() isOpen: false;
  @Input() width: number = 400;
  @Input() position: 'left' | 'right' = 'right';
  @Output() drawerClosed = new EventEmitter();

  close() {
    this.drawerClosed.emit();
  }

  get drawerStyles() {
    const commonStyles = { width: `${this.width}px` };
    if (this.position == 'right') {
      return {
        ...commonStyles,
        right: `${this.isOpen ? 0 : -1 * this.width}px`,
      };
    } else {
      return {
        ...commonStyles,
        left: `${this.isOpen ? 0 : -1 * this.width}px`,
      };
    }
  }
  constructor() {}

  ngOnInit(): void {}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-v5-drawer',
  templateUrl: './v5-drawer.component.html',
  styleUrls: ['./v5-drawer.component.scss'],
  exportAs: 'drawer',
})
export class V5DrawerComponent implements OnInit {
  @Input() isOpen: false;
  @Input() width: number = 400;
  @Input() position: 'left' | 'right' = 'right';
  @Output() drawerClosed = new EventEmitter();

  close() {
    this.drawerClosed.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}

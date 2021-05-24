import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
})
export class V2Component implements OnInit {
  isOpen = false;
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.isOpen = false;
  }
}

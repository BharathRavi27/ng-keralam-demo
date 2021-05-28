import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v5',
  templateUrl: './v5.component.html',
  styleUrls: ['./v5.component.scss'],
})
export class V5Component implements OnInit {
  isOpen = false;
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.isOpen = false;
  }
}

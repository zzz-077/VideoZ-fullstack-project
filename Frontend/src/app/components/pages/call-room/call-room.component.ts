import { Component } from '@angular/core';

@Component({
  selector: 'app-call-room',
  standalone: true,
  imports: [],
  templateUrl: './call-room.component.html',
  styleUrl: './call-room.component.css',
})
export class CallRoomComponent {
  isCameraBtnClicked: boolean = false;
  isMicroBtnClicked: boolean = false;
  isLeaveBtnClicked: boolean = false;
  constructor() {}

  CameraBtnClick() {
    this.isCameraBtnClicked = !this.isCameraBtnClicked;
  }
  MicroBtnClick() {
    this.isMicroBtnClicked = !this.isMicroBtnClicked;
  }
  LeaveBtnClick() {}
}

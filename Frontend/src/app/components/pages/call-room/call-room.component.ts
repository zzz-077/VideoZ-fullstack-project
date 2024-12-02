import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  cameraAudio = new Audio('/assets/sounds/discord-video-share.mp3');
  microUnmuteAudio = new Audio('/assets/sounds/discord-mute.mp3');
  microMuteAudio = new Audio('/assets/sounds/discord-unmute.mp3');
  leaveCallAudio = new Audio('/assets/sounds/discord-leave.mp3');
  constructor(private router: Router) {}

  CameraBtnClick() {
    this.isCameraBtnClicked = !this.isCameraBtnClicked;
    if (this.isCameraBtnClicked) this.cameraAudio.play();
  }
  MicroBtnClick() {
    this.isMicroBtnClicked = !this.isMicroBtnClicked;
    this.isMicroBtnClicked
      ? this.microMuteAudio.play()
      : this.microUnmuteAudio.play();
  }
  LeaveBtnClick() {
    this.leaveCallAudio.play();
    this.router.navigate(['/']);
  }
}

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
  cameraAudio = new Audio();
  microUnmuteAudio = new Audio();
  microMuteAudio = new Audio();
  leaveCallAudio = new Audio();
  constructor(private router: Router) {}

  CameraBtnClick() {
    this.isCameraBtnClicked = !this.isCameraBtnClicked;
    if (this.isCameraBtnClicked) {
      this.cameraAudio.src = '/assets/sounds/discord-video-share.mp3';
      this.cameraAudio.load();
      this.cameraAudio.play();
    }
  }
  MicroBtnClick() {
    this.isMicroBtnClicked = !this.isMicroBtnClicked;
    this.microMuteAudio.src = '/assets/sounds/discord-mute.mp3';
    this.microUnmuteAudio.src = '/assets/sounds/discord-unmute.mp3';
    this.microMuteAudio.load();
    this.microUnmuteAudio.load();
    this.isMicroBtnClicked
      ? this.microMuteAudio.play()
      : this.microUnmuteAudio.play();
  }
  LeaveBtnClick() {
    this.leaveCallAudio.src = '/assets/sounds/discord-leave.mp3';
    this.leaveCallAudio.load();
    this.leaveCallAudio.play();
    this.router.navigate(['/']);
  }
}

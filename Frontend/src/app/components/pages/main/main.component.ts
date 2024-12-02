import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../../../shared/services/connection.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  joinCallAudio = new Audio('/assets/sounds/discord-join.mp3');
  constructor(private router: Router, private service: ConnectionService) {}

  StartCallBtn() {
    if (this.joinCallAudio) {
      this.joinCallAudio.play();
    }
    this.router.navigate(['/call/123']);

    this.service.JoinedInCall();
  }
}

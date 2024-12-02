import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  joinCallAudio = new Audio('/assets/sounds/discord-join.mp3');
  constructor(private router: Router) {}

  StartCallBtn() {
    this.joinCallAudio.play();
    this.router.navigate(['/call/123']);
  }
}

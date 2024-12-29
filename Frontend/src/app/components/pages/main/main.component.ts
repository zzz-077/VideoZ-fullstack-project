import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../../../shared/services/connection.service';
import { log } from 'console';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private router: Router, private service: ConnectionService) {}
  StartCallBtn() {
    let audio = new Audio();
    audio.src = '/assets/sounds/discord-join.mp3';
    audio.load();
    audio.play();
    this.router.navigate(['/call/123']);
    /* this.service.JoinedInCall();*/
  }
}

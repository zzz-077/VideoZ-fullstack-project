import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-undefined-page',
  standalone: true,
  imports: [],
  templateUrl: './undefined-page.component.html',
  styleUrl: './undefined-page.component.css',
})
export class UndefinedPageComponent {
  constructor(private router: Router) {}
  clickNavigate() {
    this.router.navigate(['']);
  }
}

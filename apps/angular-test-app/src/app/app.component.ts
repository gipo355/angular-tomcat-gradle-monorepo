import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularLibComponent } from '@gipo999/angular-lib';

import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AngularLibComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test-app';
}

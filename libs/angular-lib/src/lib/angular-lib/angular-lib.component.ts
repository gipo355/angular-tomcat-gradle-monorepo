import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-angular-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-lib.component.html',
  styleUrl: './angular-lib.component.css',
})
export class AngularLibComponent {
  name = 'Angular';
}

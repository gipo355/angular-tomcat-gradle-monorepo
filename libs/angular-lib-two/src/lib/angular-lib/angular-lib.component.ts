import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-angular-lib-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-lib-two.component.html',
  styleUrl: './angular-lib-two.component.css',
})
export class AngularLibComponent {
  name = 'Angular';
}

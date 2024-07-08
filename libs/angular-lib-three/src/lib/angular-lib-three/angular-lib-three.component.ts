import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-angular-lib-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-lib-three.component.html',
  styleUrl: './angular-lib-three.component.css',
})
export class AngularLibThreeComponent {
  name = 'comp';
}

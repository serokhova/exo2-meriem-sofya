import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  @Input() label = '';
  // 'primary': filled blue action button · 'nav': outlined button for the dark navbar
  @Input() variant: 'primary' | 'nav' = 'primary';
  // Highlights the button of the current page in the navbar
  @Input() active = false;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.html'
})
export class WelcomeBanner {
  @Input() name: string = 'User';
  @Input() lastLogin: string = '';
}

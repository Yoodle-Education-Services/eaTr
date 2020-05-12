import { Component, Input } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,]
})
export class PopupComponent {

  @Input() isOpen = false;

}

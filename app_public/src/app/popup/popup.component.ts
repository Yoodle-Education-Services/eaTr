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
//This idea comes from this article: https://medium.com/@robert.streidt/make-pop-up-windows-in-angular-without-breaking-a-sweat-7a5319199a7c

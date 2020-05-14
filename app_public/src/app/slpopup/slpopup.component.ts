//Because two different items needed to popup in the framework component, I needed to make
//two different popup modules.
import { Component, Input } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';

@Component({
  selector: 'app-slpopup',
  templateUrl: './slpopup.component.html',
  styleUrls: ['./slpopup.component.css'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,]
})
export class SLPopupComponent {

  @Input() istOffen = false;//Because two different modules were doing the same thing right 
//next to each other they needed different variables. So I used variables in German for the
//Shopping List popup.

}

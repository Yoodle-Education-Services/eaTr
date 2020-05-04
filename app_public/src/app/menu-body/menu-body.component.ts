import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-body',
  templateUrl: './menu-body.component.html',
  styleUrls: ['./menu-body.component.css']
})
export class MenuBodyComponent implements OnInit {

  public recipeVisible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}

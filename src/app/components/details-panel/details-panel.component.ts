import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.css'],
  inputs:['humidity','pressure','rising','visibility']
})
export class DetailsPanelComponent implements OnInit {


   public humidity;
  public pressure;
  public rising;
  public visibility;

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import {Bridge} from "./bridge";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular bridge';

  currentBridge: Bridge={id: '', name: '', lat: 0, lng: 0, year: 0, length:0, width: 0};

  handleBridgeChange(bridge: Bridge):void{
    console.log('handlge bridge change', bridge);
    this.currentBridge=bridge;
  }
}

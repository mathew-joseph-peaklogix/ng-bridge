import { Component, Input } from '@angular/core';
import {Bridge} from "../bridge";


function prettyPrintDimension(value: number | null): string {
  return value ? `${value} m` : 'unknown';
}

@Component({
  selector: 'app-bridge-info-panel',
  templateUrl: './bridge-info-panel.component.html',
  styleUrls: ['./bridge-info-panel.component.css']
})
export class BridgeInfoPanelComponent {
  @Input() bridge: Bridge = {id: '', name: '', lat: 0, lng: 0, year: 0, length:0, width: 0};

  age(): number {
    return (new Date()).getFullYear() - this.bridge.year;
  }

  width(): string {
    return prettyPrintDimension(this.bridge.width);
  }

  length(): string {
    return prettyPrintDimension(this.bridge.length);
  }}
 
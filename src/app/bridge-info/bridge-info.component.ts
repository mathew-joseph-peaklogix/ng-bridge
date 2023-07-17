import { Component, Input } from '@angular/core';

import {Bridge} from "../bridge";

@Component({
  selector: 'app-bridge-info',
  templateUrl: './bridge-info.component.html',
  styleUrls: ['./bridge-info.component.css']
})
export class BridgeInfoComponent {
@Input() bridge: Bridge = {id: '', name: '', lat: 0, lng: 0, year: 0, length:0, width: 0};
}

import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import {Bridge} from "../bridge";
import { LeafletMap } from './leaflet-map';

@Component({
  selector: 'app-bridge-info-map',
  templateUrl: './bridge-info-map.component.html',
  styleUrls: ['./bridge-info-map.component.css']
})
export class BridgeInfoMapComponent implements AfterViewInit, OnChanges{
  map: LeafletMap | undefined;

  @Input() bridge: Bridge = {id: '', name: '', lat: 0, lng: 0, year: 0, length:0, width: 0};



  ngAfterViewInit(): void {
    this.map=new LeafletMap('map');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.map){
      return;
    }

    if( changes['bridge'].currentValue){
      const {lat, lng, name} = changes['bridge'].currentValue;
      this.map.update(lat, lng, name);
    }
  }
}

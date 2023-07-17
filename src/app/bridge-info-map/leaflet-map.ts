import * as Leaflet from "leaflet";

const london={
    coords: new Leaflet.LatLng(40.7128, -74.0060),
    zoom: 5
}

export class LeafletMap{
    map: Leaflet.Map;
    popup: Leaflet.Popup | undefined;

    constructor(id: string){
        this.map=Leaflet.map(id);
        Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        this.map.setView(london.coords, london.zoom);

    }

    update(lat: number, lng: number, name:string):void {
        const coords=new Leaflet.LatLng(lat, lng)
        this.map.setView(coords, 14);

        if(this.popup){
            this.popup.setLatLng(coords);
            this.popup.setContent(name);
        }
        else{
            this.popup=Leaflet.popup({
                closeButton: false, 
                closeOnEscapeKey: false,
                closeOnClick: false
            }).setLatLng(coords)
            .setContent(name)
            .openOn(this.map);
        }
    }
}
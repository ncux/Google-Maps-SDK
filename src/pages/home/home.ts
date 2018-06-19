import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latitute: number;
  longitude: number;

  @ViewChild('map') mapRef: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log(this.mapRef);
    this.displayMap();
  }

  displayMap() {
    const location = new google.maps.LatLng(this.latitute, this.longitude);

    const options = {center: location, zoom: 10};

    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }

}

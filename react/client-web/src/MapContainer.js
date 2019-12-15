import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import IconElectricVehicle from './imgs/electric-station.png'
import Accessible from './imgs/accessible.png'

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: this.props.startLat,
                    lng: this.props.startLon
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    position={{ lat: this.props.startLat, lng: this.props.startLon }}
                    animation={this.props.google.maps.Animation.DROP}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    position={{ lat: this.props.endLat, lng: this.props.endLon }}
                    animation={this.props.google.maps.Animation.DROP}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    position={{ lat: this.props.closestCharging[0], lng: this.props.closestCharging[1] }}
                    animation={this.props.google.maps.Animation.DROP}
                    icon={IconElectricVehicle}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    position={{ lat: this.props.closestParkingRMP[0], lng: this.props.closestParkingRMP[1] }}
                    animation={this.props.google.maps.Animation.DROP}
                    icon={Accessible}
                />
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA85AZn35eZa6DwMyLhXQfSxM8nP3HB-nA'
})(MapContainer);
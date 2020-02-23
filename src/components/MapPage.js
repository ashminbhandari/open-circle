import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {geolocated} from 'react-geolocated';
import axios from "axios";

const mapStyles = {
    width: '100%',
    height: '100%',
};




class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null
        };

        this.getLocation = this.getLocation.bind(this);
        this.getPosition = this.getPosition.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition);
        } else {
            alert("Geolocation is not supported by the browser.")
        }
    }

    async getPosition(position) {
        console.log(position);
        this.setState(
            {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        )

        var userInfo = {
            toggle: true,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };

        

        try
        {
            await axios.post('http://192.168.4.179:5000/database/toggle', userInfo);
        }
        catch(error)
        {
            console.log(error);
        }

    }

    componentDidMount() {
        this.getLocation();
    }



    render() {

        return (

            <div>
                <Map
                    google={this.props.google}
                    zoom={16}
                    style={mapStyles}
                    zoom={16}
                    center={{ lat: this.state.latitude, lng: this.state.longitude}}>
                    <Marker position={{ lat: this.state.latitude, lng: this.state.longitude}} />

                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCR6T6kFBhC8Q3AWK0ELT2leqsQrIM8fig'
})(MapPage);



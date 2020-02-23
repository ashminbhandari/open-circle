import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import SpotifyLogin from 'react-spotify-login';


const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

const firebase = require('firebase');
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
        firebase
            .firestore()
            .collection('users')
            .doc()
            .set(userInfo);



    }

    componentDidMount() {
        this.getLocation();




    }



    render() {

        return (

            <div>
                <SpotifyLogin clientId={'45498e9678054ff8a74e0460f5782cd7'}
                              redirectUri={'https://192.168.22.233:3000/map'}
                              onSuccess={onSuccess}
                              onFailure={onFailure}/>
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



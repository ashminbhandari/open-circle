import React from 'react';
import { Circle, GoogleApiWrapper, Map, MapProps, Marker, InfoWindow } from "google-maps-react";



const firebase = require('firebase');
const mapStyles = {
    width: '100%',
    height: '100%',
};

var test = '';
class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            info: null,
            allUsers: null
        };

        this.getLocation = this.getLocation.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.addMarkers = this.addMarkers.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition);
        } else {
            alert("Geolocation is not supported by the browser.")
        }
    }

    getAllUsers()
    {
        firebase.firestore().collection("users")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                 this.setState({
                     allUsers: data
                 })
            });
    }



    async getPosition(position) {
        console.log(position);
        this.setState(
            {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        );
    }



    componentDidMount() {
        this.getLocation();

        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
        window.location.hash = '';
        // Set token
        let _token = hash.access_token;
        console.log(_token);



        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        xhr.responseType = 'json';
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            var response = xhr.response;

            var userInfo = {
                toggle: true,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                info: response
            };
            if(userInfo.latitude!=null && userInfo.longitude!=null && userInfo.info!=null) {
                firebase
                    .firestore()
                    .collection('users')
                    .doc()
                    .set(userInfo);
            }




            console.log(response);

        })
        // open the request with the verb and the url
        xhr.open('GET', 'https://api.spotify.com/v1/me')
        xhr.setRequestHeader('Authorization', 'Bearer ' + _token);
        // send the request
        xhr.send()


        this.getAllUsers();



    }

    addMarkers = () => {

        if(this.state.allUsers!=null) {
            return this.state.allUsers.map((store, index) => {
                return (<Marker key={index} id={index} position={{
                        lat: store.latitude,
                        lng: store.longitude
                    }}
                                onClick={() => console.log(store.info["display_name"])}/>


                );
            })
        }
    }

    render() {

        return (

            <div>

                <Map
                    google={this.props.google}
                    style={mapStyles}
                    zoom={16}
                    center={{ lat: this.state.latitude, lng: this.state.longitude}}>

                    {this.addMarkers()}


                </Map>


            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCR6T6kFBhC8Q3AWK0ELT2leqsQrIM8fig'
})(MapPage);

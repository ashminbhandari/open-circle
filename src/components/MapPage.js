import React from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};


class MapPage extends React.Component {
    render() {
        return (<div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCR6T6kFBhC8Q3AWK0ELT2leqsQrIM8fig'
})(MapPage);

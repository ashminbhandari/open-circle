import React from 'react';
import openCircle from './opencircle.png';
import Switch from "react-switch";
import './Landing.css';
import MapPage from "./MapPage";
import SpotifyLogin from 'react-spotify-login';


const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);




class Landing extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(){
       window.open('https://accounts.spotify.com/authorize?client_id=45498e9678054ff8a74e0460f5782cd7&redirect_uri=https:%2F%2Fd69593ea.ngrok.io%2Fmap&scope=user-read-recently-played%20user-read-currently-playing%20user-read-private%20user-read-email&response_type=token&state=123', "_self");
    }


    render() {


            return (

                <div
                    className="card text-white bg-dark mb-3 full-height rounded-0 align-items-center justify-content-center">
                    <img src={openCircle} className="slow-spin" alt="Logo"/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1>openCircle</h1>
                    <br/>
                    <br/>
                    <label>
                        <Switch
                            uncheckedIcon={false}
                            checkedIcon={false}
                            height={50} width={90} onChange={this.handleChange}/>
                    </label>
                </div>


            )
        }
}

export default Landing;

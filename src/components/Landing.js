import React from 'react';
import openCircle from './opencircle.png';
import Switch from "react-switch";
import axios from 'axios';


import './Landing.css';
import MapPage from "./MapPage";




class Landing extends React.Component {
    constructor() {
        super();
        this.state = { checked: false, userData: ""};
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(checked){
        //validate post request data *
        //if no error proceed to set state else: display error *
        this.setState({ checked: true });
    }
    render() {
        if(!this.state.checked) {
            console.log(this.state.checked);
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
                            height={50} width={90} onChange={this.handleChange} checked={this.state.checked}/>
                    </label>
                </div>


            )
        }
        else {
            return(<MapPage />);
        }
    }

}

export default Landing;

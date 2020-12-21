import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './THEOplayerWrapper'

function App() {
	let source = {
        sources: [{
            "src": "https://d1n93qtmcsa1om.cloudfront.net/d799fbe8-d2f1-4002-819b-38a43ec2ddde/dash/147fe0bf-60a8-4f23-a826-99b9690c8605.mpd",
            "type": "application/dash+xml",
            "contentProtection": {
                "integration": "ezdrm",
                "widevine": {
                    "licenseAcquisitionURL": "https://widevine-dash.ezdrm.com/widevine-php/widevine-foreignkey.php?pX=A3D13A"
                }
            }
        }]
    };
    return ( 
		<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">THEOplayer ♥ React!</h1>
                </header>
                <div className={"PlayerDiv"}>
                    <Player source={source} onPlay={() => {console.log("The player has started playing.")}}/>
                </div>
            </div>
    );
}

export default App;
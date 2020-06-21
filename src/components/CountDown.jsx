import React from 'react';
import "./CountDown.css"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class CountDown extends React.Component {
    render(){
        return(
            <div className="timer-group">
                <div className="timer hour">
                    <div className="hand"><span></span></div>
                    <div className="hand"><span></span></div>
                </div>
                <div className="timer minute">
                    <div className="hand"><span></span></div>
                    <div className="hand"><span></span></div>
                </div>
                <div className="timer second">
                    <div className="hand"><span></span></div>
                    <div className="hand"><span></span></div>
                </div>
                <div className="face">
                    <h2>A CSS Chronograph</h2>
                    <p id="lazy">00:00:00</p>  
                </div>
             </div>
        )
    }
}

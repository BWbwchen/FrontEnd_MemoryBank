import React from 'react';
import {withRouter} from 'react-router-dom';
import red from "../images/紅橘.png";
import blue from "../images/藍.png";
import orange from "../images/黃.png";
import {Helmet} from "react-helmet";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import "./ChallengeResult.css"
class ChallengeResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    
    render(){
        return(
            <>
            <div className='container'>
                <Helmet bodyAttributes={{style: 'background-color :#01212D'}}/>
                <img src={red} className="ink-bg red-bg"></img>
                <img src={blue} className="ink-bg blue-bg"></img>
                <img src={orange} className="ink-bg orange-bg"></img>
                <div className='finish'>FINISH</div>
                <div id='acc-block'>
                    <div className='acc-text'>Accuracy:</div>
                    <div className='acc-number'> 60%</div>
                </div>
                <Link to="/MissionList">
                    <div className="return-mission">
                        <div>返回任務列表  &nbsp; > </div>
                    </div>
                </Link>
            </div>
            </>
        )
    }
    
}export default withRouter(ChallengeResult);


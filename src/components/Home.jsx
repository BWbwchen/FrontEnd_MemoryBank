import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button} from 'reactstrap';
import {
  BarChart, Bar, XAxis, CartesianGrid
} from 'recharts';
import './Home.css';


export default class Home extends React.Component {
    
    render(){
        const data = [
            {name: 'Day 1', pv: 2400},
            {name: 'Day 2', pv: 1398},
            {name: 'Day 3', pv: 9800},
            {name: 'Day 4', pv: 3908},
            {name: 'Day 5', pv: 4800},
            {name: 'Day 6', pv: 3800},
            {name: 'Day 7', pv: 4300},
        ];

        return(
            <div> 
                <div className="text-center my-2">首頁</div>
                <img className="image" src={`images/woman.png`}/>
                <div className="info" style={{margin:'0 0 2rem 0'}}>
                    <h4>Me</h4>
                    <h6>NTHU Student</h6>
                </div>
                <p className="info">Hi! My name is John, I'm a creative geek from San Francisco, CA. Contact me at john@mail.com</p>
                <div className="my-4 d-flex justify-content-center text-center">
                    <div className="px-3 my-3 vert-r"> 
                        <h3 >0%</h3>
                        <h6>本周完成進度</h6>
                    </div>
                    <div className="px-3">
                        <h1>$100</h1>
                        <h6>錢包金額</h6>
                    </div>
                    <div className="px-3 my-3 vert-l">
                        <h3>0</h3>
                        <h6> 記憶單字數</h6>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                <BarChart  width={400} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5,}} barSize={20}> 
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
                </div>
                <div className="d-flex my-2 mx-auto btn">
                <Button style={{backgroundColor: '#FF6347'}} block>
                    <h6>開始今日任務</h6>
                </Button>

                </div>
            </div>
        )
    }
}
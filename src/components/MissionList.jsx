import React from 'react';
import Card from './Card.jsx'
import CountDown from './CountDown.jsx'
import TextAnimation from './TextAnimation.jsx'
import {Helmet} from 'react-helmet'
import "./MissionList.css"
import running from "../images/running.png";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class MissionList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weeklyCards: [
                {type: "pastCard",date: "06/16",completeRate: 12, image: "https://source.unsplash.com/Oaqk7qqNh_c/1600x900"}, 
                {type: "pastCard",date: "06/17",completeRate: 15, image: "https://source.unsplash.com/1-aA2Fadydc/1600x900"},
                {type: "todayCard",date: "06/18",completeRate: 0, image: "https://source.unsplash.com/qDY9ahp0Mto/1600x900"},
                {type: "futureCard",date: "06/19",completeRate: 0, image: "https://source.unsplash.com/s9CC2SKySJM/1600x900"},
                {type: "futureCard",date: "06/20",completeRate: 0, image: "https://source.unsplash.com/DUmFLtMeAbQ/1600x900"},
                {type: "futureCard",date: "06/21",completeRate: 0, image: "https://source.unsplash.com/4-EeTnaC1S4/1600x900"},
                {type: "futureCard",date: "06/22",completeRate: 0, image: "https://source.unsplash.com/FHnnjk1Yj7Y/1600x900"},
            ],
            pastCards:[
                {type: "pastCard",date: "06/16",completeRate: 12, image: "https://source.unsplash.com/Oaqk7qqNh_c/1600x900"}, 
                {type: "pastCard",date: "06/17",completeRate: 15, image: "https://source.unsplash.com/1-aA2Fadydc/1600x900"},
                {type: "pastCard",date: "06/18",completeRate: 0, image: "https://source.unsplash.com/qDY9ahp0Mto/1600x900"},
                {type: "pastCard",date: "06/19",completeRate: 0, image: "https://source.unsplash.com/s9CC2SKySJM/1600x900"},
                {type: "pastCard",date: "06/20",completeRate: 0, image: "https://source.unsplash.com/DUmFLtMeAbQ/1600x900"},
                {type: "pastCard",date: "06/21",completeRate: 0, image: "https://source.unsplash.com/4-EeTnaC1S4/1600x900"},
                {type: "pastCard",date: "06/22",completeRate: 0, image: "https://source.unsplash.com/FHnnjk1Yj7Y/1600x900"},
                {type: "pastCard",date: "06/16",completeRate: 12, image: "https://source.unsplash.com/Oaqk7qqNh_c/1600x900"}, 
                {type: "pastCard",date: "06/17",completeRate: 15, image: "https://source.unsplash.com/1-aA2Fadydc/1600x900"},
                {type: "pastCard",date: "06/18",completeRate: 0, image: "https://source.unsplash.com/qDY9ahp0Mto/1600x900"},
                {type: "pastCard",date: "06/19",completeRate: 0, image: "https://source.unsplash.com/s9CC2SKySJM/1600x900"},
                {type: "pastCard",date: "06/20",completeRate: 0, image: "https://source.unsplash.com/DUmFLtMeAbQ/1600x900"},
                {type: "pastCard",date: "06/21",completeRate: 0, image: "https://source.unsplash.com/4-EeTnaC1S4/1600x900"},
                {type: "pastCard",date: "06/22",completeRate: 0, image: "https://source.unsplash.com/FHnnjk1Yj7Y/1600x900"},
            ]
        };
    }
    componentDidMount() {
        var url = 'http://140.114.87.70:3000/get/info?user_id=d9786825-0f15-4064-8715-7a59ac9bf979'
        axios.get(url).then(function(res) {
            console.log(res)
        }).catch(function(err) {
        });
    }
    render(){
        const weeklyCardList = this.state.weeklyCards.map(function(item){
            return <Card key={item.date} type={item.type} date={item.date} completeRate={item.completeRate} imageUrl={item.image} />
        })
        const pastCardList = this.state.pastCards.map(function(item){
            return (
                <div className="col-4" style={{display: 'inline-block'}}>
                    <Card key={item.date} type={item.type} date={item.date} completeRate={item.completeRate} imageUrl={item.image} />
                </div>
            )
        })
        return(
            <div className="mission-list">
                {/* <div className="text-center my-2">每日任務列表</div> */}
                <div className="intro-sector">
                    <div className="filter"></div>
                </div>
                <div className="content-wrap">
                    <section>
                        <div className="paragraph">
                            <div className="paragraph-title">本週任務 & 當前學習數據</div>
                            <div className="paragraph-text"> 訓練計畫針對不同考試需求的人群進行編排，絕對讓您單字記得牢，考試不掉鏈！</div>
                        </div>
                        <div className="training-wrap">
                            <div className="training-wrap-inner">
                                <div className="training-block">
                                    {weeklyCardList}
                                </div>
                                <img src={running} className="running-man"></img>
                                <div className="line-graph">
                                    <svg id="pic3" viewBox="0 0 200 200">
                                    <circle cx="0" cy="50" r="3">
                                        <animate attributeName="cy" dur="2s" values="50;60;50" repeatCount="indefinite"></animate>
                                    </circle>
                                    <circle cx="50" cy="100" r="3">
                                        <animate attributeName="cy" dur="2s" values="100;40;80" repeatCount="indefinite"></animate>
                                    </circle>
                                    <circle cx="100" cy="70" r="3">
                                        <animate attributeName="cy" dur="2s" values="70;30;60" repeatCount="indefinite"></animate>
                                    </circle>
                                    <circle cx="150" cy="20" r="3">
                                        <animate attributeName="cy" dur="2s" values="20;70;20" repeatCount="indefinite"></animate>
                                    </circle>
                                    <circle cx="200" cy="30" r="3">
                                        <animate attributeName="cy" dur="2s" values="30;60;40" repeatCount="indefinite"></animate>
                                    </circle>
                                    <polyline points="0,50 50,100 100,70 150,20 200,30">
                                        <animate attributeName="points" dur="2s" values="0,50 50,100 100,70 150,20 200,30;0,60 50,40 100,30 150,70 200,60;0,50 50,80 100,60 150,20 200,40" repeatCount="indefinite"></animate>
                                    </polyline>
                                    </svg>
                                </div>
                                <div className="current-acc-box">
                                    <div className="data-title">當前正確率:</div>
                                    <div className="data"> 0% </div>
                                </div>
                                <div className="current-checkin-box">
                                    <div className="data-title">本週已連續打卡:</div>
                                    <div className="data"> 2天 </div>
                                </div>
                                <Link to="/Home">
                                    <div id="more-data-box">
                                        <div>查看更多數據 &nbsp; </div>
                                    </div>
                                </Link>
                                <div className="countdown-box">
                                    {/* <CountDown /> */}
                                </div>
                                <div className="text-animation-box">
                                    {/* <TextAnimation /> */}
                                </div>

                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="paragraph">
                            <div className="paragraph-title">過去你背過的單字卡</div>
                            <div className="paragraph-text"> 時常溫習，溫故知新，考試無往不利！</div>
                        </div>
                        <div className="past-words-block">
                            <div className="container">
                                {pastCardList}
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="paragraph">
                                <div className="paragraph-text"> 版權所有</div>
                                <div className="paragraph-text"> Contact: elin880508@gmail.com</div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

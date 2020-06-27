import React from 'react';
import './Review.css'
import ReviewCard from "./ReviewCard.jsx"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
export default class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardNumber: 8,
            triggerClickTimes: 1,
            angle: 45,
            cards_rotate_style: {
                transform: `rotate(${360 - 45*1}deg)`
            },
            cards:[
                {volcabulary: "Apple", type: "n", engExample: "An apple a day keeps the doctor away.", chineseExample: "一日一蘋果，醫生遠離你！"}, 
                {volcabulary: "Apple", type: "n", engExample: "An apple a day keeps the doctor away.", chineseExample: "一日一蘋果，醫生遠離你！"}, 
                {volcabulary: "Apple", type: "n", engExample: "An apple a day keeps the doctor away.", chineseExample: "一日一蘋果，醫生遠離你！"},
                {volcabulary: "Apple", type: "n", engExample: "An apple a day keeps the doctor away.", chineseExample: "一日一蘋果，醫生遠離你！"}, 
                {volcabulary: "Apple", type: "n", engExample: "An apple a day keeps the doctor away.", chineseExample: "一日一蘋果，醫生遠離你！"}, 
                {volcabulary: "Apple", type: "n", engExample: "An apple a day keeps the doctor away.", chineseExample: "一日一蘋果，醫生遠離你！"}, 
                {volcabulary: "Apple", type: "n", engExample: "An apple a day keeps the doctor away.", chineseExample: "一日一蘋果，醫生遠離你！"}, 
                {volcabulary: "Apple", type: "n", engExample: "An apple a day keeps the doctor away.", chineseExample: "一日一蘋果，醫生遠離你！"},  
            ],
            isWrapClick: false,

        };
        this.handleTrigger = this.handleTrigger.bind(this);
        this.handleCloseCard = this.handleCloseCard.bind(this);
    }
    
    render(){
        const angle = this.state.angle
        const clickTimes = this.state.triggerClickTimes
        const isWrapClick_ = this.state.isWrapClick
        const blue_card_color = '#32cbfb'
        const red_card_color = '#fc3359'
        const yellow_card_color = '#fefb3a'
        var card_color = blue_card_color
        const ReviewCardList = this.state.cards.map(function(item, idx){
            var card_wrap_style = {
                transform: `rotate(${angle*(idx+1)}deg)`
            }
            var card_style = {
                transform: `rotate(${-(360 - clickTimes*angle + angle * (idx+1))}deg)`
            }
            if(idx % 3 === 0){
                card_color = blue_card_color
            }else if(idx % 3 === 1){
                card_color = red_card_color
            }else{
                card_color = yellow_card_color
            }
            const card_color_style = {
                background: card_color
            }
            return <ReviewCard isWrapClick={isWrapClick_} card_color_style={card_color_style} card_wrap_style={card_wrap_style} card_style={card_style} number={idx+1} key={idx+1} volcabulary={item.volcabulary} type={item.type} engExample={item.engExample} chineseExample={item.chineseExample} />
        })
        return(
            <>
            <div className="review-block">
                <div className="wrap" onClick={this.handleCloseCard}>
                    <div className="trigger" onClick={this.handleTrigger}></div>
                    <div className="inner-wrap">
                        <div className="cards" style={this.state.cards_rotate_style}>
                            {ReviewCardList}
                        </div>
                    </div>
                </div>
                <Link to="/Challenging">
                    <div id="more-data-box">
                        <div>完成今日挑戰  &nbsp; > </div>
                    </div>
                </Link>
            </div>
            </>
        )
    }
    handleCloseCard(e){
        e.stopPropagation();
        this.setState((prevState, props) => ({
            isWrapClick: !prevState.isWrapClick
        }))
    }
    handleTrigger(e){
        e.stopPropagation();
        this.setState((prevState, props) => ({
            isWrapClick: !prevState.isWrapClick
        }))
        if(this.state.triggerClickTimes >= this.state.cardNumber){
            this.setState((prevState, props)=>(
                {triggerClickTimes: 1}
                ), ()=>{
                console.log(this.state.triggerClickTimes)
                this.setState({
                    cards_rotate_style: {
                        transform: `rotate(${360 - this.state.angle*this.state.triggerClickTimes}deg)`
                    }
                })
            })
        }else{
            this.setState((prevState, props)=>(
                {triggerClickTimes: prevState.triggerClickTimes + 1}
                ), ()=>{
                console.log(this.state.triggerClickTimes)
                this.setState({
                    cards_rotate_style: {
                        transform: `rotate(${360 - this.state.angle*this.state.triggerClickTimes}deg)`
                    }
                })
            })
        }
        
    }
}

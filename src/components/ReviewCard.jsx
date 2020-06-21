import React from 'react';
import './ReviewCard.css'
export default class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCardClick: false,
            wordType: "Read it!"
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleCross = this.handleCross.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(this.props.isWrapClick !== nextProps.isWrapClick && this.state.isCardClick === true){
            this.setState({isCardClick: false})
        }
    }
    
    render(){
        var inner_class = "", text_class = "", link_class=""
        if(this.state.isCardClick){
            inner_class="inner card-flip-1"
            text_class = "text text-flip-1"
            link_class="link link-flip-1"
        }else{
            inner_class = "inner"
            text_class = "text"
            link_class="link"
        }
        return(
            <div className="card-wrap " style={this.props.card_wrap_style} onClick={this.handleClick}>
                <div className="card_" style={this.props.card_style}>
                    <div className={inner_class} style={this.props.card_color_style}>
                        <div className="card-number">0{this.props.number}</div>
                        <h1><span>{this.props.type}</span>{this.props.volcabulary}</h1>
                        <div className={text_class} >
                            <div className="cross" onClick={this.handleClick}></div>
                            <p>
                                {this.props.engExample}
                            </p>
                        </div>
                        <div className={link_class}>
                            <p>
                                {this.props.chineseExample}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    handleClick(e){
        console.log('You are clicking blue card!')
        e.stopPropagation();
        this.setState((prevState, props)=>(
            {isCardClick: !prevState.isCardClick}
        ), ()=>{
            // console.log(this.state.isCardClick)
            if(this.state.isCardClick){
                this.setState({
                    wordType: this.props.type
                })
            }
        })
        
    }
    handleCross(){
        console.log('hdhdhd')
    }
}

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';
import {Helmet} from 'react-helmet'
import './TopicSelect.css';


export default class TopicSelect extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            toeic: false,
            toefl: false,
            ielts: false,
            button_disable:true
        };
        this.toeic_handleClick = this.toeic_handleClick.bind(this);
        this.toefl_handleClick = this.toefl_handleClick.bind(this);
        this.ielts_handleClick = this.ielts_handleClick.bind(this);
    }
    
    render(){
        return(
            <div className="my-5 container">
            <Helmet bodyAttributes={{style: 'background-color :#F0F0F0'}}/>
            <Link  to="/visa"> 
                <Button cmeolor="link" style={{color: 'black',background:'#F0F0F0',border:'none',textAlign:'left'}}>
                <i className="fa fa-arrow-left"></i>
                </Button>
            </Link>
            <Container className="text-center" style={{margin:'2rem 0', color:'black'}}>
                <h1 className="my-2" style={{overflow:'hidden'}}> 目標 </h1>
                <div className="d-flex align-items-center flex-column-reverse ">
                    <Button className={`select-${this.state.toeic}`} onClick={this.toeic_handleClick} >TOEIC 多益</Button>
                    <Button className={`select-${this.state.toefl}`} onClick={this.toefl_handleClick} >TOEFL 托福</Button>
                    <Button className={`select-${this.state.ielts}`} onClick={this.ielts_handleClick} >IELTS 雅思</Button>
                </div>
            </Container>
            <Link className="d-flex my-2 mx-auto btn" style={{padding:'0', border:'none'}} to="/date"> 
                <Button disabled={this.state.button_disable} style={{backgroundColor: '#FF6347',border:'none',margin:'0', padding:'0'}} block >
                    下一步
                </Button>
            </Link>

            </div>
        )
    }
    toeic_handleClick(){
        this.setState(state => ({
            button_disable:false,
            toeic: true,
            toefl: false,
            ielts: false
        }));
    }

    toefl_handleClick(){
        this.setState(state => ({
            button_disable:false,
            toeic: false,
            toefl: true,
            ielts: false
        }));
    }

    ielts_handleClick(){
        this.setState(state => ({
            button_disable:false,
            toeic: false,
            toefl: false,
            ielts: true
        }));
    }
}
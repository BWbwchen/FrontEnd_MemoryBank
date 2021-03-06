import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default class Rule extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            button_disable:true,
            date:""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(date){
        var that = this
        let url = `....`;

        axios.get(url).then(function(res) {
            const ID = res.data.user_id
            // that.props.IdFunc(ID)
            that.props.IdFunc("123123")
        }).catch((err) => {
            console.log(err)
        });
    }
    
    render(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
         if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 
        
        today = yyyy+'-'+mm+'-'+dd;
        var lastday =  (yyyy+2) +'-'+mm+'-'+dd;
        return(
            <div className="my-5 container">
                <Helmet bodyAttributes={{style: 'background-color :#F0F0F0'}}/>

                <Link  to="/topicselect"> 
                    <Button cmeolor="link" style={{color: 'black',background:'#F0F0F0',border:'none',textAlign:'left'}}>
                    <i className="fa fa-arrow-left"></i>
                    </Button>
                </Link>
                <Container style={{margin:'2rem 0 5rem 0', color:'black'}}>
                    <h1 className="my-2" style={{overflow:'hidden'}}> 完成背誦單字日期</h1>
                    <div className="date">
                        <p>Dates</p>
                        <input onChange={this.handleChange} type="date" id="myDate"  min={today} max={lastday} required/>
                    </div>

                </Container>
                <Link className="d-flex my-2 mx-auto btn" style={{padding:'0', border:'none'}}  to="/Home"> 
                    <Button onClick={()=> this.handleClick(this.state.date)}
                           disabled={this.state.button_disable}  style={{backgroundColor: '#414141',border:'none',margin:'0', padding:'0'}}  >
                        完成
                    </Button>
                </Link>

            </div>
        )
    }

    handleChange = evt => {
        this.setState({ 
            date: evt.target.value,
            button_disable:false,

        });
    };    
}
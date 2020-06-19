import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';


export default class Rule extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    
    render(){

        return(
            <div className="my-5">
            <Link  to="/topicselect"> 
                <Button cmeolor="link" style={{color: 'black',background:'#F0F0F0',border:'none'}}>
                <i className="fa fa-arrow-left"></i>
                </Button>
            </Link>
            <Container style={{margin:'2rem 0 5rem 0', color:'black'}}>
                <h1 className="my-2" style={{overflow:'hidden'}}> 完成背誦單字日期</h1>
                <div className="date">
                    <p>Dates</p>
                    <input type="date" id="myDate"  min="2017-04-01" max="2017-04-20" required/>
                </div>

            </Container>
            <Link className="d-flex my-2 mx-auto btn" to="/"> 
                <Button style={{backgroundColor: '#414141'}} block >
                    <h6>完成</h6>
                </Button>
            </Link>

            </div>
        )
    }
}
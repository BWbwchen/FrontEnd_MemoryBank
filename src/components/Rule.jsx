import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';
import { Helmet } from 'react-helmet';


export default class Rule extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            intro: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. ",
            intro2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
    }
    
    render(){
        return(
            <div className="my-5 ">
                <Helmet bodyAttributes={{style: 'background-color :#F0F0F0'}}/>

                <Link  to="/Create"> 
                    <Button cmeolor="link" style={{color: 'black',background:'#F0F0F0',border:'none',textAlign:'left'}}>
                    <i className="fa fa-arrow-left"></i>
                    </Button>
                </Link>
                <Container style={{margin:'2rem 0 5rem 0', color:'black'}}>
                    <h1 className="my-2" style={{overflow:'hidden',fontFamily:'Love Ya Like A Sister, cursive' ,fontSize:'70px'}}> Rule </h1>
                    <h6 className="py-3">{this.state.intro}</h6>
                    <h6>{this.state.intro2}</h6>
                </Container>
                <Link className="d-flex my-2 mx-auto btn" to="/Visa"> 
                    <Button style={{backgroundColor: '#FF6347',border:'none'}} block >
                        <h6>下一步</h6>
                    </Button>
                </Link>

            </div>
        )
    }
}
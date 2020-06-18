import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';


export default class TopicSelect extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    
    render(){
        return(
            <div className="my-5">
            <Link  to="/visa"> 
                <Button cmeolor="link" style={{color: 'black',background:'#F0F0F0',border:'none'}}>
                <i className="fa fa-arrow-left"></i>
                </Button>
            </Link>
            <Container style={{margin:'2rem 0 5rem 0', color:'black'}}>
                <h1 className="my-2" style={{overflow:'hidden'}}> 選擇目標 </h1>
            </Container>
            <Link className="d-flex my-2 mx-auto btn" to="/date"> 
                <Button style={{backgroundColor: '#FF6347'}} block >
                    <h6>下一步</h6>
                </Button>
            </Link>

            </div>
        )
    }
}
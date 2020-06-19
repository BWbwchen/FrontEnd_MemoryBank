import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';
import './visa.css';

export default class Visa extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    
    render(){
        return(
            <div className="my-5" style={{color:'black'}}>
                <Link  to="/rule"> 
                    <Button cmeolor="link" style={{color: 'black',background:'#F0F0F0',border:'none'}}>
                    <i className="fa fa-arrow-left"></i>
                    </Button>
                </Link>
                <div className="mx-5">
                    <div className="icon-container">
                        <i className="fa fa-cc-visa fa-3x" style={{color:'navy'}} >&nbsp;</i>
                        <i className="fa fa-cc-paypal  fa-3x" style={{color:'blue'}}>&nbsp;</i>
                        <i className="hide fa fa-cc-mastercard fa-3x" style={{color:'red'}}>&nbsp;</i>
                        <i className="hide fa fa-cc-discover fa-3x" style={{color:'orange'}}>&nbsp;</i>
                    </div>
                    <div className="form">
                        <div className="card space">
                            <div className="label">CARDHOLDER NAME</div>
                            <input type="text" className="input" placeholder="John More Doe"/>
                        </div>
                        <div className="card space">
                            <div className="label">CARD NUMBER</div>
                            <input type="text" className="input"  placeholder="1111-2222-3333-4444"/>
                        </div>
                        <div className="card-grp space">
                            <div className="card-item">
                                <div className="label">EXPIRE DATE</div>
                                <input type="text" name="expiry-data" className="input"  placeholder="05 / 21"/>
                            </div>
                            <div className="card-item">
                                <div className="label">CVV</div>
                                <input type="text" className="input"  placeholder="123"/>
                            </div>
                        </div>
                    </div>
                    <div><input type="checkbox" name="Save" value="Save"/>&nbsp;SAVE CARD</div>
                </div>
                <Link className="d-flex my-2 mx-auto btn" to="/topicselect"> 
                        <Button style={{backgroundColor: '#FF6347'}} block >
                            <h6>下一步</h6>
                        </Button>
                </Link>
            </div>
        )
    }
}

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';


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

                <label htmlFor="fname">Accepted Cards</label>
                <div className="icon-container">
                    <i className="fa fa-cc-visa" ></i>
                    <i className="fa fa-cc-amex" ></i>
                    <i className="fa fa-cc-mastercard"></i>
                    <i className="fa fa-cc-discover"></i>
                </div>
                <label htmlFor="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                <label htmlFor="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                <label htmlFor="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                <div className="row">
                    <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                    </div>
                    <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352"/>
                    </div>
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

// https://www.w3schools.com/howto/howto_css_checkout_form.asp
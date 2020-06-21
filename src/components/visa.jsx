import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';
import './visa.css';
import { Helmet } from 'react-helmet';

function validate(number=[], expiredate=[], cvv=[], name=[]) {
    return {
      name: name.length === 0,
      number: number.length === 0,
      expiredate: expiredate.length === 0,
      cvv: cvv.length === 0,
    };
  }
export default class Visa extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            name:"",
            number:"",
            expiredate:"",
            cvv:"",
            save:false
        };

    }
    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleNumberChange = evt => {
        this.setState({ number: evt.target.value });
    };
    handleDateChange = evt => {
        this.setState({ expiredate: evt.target.value });
    };
    handleCvvChange = evt => {
        this.setState({ cvv: evt.target.value });
    };

    handleSaveChange = evt => {
        if(evt.target.checked){
            this.setState({ 
                name:'none',
                number:'none',
                expiredate:'none',
                cvv: 'none'
            });
        }
        else{
            this.setState({ 
                name:"",
                number:'',
                expiredate:'',
                cvv: ''
            });
        }
         console.log( evt.target.checked)
    };

    handleSubmit = evt => {
        if (!this.canBeSubmitted()) {
          evt.preventDefault();
          return;
        }
      };

      canBeSubmitted() {
        const errors = validate(this.state.number, this.state.expiredate, this.state.cvv, this.state.name);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
      }
    
    render(){
        const errors =validate(this.state.number, this.state.expiredate, this.state.cvv, this.state.name);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return(
            <div className="my-5" style={{color:'black'}}>
                <Helmet bodyAttributes={{style: 'background-color :#F0F0F0'}}/>
                <Link  to="/rule"> 
                    <Button cmeolor="link" style={{color: 'black',background:'#F0F0F0',border:'none',textAlign:'left'}}>
                    <i className="fa fa-arrow-left"></i>
                    </Button>
                </Link>
                <div className="mx-5" >
                    <h3>Payment Detail</h3>
                    <div className="icon-container" >
                        <i className="fa fa-cc-visa fa-3x" style={{color:'navy'}} >&nbsp;</i>
                        <i className="fa fa-cc-paypal  fa-3x" style={{color:'blue'}}>&nbsp;</i>
                        <i className="hide fa fa-cc-mastercard fa-3x" style={{color:'red'}}>&nbsp;</i>
                        <i className="hide fa fa-cc-discover fa-3x" style={{color:'orange'}}>&nbsp;</i>
                    </div>
                    <div className="form my-2" onSubmit={this.handleSubmit}>
                        <div className="card space">
                            <div className="label">CARDHOLDER NAME</div>
                            <input type="text" className="input" onChange={this.handleNameChange} placeholder="John More Doe" />
                        </div>
                        <div className="card space">
                            <div className="label">CARD NUMBER</div>
                            <input type="text" className="input"  onChange={this.handleNumberChange} placeholder="1111-2222-3333-4444"/>
                        </div>
                        <div className="card-grp space">
                            <div className="card-item">
                                <div className="label">EXPIRE DATE</div>
                                <input type="text"  className="input" onChange={this.handleDateChange} placeholder="05/21"/>
                            </div>
                            <div className="card-item">
                                <div className="label">CVV</div>
                                <input type="text" className="input" onChange={this.handleCvvChange} placeholder="123"/>
                            </div>
                        </div>
                    </div>
                    <div><input type="checkbox" onChange={this.handleSaveChange}  />&nbsp;Skip</div>
                </div>
                <Link className="d-flex my-2 mx-auto btn" style={{padding:'0', border:'none'}} to="/topicselect"> 
                        <Button disabled={isDisabled} style={{backgroundColor: '#FF6347',border:'none',margin:'0', padding:'0'}} block >
                            下一步
                        </Button>
                </Link>
            </div>
        )
    }
}



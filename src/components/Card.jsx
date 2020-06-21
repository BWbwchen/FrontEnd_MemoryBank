import React from 'react';
import './Card.css'
import CustomModal from './CustomModal.jsx'
import {withRouter} from 'react-router-dom';
class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalType: "futureType",
            modalShow: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
    render(){
        var bg = {
            backgroundImage:'url('+ this.props.imageUrl +')'
        }
        let title, filterEntity;
        if(this.props.type === "todayCard"){
            title = <div className="training-title"> 本日單字卡 </div>
            filterEntity = <div></div>
        }else{
            title = <div className="training-title"> {this.props.date}的單字卡 </div>
            if(this.props.type === "pastCard"){
                filterEntity = <div className="card-filter past-card-filter"></div>
            }else{
                filterEntity = <div className="card-filter"></div>
            }
            
        }
        return(
            <>
            <div className="card-box" onClick={this.handleShow}>
                <a style={bg} className="training-item">
                    {title}
                    <div className="complete-rate">當前完成率：{this.props.completeRate}%</div>
                    {filterEntity}
                </a>
            </div>
            <CustomModal show={this.state.modalShow} type={this.state.modalType} hide={this.handleClose} />
            </>
        )
    }
    handleShow(){
        if(this.props.type === 'todayCard' || this.props.type === 'futureCard'){
            this.setState({modalShow: true})
            if(this.props.type === 'todayCard'){
                this.setState({modalType: 'gamblingType'})
            }else{
                this.setState({modalType: 'futureType'})
            }
        }else{
            this.setState({modalShow: false}, ()=>{
                this.props.history.push("/Reviewing");
            })
        }
    }
    handleClose(){
        this.setState({modalShow: false})
    }
}export default withRouter(Card);


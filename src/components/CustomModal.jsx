import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import "./CustomModal.css";
export default class CustomModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){
        let title,content, buttonSet;
        if(this.props.type === 'gamblingType'){
            title = "你準備好開新的一場賭局了嗎？"
            content = (<div>
                <div>本週投注金額：</div>
                <input type="text" id="gamble-money-input"></input>
            </div>)
            buttonSet = (<>
                <Button variant="secondary" onClick={this.props.hide}>
                    關閉
                </Button>
                <Button variant="primary" onClick={this.props.hide}>
                    確認
                </Button>
                </>)
        }
        else{
            title = "Woops!"
            content = "未來任務尚未解鎖，有時間的話去複習之前的單字卡吧！"
            buttonSet = (<Button variant="primary" onClick={this.props.hide}>知道了！</Button>)
        }
        return(
            <div>
                <Modal show={this.props.show} onHide={this.props.hide}>
                    <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{content}</Modal.Body>
                    <Modal.Footer>
                        {buttonSet}
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

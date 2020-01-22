import React, { Component } from "react";

import Button from "../../../../VisualPanel/visualPanelComponents/ButtonBlock/Button";

const values = ["1", "2", "3", "4", '5', '6', '7', '8', '9', '*', '0', '#', '+', <i className="fas fa-phone"/>, <i className='fas fa-backspace'/>];


class MainButtonBlock extends Component {
    static renderButtons() {
        return values.map((value, index) => <Button className="common-keyboard-button btn" value={value} key={index}/>);
    }

    render() {
        return (
            <div className="main-button-block  d-flex justify-content-around flex-wrap">
                {MainButtonBlock.renderButtons()}
            </div>
        )
    }
}

export default MainButtonBlock;
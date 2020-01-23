import React from 'react';
import Button from "../../../../../../CommonComponens/Button"
import { clickInComingLine } from  "../../../../../../resources/script/handlerButtonClick";

const values = ["1", "2", "3", "4", '5'];


const IncomingButtonBlock = () => {
    return (
        <div className="incoming-button-block d-flex flex-nowrap align-items-center justify-content-around w-100">
            {
                values.map((value, i) => (
                    <Button
                        onClick={clickInComingLine}
                        key={value}
                        className={`incoming-line-button-item d-flex ${i===2 ? "active" : ""} ${i===0 || i===1 ? "on-hold" : ""}`}
                        value={`Линия ${value}`}
                    />
                ))
            }

        </div>
    );
};

export default IncomingButtonBlock;

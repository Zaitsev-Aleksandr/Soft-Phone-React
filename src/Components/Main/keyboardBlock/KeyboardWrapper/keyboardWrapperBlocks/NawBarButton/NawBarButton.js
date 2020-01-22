import React from "react"
import Button from "../../../../VisualPanel/visualPanelComponents/ButtonBlock/Button";


const NawBarDuttonBlock = () => {
    return (
        <div className="d-flex flex-nowrap justify-content-around align-items-center w-100 py-2">
            <Button className="navigation-button loudly-style" value="Набор"/>
            <Button className="navigation-button loudly-style" value="Последние"/>
            <Button className="navigation-button loudly-style" value="Контакты"/>
        </div>
    )
};

export default NawBarDuttonBlock
import React from "react"
import ButtonBlock from "./visualPanelComponents/ButtonBlock/ButtonBlock"
import VirtualMonitorBlock from "./visualPanelComponents/DisplayInfoBlock/VirtualMonitorBlock";



class VisualPanel extends React.Component{
       render() {
          return(
              <>
                <VirtualMonitorBlock/>
                <ButtonBlock/>
            </>
        )
    }

}


export default VisualPanel;
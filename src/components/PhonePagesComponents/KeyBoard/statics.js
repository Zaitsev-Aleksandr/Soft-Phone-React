import  React from "react"
import Addvalue from "../../common/icon/AddValue";
import Transfer from "../../common/icon/Transfer";
import HoldCall from "../../common/icon/HoldCall";
export const passKeyValues = [
    {
        defaultValue: "1",
        dropDownItems:[ ]
    },
    {
        defaultValue: "2",
        dropDownItems:[]
    },
    {
        defaultValue: "3",
        dropDownItems:[]
    },
    {
        defaultValue: "4",
        dropDownItems:[]
    },
    {
        defaultValue: "5",
        dropDownItems:[]
    },
    {
        defaultValue: "6",
        dropDownItems:[]
    },
    {
        defaultValue: "7",
        dropDownItems:[]
    },
    {
        defaultValue: "8",
        dropDownItems:[]
    },
    {
        defaultValue: "9",
        dropDownItems:[]
    },
    {
        defaultValue: "*",
        dropDownItems:[]
    },
    {
        defaultValue: "0",
        dropDownItems:["+"]
    },
    {
        defaultValue: "#",
        dropDownItems:[]
    }
];
export const callKeyValues = [
    {
        defaultValue: <Addvalue/>,
        dropDownItems:["Конференция"]

    },
    {
        defaultValue: <Transfer/>,
        dropDownItems:["Трансфер"]

    },
    {
        defaultValue: <HoldCall />,
        dropDownItems:["Удержантие"]
    }
 ];
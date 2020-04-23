export const FREE_LINE = (arr, i) => {
    arr[i].displayValue = false;
    arr[i].contactValueName = ""
    arr[i].contactValueNumber = "";
    arr[i].callStatus = false;
    arr[i].holdLine = false;
    arr[i].conferenceActive = false;
    arr[i].startCallTime = "";
    arr[i].inComingCall = false
};
export const ACTIVE_LINE = (arr, Name, Number, i) => {
    arr[i].displayValue = true;
    arr[i].contactValueName = Name;
    arr[i].contactValueNumber = Number;
    arr[i].callStatus = true;
    arr[i].holdLine = false;
    arr[i].conferenceActive = false;
    arr[i].startCallTime = Date.now();
    arr[i].inComingCall = false
};
export const HOLD_LINE= (arr, i) => {
    arr[i].displayValue = false;
    arr[i].holdLine = true;
    arr[i].conferenceActive = false;
};
export const CALL_WAITING_LINE= (arr, i) => {
    arr[i].displayValue = false;
    arr[i].contactValueName = ""
    arr[i].contactValueNumber = "";
    arr[i].callStatus = false;
    arr[i].holdLine = true;
    arr[i].conferenceActive = false;
    arr[i].startCallTime = Date.now();
    arr[i].inComingCall = true
};
export const CHANGE_LINE = (arr, i) => {
    arr[i].displayValue = true;
    arr[i].holdLine = false;
}

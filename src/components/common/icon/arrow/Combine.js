import React from 'react';

const Combine = ({ renderConferenceComponent }) => {
    return (
        <div onClick ={renderConferenceComponent}
             className="d-flex flex-column px-2 align-items-center justify-content-center">
            <svg cursor="pointer" width="18" height="13" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8337 7.6946L19.1143 11.414C18.8573 11.6711 18.4416 11.6711 18.1872 11.414L17.5692 10.7959C17.3121 10.5389 17.3121 10.1232 17.5692 9.86881L20.2056 7.23241L17.5692 4.59601C17.3121 4.33893 17.3121 3.92324 17.5692 3.66889L18.1845 3.04535C18.4416 2.78827 18.8573 2.78827 19.1116 3.04535L22.831 6.76475C23.0908 7.02183 23.0908 7.43752 22.8337 7.6946V7.6946Z" fill="#213991"/>
                    <path d="M1.97363 12.8301L7.05243 12.8301C8.45805 12.8301 9.76052 12.0923 10.4832 10.8867L11.5108 9.17249C12.2335 7.96688 13.536 7.22909 14.9416 7.22909L17.3763 7.22909" stroke="#213991" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M1.97368 1.62793L7.05248 1.62793C8.4581 1.62793 9.76057 2.36572 10.4833 3.57132L11.5109 5.28552C12.2336 6.49112 13.536 7.22891 14.9417 7.22891L20.1769 7.22891" stroke="#213991" strokeWidth="3" strokeLinecap="round"/>

            </svg>
            <span className="conference-item__title"> Объеденить</span>

        </div>
    );
};

export default Combine;

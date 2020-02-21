import React from 'react';

const MyComponent = () => {
    const enterCallStatus = (...status) => {
        switch ({status}) {
            case 3:
                return 'Вызов...';
            case 4:
                return "Удержание";

            case 5:
                return "";

            case 65:
                return "Линия Занята";

            case 12:
                return "Вызов завершен";
            default:

        }
    };
    return (
        <div>
            {enterCallStatus}
        </div>
    );
};

export default MyComponent;



import React from 'react';
// import './CustomButton.css'

 const CustomButton =  ({className, children , onClick, ...props}) =>  {
    return(
        <button {...props} type="button" className={className} onClick={onClick}>{children}</button>
    );

}
export default CustomButton;
 
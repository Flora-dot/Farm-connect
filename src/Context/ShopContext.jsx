import React from "react";
import { createContext } from "react";

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
    const contextValue = {}


    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}



export default ShopContextProvider
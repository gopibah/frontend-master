import React, { createContext } from 'react';


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const ContextValue = {}
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

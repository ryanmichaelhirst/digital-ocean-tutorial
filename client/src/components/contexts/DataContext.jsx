import React, { useState, createContext } from "react";

export const DataContext = createContext({
        data: [],
        updateContext: () => {}
    }
);

export const DataContextProvider = (props) => {
    const updateContext = data => {
        setContext(context => ({ ...context, data: data }));
    };

    const [context, setContext] = useState({
        data: [],
        updateContext
    });

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
};
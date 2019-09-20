import React from 'react';
import Home from "./components/Home";
import { DataContextProvider } from "./components/contexts/DataContext";

const App = () => {
    return (
        <DataContextProvider>
            <Home />
        </DataContextProvider>
    );
};

export default App;
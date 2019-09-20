import React, {Fragment, useContext, useEffect, useState} from 'react';
import { DataContext } from "../components/contexts/DataContext";
import Dashboard from './Dashboard';

const HomeContainer = () => {
    const [data, setData] = useState([]);
    const context = useContext(DataContext);

    useEffect( () => {
        fetch("/api/getSalesData")
            .then(res => res.json())
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        context.updateContext(data);
    }, [data]);

    return (
        <Fragment>
            <div style={{ display: "flex", backgroundColor: "#505bda" }}>
                <p style={{ padding: 12, margin: "0 auto", color: "white" }}>Anime Sales</p>
            </div>
            <Dashboard data={context.data} />
        </Fragment>

    )
};

export default HomeContainer;
import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import ChartView from "./ChartView";

const Dashboard = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        setChartData(data);
    }, [data]);

    return (
        <ChartView
            chartsPerRow={2}
            className={"chart-sm"}
            component={<BarChart />}
            data={chartData}
            itemsPerChart={5}
        />
    );
};

export default Dashboard;
import React  from "react";

let dataArr = [];
let listCount = 1;
const ChartList = ({ data, chartsPerRow, className, component, itemsPerChart, category }) => {
    if (!data) {
        return null;
    }

    const jsx = [];
    let barCharts = [];
    let iter = 1;
    let graphCount = 0;

    for (let ii = 0; ii < data.length; ii++) {
        dataArr = [ ...dataArr, data[ii] ];
        if ( ((ii + 1) % itemsPerChart === 0 && ii !== 0) ||
            (ii === data.length - 1 && dataArr.length !== 0)) {
            console.debug(ii);
            console.debug(dataArr);
            barCharts.push(
                React.cloneElement(component, {
                    data: dataArr,
                    key: `chart-${iter}`,
                    chartId: iter,
                    className: `chart ${className}`,
                    category
                })
            );
            dataArr = [];
            iter++;
            graphCount++;
        }

        if (graphCount === chartsPerRow ||
            (ii === data.length - 1 && graphCount < chartsPerRow)
        ) {
            jsx.push(
                <div style={{ height: 250, display: "flex" }} key={`chart-list-${listCount}`}>
                    {barCharts.map(chart => chart)}
                </div>
            );
            barCharts = [];
            graphCount = 0;
            listCount++;
        }
    }

    return jsx
};

export default ChartList;
import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const BarChart = ({ data, chartId, className, style }) => {
    useEffect(() => {
        let chart = am4core.create(`chart-${chartId}`, am4charts.XYChart);
        chart.data = data.map(anime => {
            const { Title, Year, Season, Total, AverageSales, Gross, Studio, Source } = anime;
            return {
                Total,
                Title,
                Year: Year.toString(),
                Season,
                Studio,
                Source,
                AverageSales,
                Gross
            };
        });

        let title = chart.titles.create();
        title.text = `Anime Sales Chart ${chartId}`;

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.title.text = "Series";
        categoryAxis.title.fontWeight = "bold";
        categoryAxis.dataFields.category = "Title";
        categoryAxis.renderer.grid.template.location = 0;

        let label = categoryAxis.renderer.labels.template;
        label.truncate = true;
        label.maxWidth = 120;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Gross (¥1m)";
        valueAxis.title.fontWeight = "bold";

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "Gross";
        series.dataFields.categoryX = "Title";
        series.dataFields.salesX = "AverageSales";
        series.dataFields.totalX = "Total";
        series.dataFields.grossX = "Gross";
        series.dataFields.seasonX = "Season";
        series.dataFields.yearX = "Year";
        series.dataFields.studioX = "Studio";
        series.dataFields.sourceX = "Source";
        series.name = "Gross";

        let columnTemplate = series.columns.template;
        series.columns.template.fillOpacity = .8;
        series.heatRules.push({
            target: columnTemplate,
            property: "fill",
            dataField: "valueY",
            min: am4core.color("#ecfcff"),
            max: am4core.color("#3e64ff")
        });

        series.tooltipHTML = `
            <p style="text-align: center"><strong>{categoryX}</strong></p>
            <hr />
            <table>
                <tr>
                    <th align="left" style="padding-right: 30px">Gross</th>
                    <td>{valueY}¥</td>
                </tr>
                <tr>
                    <th align="left">Season</th>
                    <td>{seasonX}</td>
                </tr>
                <tr>
                    <th align="left">Year</th>
                    <td>{yearX}</td>
                </tr>
                <tr>
                    <th align="left">Studio</th>
                    <td>{studioX}</td>
                </tr>
                <tr>
                    <th align="left">Source</th>
                    <td>{sourceX}</td>
                </tr>
                <tr>
                    <th align="left">Sales</th>
                    <td>{totalX}</td>
                </tr>
            </table>
            <hr />
        `;
        chart.cursor = new am4charts.XYCursor();

        return () => {
            if (chart) {
                chart.dispose();
            }
        }
    }, [data, chartId]);

    return (
        <div
            className={className}
            id={`chart-${chartId}`}
            style={style}
        />
    );
};

export default BarChart;
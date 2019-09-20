import React, { useEffect, useState, Fragment, memo } from "react";
import ChartList from "./ChartList";
import Pagination from "./Pagination";
import Loader from "./loader";
import Msg from "./Msg";

function propsAreEqual(prevProps, nextProps) {
    return (
        prevProps.data === nextProps.data &&
        prevProps.component === nextProps.component
    );
}

const ChartView = memo(({ data, component, chartsPerRow, className, itemsPerChart, category }) => {
    const [isLoading, setLoading] = useState(true);
    const [settings, setSettings] = useState({
        data: null,
        range: null,
        total: null,
        pageCount: null,
        per_page: 10
    });

    useEffect( () => {
        setTimeout(() => {
            setLoading(false);
        }, 300);

        const total = data.length;
        setSettings(settings => {
            return {
                ...settings,
                data,
                total,
                pageCount: Math.ceil(total / settings.per_page),
                range: data.slice(0, 10)
            };
        });
    }, [data]);

    if (isLoading) {
        return <Loader />;
    }

    if (data.length === 0) {
        return (
            <Msg
                header="Oh no :("
                msg="There's no data to display for your selection, please try again."
            />
        );
    }

    return (
        <Fragment>
            <ChartList
                data={settings.range}
                chartsPerRow={chartsPerRow}
                component={component}
                className={className}
                itemsPerChart={itemsPerChart}
                category={category}
            />
            <div style={{ textAlign: "center" }}>
                <Pagination
                    pageCount={settings.pageCount}
                    data={settings.data}
                    perPage={settings.per_page}
                    onClick={newData => setSettings({
                        ...settings,
                        range: newData
                    })}
                />
            </div>
        </Fragment>
    );
}, propsAreEqual);

export default ChartView;
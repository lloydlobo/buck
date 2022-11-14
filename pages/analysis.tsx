import React, { useEffect, useState } from 'react';
import Stats from '../components/category/stats/Stats';
import { ChartMultitype } from '../components/charts/ChartMultitype';
import D3ScatterplotWithTooltip from '../components/charts/D3ScatterplotWithTooltip';
import Layout from '../components/Layout';
import { SpinnerLoading } from '../components/ui/SpinnerLoading';
import { dataD3ScatterPlot } from '../utils/data/d3Scatterplot';

export default function AnalysisScreen() {
    let width = 500;
    let height = 300;

    const [loading, setloading] = useState(true); // Pre-loader before page renders

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);
    }, []);

    return (
        <Layout title="Analysis">
            {loading ? (
                <SpinnerLoading />
            ) : (
                <>
                    <D3ScatterplotWithTooltip
                        data={dataD3ScatterPlot}
                        width={width}
                        height={height}
                    />
                    <div className="mb-4 mt-0 flex">
                        <Stats />
                    </div>
                    <ChartMultitype />
                </>
            )}
        </Layout>
    );
}

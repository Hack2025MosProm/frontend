import React from 'react';
import { Col, Row, Skeleton } from 'antd';
import { DataFilter } from '@/features/data-filter';
import { useGraphs } from '@/features/graphs';
import { useCompanies } from '@/providers';
import Plot from 'react-plotly.js';
import LazyLoad from 'react-lazy-load';

interface Props {
    className?: string;
}

// Конфигурация размеров для разных типов графиков
const graphSizes = {
    "treemap_prod": {
        col: 24,
        height: 800,
    },
    "scatter_busy": {
        col: 12,
        height: 600,
    },
    "norm_export": {
        col: 12,
        height: 600,
    },
    "pie_prod": {
        col: 12,
        height: 600,
    },
    "area_ecology": {
        col: 12,
        height: 600,
    },
    "hist_energy": {
        col: 12,
        height: 600,
    },
    "table_invest": {
        col: 12,
        height: 600,
    }
} as const;

// Функция для получения настроек размера по типу графика
const getGraphSize = (graphType: string) => {
    return graphSizes[graphType as keyof typeof graphSizes] || {
        col: 12,
        height: 500,
    };
};

export const Dashboard: React.FC<Props> = ({ className }) => {
    const { loading } = useCompanies();
    const { graphs, refetch, loading: graphLoading } = useGraphs();

    return (
        <div className={className}>
            <Skeleton active={loading || graphLoading} loading={loading || graphLoading}>
                <h1> Единый дашборд по промышленности</h1>

                <Row gutter={[32, 32]}>
                    {graphs.map((graph) => {
                        const sizeConfig = getGraphSize(graph.graph_type);

                        return (
                            <Col key={graph.id} lg={sizeConfig.col}>
                                <LazyLoad height={sizeConfig.height}>
                                    <Plot
                                        data={graph.graph_data.data}
                                        layout={{
                                            ...graph.graph_data.layout,
                                            height: sizeConfig.height,
                                        }}
                                        style={{ width: '100%', height: `${sizeConfig.height}px` }}
                                        config={{ responsive: true }}
                                    />
                                </LazyLoad>
                            </Col>
                        );
                    })}
                </Row>

                <DataFilter
                    onSubmit={data => refetch(data.company)}
                />
            </Skeleton>
        </div>
    );
};
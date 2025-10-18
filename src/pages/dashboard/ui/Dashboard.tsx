import { CompanyList } from '@/features/company-list';
import { StatisticCard } from '@/features/statistic-card';
import React from 'react';
import plot1 from '@/assets/images/plots/plot1.png';
import plot2 from '@/assets/images/plots/plot2.png';
import plot3 from '@/assets/images/plots/plot3.png';
import { Card, Col, Divider, Row, Statistic, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, } from '@ant-design/icons';
import { DataFilter } from '@/features/data-filter';

interface Props {
    className?: string;
}

export const Dashboard: React.FC<Props> = ({ className }) => {
    const data = {
        revenue: 106150000,    // Выручка
        profit: 6650000,       // Прибыль
        loss: -90000          // Убыток
    };

    const formatValue = (value: number) => {
        return `${(value / 1000).toLocaleString('ru-RU')}`;
    };

    return (
        <div className={className}>
            <h1>Компании Москвы</h1>
            <StatisticCard />

            <DataFilter />

            <Typography.Title>Индикаторы</Typography.Title>
            <div className={`finance-cards ${className || ''}`}>
                <Row gutter={[16, 16]}>
                    {/* Карточка Выручки */}
                    <Col xs={24} sm={12} lg={8}>
                        <Card className="finance-card revenue-card">
                            <Statistic
                                title="Выручка предприятия, тыс. руб."
                                value={formatValue(data.revenue)}
                                valueStyle={{ color: '#1890ff' }}
                                suffix="тыс. руб."
                            />
                            <div className="card-subtitle">Индикатор-Выручка</div>
                        </Card>
                    </Col>

                    {/* Карточка Прибыли */}
                    <Col xs={24} sm={12} lg={8}>
                        <Card className="finance-card profit-card">
                            <Statistic
                                title="Чистая прибыль, тыс. руб."
                                value={formatValue(data.profit)}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="тыс. руб."
                            />
                            <div className="card-subtitle">Индикатор-Прибыль</div>
                        </Card>
                    </Col>

                    {/* Карточка Убытка */}
                    <Col xs={24} sm={12} lg={8}>
                        <Card className="finance-card loss-card">
                            <Statistic
                                title="Чистая прибыль (убыток), тыс. руб."
                                value={formatValue(data.loss)}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="тыс. руб."
                            />
                            <div className="card-subtitle">Индикатор-Убыток</div>
                        </Card>
                    </Col>
                </Row>
            </div>

            <Divider />

            <Typography.Title>Графики</Typography.Title>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 40,
            }}>
                <img src={plot1} />
                <Divider />
                <img src={plot2} />
                <Divider />
                <img src={plot3} />
            </div>
            <Divider />
            <br />
            <h2>Рейтинг компаний Москвы (по выручке)</h2>
            <CompanyList />
        </div>
    );
};
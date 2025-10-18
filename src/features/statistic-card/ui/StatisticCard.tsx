import { Card, Col, Row, } from 'antd';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import './style.scss'

interface Props {
    className?: string;
    data?: StatisticData;
    defaultActiveYear?: string;
}

interface StatisticItem {
    label: string;
    value: string;
}

interface StatisticData {
    [key: string]: StatisticItem[]
}

const mockData: StatisticData = {
    "2022": [
        { label: 'Население', value: '12,20 млн чел.' },
        { label: 'ЮЛ', value: '575,80 тыс. ЮЛ' },
        { label: 'ИП', value: '420,10 тыс. ИП' },
        { label: 'Территория', value: '2,56 тыс. км²' },
    ],
    "2023": [
        { label: 'Население', value: '12,64 млн чел.' },
        { label: 'ЮЛ', value: '613,38 тыс. ЮЛ' },
        { label: 'ИП', value: '457,87 тыс. ИП' },
        { label: 'Территория', value: '2,56 тыс. км²' },
    ],
    "2024": [
        { label: 'Население', value: '12,35 млн чел.' },
        { label: 'ЮЛ', value: '587,45 тыс. ЮЛ' },
        { label: 'ИП', value: '432,15 тыс. ИП' },
        { label: 'Территория', value: '2,56 тыс. км²' },
    ],
};

interface ParsedValue {
    cost: string;
    title: string;
}

// Функция для парсинга значения
const parseValue = (value: string): ParsedValue => {
    // Регулярное выражение для поиска числовой части и единиц измерения
    const match = value.match(/^([\d,.\s]+)(.+)$/);

    if (match) {
        const [, cost, title] = match;
        return {
            cost: cost.trim(),
            title: title.trim()
        };
    }

    // Если не удалось распарсить, возвращаем исходное значение как cost
    return {
        cost: value,
        title: ''
    };
};

// Компонент для отображения распарсенного значения
const StatisticValue: React.FC<{ value: string }> = ({ value }) => {
    const parsedValue = useMemo(() => parseValue(value), [value]);

    return (
        <div className="statistic-value-item">
            <span className="statistic-value-cost">{parsedValue.cost}</span>
            {parsedValue.title && (
                <span className="statistic-value-title">{parsedValue.title}</span>
            )}
        </div>
    );
};



export const StatisticCard: React.FC<Props> = ({ data = mockData, defaultActiveYear, className }) => {
    const years = Object.keys(data).sort();
    const firstYear = years[0];

    const [activeYear, setActiveYear] = useState<string>(
        defaultActiveYear || years[years.length - 1] || firstYear
    );

    const activeYearData = data[activeYear] || [];

    const barHeights = useMemo(() => {
        return years.map((_, index) => {
            // TODO: Высчитывать высоту на основе реальных данных
            return 30 + (index * 15);
        });
    }, [years]);

    const handleBarHover = (year: string) => {
        setActiveYear(year);
    };


    return (
        <div className={clsx("statistics-container", className)}>
            {/* Гистограмма */}
            <div className="histogram">
                <div className="histogram-bars">
                    {years.map((year, index) => (
                        <div
                            key={year}
                            className={clsx(
                                "histogram-bar",
                                year === activeYear && "histogram-bar--active"
                            )}
                            style={{ height: `${barHeights[index]}px` }}
                            onMouseEnter={() => handleBarHover(year)}
                            onClick={() => setActiveYear(year)}
                        >
                            <div className="histogram-bar-label">{year}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Отображение данных для активного года */}
            <div className="year-data">
                <h3 className="year-title">Данные за {activeYear} год</h3>
                <Row gutter={[16, 16]} className="statistics-card-container">
                    {activeYearData.map((item, index) => (
                        <Col span={12} key={index} className="statistics-card-col">
                            <Card variant='borderless' className="statistics-card">
                                <div className="statistic-item">
                                    <div className="statistic-label">{item.label}</div>
                                    <div className="statistic-value">
                                        <StatisticValue value={item.value} />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};
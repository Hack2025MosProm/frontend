import { Divider, List, Skeleton, } from 'antd';
import clsx from 'clsx';
import React from 'react';
import './style.scss'

interface Props {
    className?: string;
    items?: Company[]
}

interface Company {
    rank: number;
    name: string;
    revenue: string;
    inn: string;
}

const initialData: Company[] = [
    { rank: 1, name: 'ПАО "НК Роснефть"', revenue: '9 трлн', inn: '7706107510' },
    { rank: 2, name: 'ПАО "Лукойл"', revenue: '3 трлн', inn: '7708004767' },
    { rank: 3, name: 'ОАО "РЖД"', revenue: '3 трлн', inn: '7708503727' },
    { rank: 4, name: 'ООО "Эксельсиор"', revenue: '1 трлн', inn: '7703562479' },
    { rank: 5, name: 'ПАО "Транснефть"', revenue: '1 трлн', inn: '7706061801' },
    { rank: 6, name: 'АО "Торговый дом "Перекресток"', revenue: '944 млрд', inn: '7728029110' },
    { rank: 7, name: 'ПАО "Аэрофлот"', revenue: '713 млрд', inn: '7721040126' },
    { rank: 8, name: 'ООО "Лукойл-РНП-Трейдинг"', revenue: '704 млрд', inn: '9705083130' },
    { rank: 9, name: 'ООО "Ати"', revenue: '683 млрд', inn: '7706806518' },
    { rank: 10, name: 'ООО "Альфа-М"', revenue: '639 млрд', inn: '7743931676' },
    { rank: 11, name: 'АО "Концерн Росэнерготатом"', revenue: '594 млрд', inn: '7721632827' },
    { rank: 12, name: 'ООО "Яндекс"', revenue: '545 млрд', inn: '7736207543' },
];

export const CompanyList: React.FC<Props> = ({ items = initialData, className }) => {
    return (
        <div className={clsx("company-list-container", className)}>
            <List
                dataSource={items}
                grid={{ gutter: 32, column: 3 }}
                itemLayout="horizontal"
                renderItem={(item) => {
                    return (
                        <List.Item>
                            <Skeleton avatar title={false} active loading={false}>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.name}</a>}
                                    description={(
                                        <div>
                                            <span>{item.revenue}</span>
                                            <Divider type='vertical'/>
                                            <span>ИНН {item.inn}</span>
                                        </div>
                                    )}
                                />
                            </Skeleton>
                        </List.Item>
                    )
                }}
            />
        </div>
    );
};
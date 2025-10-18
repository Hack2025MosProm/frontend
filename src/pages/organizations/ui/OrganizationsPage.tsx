import { organizationApi } from '@/api';
import type { Organization } from '@/api/organizations-api';
import { KpFormDrawer } from '@/features/kp-form';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

interface Props {
    className?: string;
}

export const OrganizationsPage: React.FC<Props> = ({ className }) => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Organization[]>([]);
    const [editingOrganization, setEditingOrganization] = useState<Organization | null>(null);
    const [newOrg, setNewOrg] = useState(false);

    useEffect(() => {
        fetchOrganizations();
    }, []);

    const fetchOrganizations = async () => {
        try {
            setLoading(true);
            const { data } = await organizationApi.getAll();
            //const r = await organizationApi.getCompanies();
            //console.log(r.data);
            setItems(data);
        } catch (err) {
            console.log(err);
            message.warning(`При загрузке организаций произошла ошибка!`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={className}>
            <Typography.Title style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>Организации</span>
                <Button
                    onClick={() => setNewOrg(true)}
                    icon={<PlusOutlined />}
                    type='primary'
                    style={{ position: 'relative', top: 4, }}
                >
                    Добавить новую
                </Button>
            </Typography.Title>

            <Table
                columns={[
                    { dataIndex: 'inn', title: 'ИНН' },
                    { dataIndex: 'name', title: 'Наименование организации' },
                    {
                        dataIndex: '__menu',
                        title: <div style={{ textAlign: 'right' }}></div>,
                        render: (_, record) => (
                            <Space size="middle" style={{ width: '100%', justifyContent: 'flex-end' }}>
                                <Button
                                    icon={<EditOutlined />}
                                    type='primary'
                                    onClick={() => setEditingOrganization(record)}
                                >
                                    Редактировать
                                </Button>
                            </Space>
                        ),
                    }
                ]}
                rowKey={'inn'}
                loading={loading}
                dataSource={items}
            />

            <KpFormDrawer
                opened={newOrg}
                organization={editingOrganization || undefined}
                onClose={() => {
                    setEditingOrganization(null);
                    setNewOrg(false);
                }}
            />
        </div>
    );
};
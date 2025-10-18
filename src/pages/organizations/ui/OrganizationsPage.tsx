import type { Company, } from '@/api/organizations-api';
import { KpFormDrawer } from '@/features/kp-form';
import { useCompanies } from '@/providers';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space, Table, Typography } from 'antd';
import React, { useState } from 'react';

interface Props {
    className?: string;
}

export const OrganizationsPage: React.FC<Props> = ({ className }) => {
    const [editingOrganization, setEditingOrganization] = useState<Company | null>(null);
    const [newOrg, setNewOrg] = useState(false);
    const { companies, refreshCompanies, loading } = useCompanies();



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
                rowKey={'id'}
                loading={loading}
                dataSource={companies}
            />

            <KpFormDrawer
                opened={newOrg}
                organization={editingOrganization || undefined}
                onClose={() => {
                    setEditingOrganization(null);
                    setNewOrg(false);
                }}
                onSaved={() => {
                    refreshCompanies();
                    setNewOrg(false);
                    setEditingOrganization(null);
                }}
            />
        </div>
    );
};
import type { Company, } from '@/api/organizations-api';
import { Drawer } from 'antd';
import React from 'react';
import { KpForm } from './KpForm';

interface Props {
    opened?: boolean;
    organization?: Company;
    onClose?: () => void
    onSaved?: () => void
}

export const KpFormDrawer: React.FC<Props> = ({ organization, opened, onClose, onSaved }) => {
    return (
        <Drawer
            title={opened ? "Добавление организации" : `Редактирование организации: ${organization?.name || '-'} ${organization ? ', ИНН: ' + organization.inn : ''}`}
            width={'80%'}
            onClose={onClose}
            open={opened || organization !== undefined}
            styles={{
                body: {
                    paddingBottom: 80,
                },
            }}
        >
            {(opened || organization) && (
                <KpForm
                    organization={organization}
                    onSaved={onSaved}
                    isNew={opened}
                />
            )}
        </Drawer>
    );
};
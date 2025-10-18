import { KpForm } from '@/features/kp-form';
import { Typography } from 'antd';
import clsx from 'clsx';
import React from 'react';

interface Props {
    className?: string;
}

export const KpPage: React.FC<Props> = ({ className }) => {
    return (
        <div className={clsx(className)}>
            <Typography.Title>Информация об организации</Typography.Title>
            <KpForm />
        </div>
    );
};
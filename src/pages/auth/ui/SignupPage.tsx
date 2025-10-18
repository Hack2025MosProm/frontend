import { RegisterForm } from '@/features/login-form';
import { Card, Typography } from 'antd';
import React from 'react';
import './style.scss'

const { Title, Paragraph } = Typography;

interface Props {
    className?: string;
}

export const SignupPage: React.FC<Props> = () => {
    return (
        <div className="auth-page">
            <Card className="auth-card" style={{ background: '#fff', borderColor: '#d4d4d4' }} styles={{
                body: {
                    background: '#fff'
                }
            }}>
                <Title level={2} style={{ textAlign: 'center' }}>Регистрация</Title>
                <Paragraph type="secondary" style={{ textAlign: 'center', marginBottom: 24 }}>
                    Создание нового аккаунта
                </Paragraph>
                <RegisterForm />
            </Card>
        </div>
    );
};
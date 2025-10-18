import { useAuth } from '@/providers';
import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
    className?: string;
}

export const RegisterForm: React.FC<Props> = ({ className }) => {
    const { register, isLoading } = useAuth();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values: { username: string; password: string; confirmPassword: string }) => {
        try {
            await register({
                username: values.username,
                password: values.password
            });

            setTimeout(() => {
                navigate('/');
            }, 500);
            message.success('Регистрация прошла успешно!');
        } catch {
            message.error('Ошибка регистрации. Попробуйте другой логин.');
        }
    };

    const validateConfirmPassword = (_: any, value: string) => {
        if (!value || form.getFieldValue('password') === value) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Пароли не совпадают'));
    };

    return (
        <Form
            className={className}
            layout="vertical"
            onFinish={onFinish}
            form={form}
        >
            <Form.Item
                name="username"
                label="Логин"
                rules={[
                    { required: true, message: 'Введите логин' },
                    { min: 3, message: 'Логин должен содержать минимум 3 символа' },
                    { max: 50, message: 'Логин должен содержать максимум 50 символов' }
                ]}
            >
                <Input placeholder="Придумайте логин" size="large" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Пароль"
                rules={[
                    { required: true, message: 'Введите пароль' },
                    { min: 6, message: 'Пароль должен содержать минимум 6 символов' }
                ]}
            >
                <Input.Password placeholder="Придумайте пароль" size="large" />
            </Form.Item>

            <Form.Item
                name="confirmPassword"
                label="Подтверждение пароля"
                dependencies={['password']}
                rules={[
                    { required: true, message: 'Подтвердите пароль' },
                    { validator: validateConfirmPassword }
                ]}
            >
                <Input.Password placeholder="Повторите пароль" size="large" />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    loading={isLoading}
                >
                    Зарегистрироваться
                </Button>
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
                <span>Уже есть аккаунт? </span><Link to={'/auth'}>Войти</Link>
            </Form.Item>
        </Form>
    );
};
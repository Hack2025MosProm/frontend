import { Button, Col, Form, Input, message, Row, Tabs } from 'antd';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import './style.scss'
import { steps } from '../model/steps';
import { organizationApi, type Company } from '@/api/organizations-api';
import dayjs from 'dayjs';


interface Props {
    className?: string;
    organization?: Company
    onSaved?: () => void
    isNew?: boolean
}

export const KpForm: React.FC<Props> = ({ className, isNew, organization, onSaved }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    //@ts-ignore
    const [stepStatus, setStepStatus] = useState<number[]>([]);
    //const carouselRef = useRef<any>(null);

    useEffect(() => {
        if (!organization) {
            setCurrentStep(0);
            form.resetFields();
            return;
        }
        form.setFieldsValue(organization);

        return () => {
            setCurrentStep(0);
            form.resetFields();
        }
    }, [organization]);

    const next = () => {
        console.log(currentStep, currentStep + 1);
        form
            .validateFields()
            .then(() => {
                const nextStep = currentStep + 1;
                setCurrentStep(nextStep);
                //scrollToStep(nextStep);
            })
            .catch(() => {
                console.log('cant')
                message.error('Please complete the required fields');
            });
    };

    const prev = () => {
        const prevStep = currentStep - 1;
        setCurrentStep(prevStep);
        //scrollToStep(prevStep);
    };

    /* const scrollToStep = (stepIndex: number) => {
        if (carouselRef.current) {
            const stepsPerChunk = 4;
            const targetChunk = Math.floor(stepIndex / stepsPerChunk);
            carouselRef.current.goTo(targetChunk);
        }
    }; */

    const validateStep = (stepIndex: number) => {
        const values = form.getFieldsValue();
        const requiredFields = [
            'inn',
            'name',
            'fullname',
        ];

        const emptyFields = requiredFields.filter((field) => {
            const fieldValue = values[field];
            return !fieldValue;
        });

        if (emptyFields.length > 0) {
            setStepStatus((prev) => {
                const newStatus = [...prev];
                newStatus[stepIndex] = 0;
                return newStatus;
            });
        } else {
            setStepStatus((prev) => {
                const newStatus = [...prev];
                newStatus[stepIndex] = 2;
                return newStatus;
            });
        }
    };

    const handleSubmit = async (values: any) => {
        try {
            setLoading(true);

            const sendData = {
                ...(organization || {}),
                ...values,
                ['Дата последнего изменения']: values['Дата последнего изменения'] ? dayjs(values['Дата последнего изменения']).format() : null,
            };

            const {
                id,
                name,
                full_name,
                inn,
                year,
                spark_status,
                main_industry,
                company_size_final,
                organization_type,
                support_measures,
                special_status,
                confirmation_status,
                confirmed_at,
                confirmer_identifier,
                json_data,
                created_at,
                updated_at,
                ...rest
            } = sendData;

            if (isNew) {
                await organizationApi.createFromJsom(rest);
            } else {
                await organizationApi.updateJsonData(id, rest);
            }

            onSaved?.();

            message.success("Данные успешно обновлены!")
        } catch (err) {
            message.warning('Не удалось сохранить данные формы');
            console.log(err);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className={clsx('kp-form', className)}>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item hidden name="№">
                    <Input />
                </Form.Item>

                <Form.Item hidden name="id">
                    <Input />
                </Form.Item>
                <div style={{ margin: '20px 0' }}>
                    <Tabs
                        type='card'
                        defaultActiveKey="1"
                        onChange={(key) => setCurrentStep(Number(key))}
                        activeKey={currentStep.toString()}
                        tabPosition={'top'}
                        items={steps.map((s, index) => {
                            return {
                                label: s.title,
                                key: index.toString(),
                                children: s.content,
                            }
                        })}
                    />
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        {currentStep > 0 && (
                            <Button style={{ width: '100%' }} onClick={prev}>
                                Назад
                            </Button>
                        )}
                    </Col>
                    <Col span={12}>
                        {currentStep < steps.length - 1 && (
                            <Button
                                style={{ width: '100%' }}
                                type="primary"
                                onClick={() => {
                                    validateStep(currentStep);
                                    next();
                                }}
                            >
                                Далее
                            </Button>
                        )}
                        {currentStep === steps.length - 1 && (
                            <Button loading={loading} style={{ width: '100%' }} type="primary" htmlType="submit">
                                Сохранить
                            </Button>
                        )}
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
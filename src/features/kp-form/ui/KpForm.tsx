import { Button, Col, Form, Input, message, Row, Tabs } from 'antd';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import './style.scss'
import { steps } from '../model/steps';
import type { Company } from '@/api/organizations-api';
import dayjs from 'dayjs';


interface Props {
    className?: string;
    organization?: Company
}

export const KpForm: React.FC<Props> = ({ className, organization }) => {
    const [currentStep, setCurrentStep] = useState(0);
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
            const sendData = {
                ...(organization || {}),
                ...values,
                ['Дата последнего изменения']: values['Дата последнего изменения'] ? dayjs(values['Дата последнего изменения']).format() : null,
            };

            console.log(sendData);
        } catch (err) {

        } finally { }
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
                            <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                Сохранить
                            </Button>
                        )}
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
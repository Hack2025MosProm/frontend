import { Button, Col, Form, message, Row, Tabs } from 'antd';
import clsx from 'clsx';
import React, { useState } from 'react';
import './style.scss'
import { steps } from '../model/steps';


interface Props {
    className?: string;
}

export const KpForm: React.FC<Props> = ({ className }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    //@ts-ignore
    const [stepStatus, setStepStatus] = useState<number[]>([]);
    //const carouselRef = useRef<any>(null);


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



    return (
        <div className={clsx('kp-form', className)}>
            <Form form={form} layout="vertical" onFinish={() => message.success('Форма успешно сохранена')}>
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
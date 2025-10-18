import { DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import { Badge, Button, Drawer, FloatButton, Form, Select, Space, } from 'antd';
import clsx from 'clsx';
import React, { useState } from 'react';

interface Props {
    className?: string;
}

type Mode = 'filter' | 'download';

export const DataFilter: React.FC<Props> = ({ className }) => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [mode, setMode] = useState<Mode>('filter');

    const [selectedFiltersCount, setSelectedFiltersCount] = useState(0);

    const showDrawer = (mode: Mode = 'filter') => {
        setOpen(true);
        setMode(mode);
    };

    const onClose = () => {
        setOpen(false);
    };

    const updateFiltersCount = () => {
        const formValues = form.getFieldsValue();
        let count = 0;

        Object.values(formValues).forEach(value => {
            if (value !== undefined && value !== null && value !== '') {
                if (Array.isArray(value)) {
                    count += value.length;
                } else {
                    count += 1;
                }
            }
        });

        setSelectedFiltersCount(count);
    };

    // Обработчик изменения значений формы
    const handleFormChange = () => {
        updateFiltersCount();
    };

    // Обработчик применения фильтров
    const handleApplyFilters = async () => {
        try {
            await form.validateFields()

            updateFiltersCount();
            onClose();
        } catch (err) { }
    };

    const handleDownload = () => {
        updateFiltersCount();
    }

    // Обработчик сброса формы
    const handleReset = () => {
        form.resetFields();
        setSelectedFiltersCount(0);
    };




    return (
        <>
            {!open && (
                <FloatButton.Group>
                    <FloatButton
                        shape="circle"
                        type="primary"
                        className={clsx(className)}
                        style={{ insetInlineEnd: 94, }}
                        icon={<FilterOutlined />}
                        badge={{
                            count: selectedFiltersCount,
                            color: 'green'
                        }}
                        tooltip={{
                            title: "Фильтры"
                        }}
                        onClick={() => showDrawer('filter')}
                    />

                    <FloatButton
                        shape='circle'
                        type='primary'
                        style={{ insetInlineEnd: 94, }}
                        icon={<DownloadOutlined />}
                        tooltip={{
                            title: "Скачать отчет"
                        }}
                        onClick={() => showDrawer('download')}

                    />
                </FloatButton.Group>
            )}

            <Drawer
                title={mode === 'filter' ? "Фильтры для дашборда" : "Фильтры для отчета"}
                //width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                footer={
                    <Space align='end' style={{ width: '100%', justifyContent: 'flex-end' }}>
                        <Button onClick={handleReset}>
                            Сбросить
                        </Button>
                        <Button onClick={onClose}>
                            Отмена
                        </Button>
                        {mode === 'filter'
                            ? (
                                <Badge
                                    count={selectedFiltersCount}
                                    size="small"
                                    offset={[0, 0]}
                                    color='green'
                                    style={{
                                        marginRight: 8
                                    }}
                                >
                                    <Button
                                        onClick={handleApplyFilters}
                                        type="primary"
                                    >
                                        Применить фильтры
                                    </Button>
                                </Badge>
                            )
                            : (
                                <Badge
                                    count={selectedFiltersCount}
                                    size="small"
                                    offset={[0, 0]}
                                    color='green'
                                    style={{
                                        marginRight: 8
                                    }}
                                >
                                    <Button
                                        onClick={handleDownload}
                                        type="primary"
                                    >
                                        Скачать отчет
                                    </Button>
                                </Badge>
                            )
                        }
                    </Space>
                }
            >
                <Form
                    form={form}
                    layout='vertical'
                    onFieldsChange={handleFormChange}
                >
                    <Form.Item
                        name="year"
                        label="Год"
                    >
                        <Select placeholder="Выберите год">
                            <Select.Option value={2024}>2024</Select.Option>
                            <Select.Option value={2023}>2023</Select.Option>
                            <Select.Option value={2022}>2022</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="main_industry"
                        label="Отрасль"
                    >
                        <Select placeholder="Выберите основную отрасль">
                            <Select.Option value="manufacturing">Промышленное производство</Select.Option>
                            <Select.Option value="construction">Строительство</Select.Option>
                            <Select.Option value="it">Информационные технологии</Select.Option>
                            <Select.Option value="trade">Торговля</Select.Option>
                            <Select.Option value="transport">Транспорт и логистика</Select.Option>
                            <Select.Option value="finance">Финансовые услуги</Select.Option>
                            <Select.Option value="healthcare">Здравоохранение</Select.Option>
                            <Select.Option value="education">Образование</Select.Option>
                            <Select.Option value="agriculture">Сельское хозяйство</Select.Option>
                            <Select.Option value="energy">Энергетика</Select.Option>
                            <Select.Option value="medicine">Медицина</Select.Option>
                            <Select.Option value="food">Пищевая промышленность</Select.Option>
                            <Select.Option value="chemical">Химическая промышленность</Select.Option>
                            <Select.Option value="metallurgy">Металлургия</Select.Option>
                            <Select.Option value="machine_building">Машиностроение</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="organization_type"
                        label="Вид организации"
                    >
                        <Select placeholder="Вид организации...">
                            <Select.Option value="ooo">ООО</Select.Option>
                            <Select.Option value="ao">АО</Select.Option>
                            <Select.Option value="pao">ПАО</Select.Option>
                            <Select.Option value="nao">НАО</Select.Option>
                            <Select.Option value="ip">ИП</Select.Option>
                            <Select.Option value="gup">ГУП</Select.Option>
                            <Select.Option value="mup">МУП</Select.Option>
                            <Select.Option value="pk">ПК</Select.Option>
                            <Select.Option value="pt">ПТ</Select.Option>
                            <Select.Option value="tnv">ТНВ</Select.Option>
                            <Select.Option value="ano">АНО</Select.Option>
                            <Select.Option value="fond">Фонд</Select.Option>
                            <Select.Option value="uchrezhdenie">Учреждение</Select.Option>
                            <Select.Option value="potrebitelsky_kooperativ">Потребительский кооператив</Select.Option>
                            <Select.Option value="obshchestvennaya_organizaciya">Общественная организация</Select.Option>
                            <Select.Option value="associaciya_soyuz">Ассоциация (союз)</Select.Option>
                            <Select.Option value="kazennoe_uchrezhdenie">Казенное учреждение</Select.Option>
                            <Select.Option value="budgetnoe_uchrezhdenie">Бюджетное учреждение</Select.Option>
                            <Select.Option value="other">Другое</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="support_measures"
                        label="Данные об оказанных мерах поддержки"
                    >
                        <Select
                            mode="multiple"
                            placeholder="Выберите меры поддержки"
                        >
                            <Select.Option value="tax_benefits">Налоговые льготы</Select.Option>
                            <Select.Option value="subsidies">Субсидии</Select.Option>
                            <Select.Option value="grants">Гранты</Select.Option>
                            <Select.Option value="preferential_loans">Льготные кредиты</Select.Option>
                            <Select.Option value="property_support">Имущественная поддержка</Select.Option>
                            <Select.Option value="infrastructure">Инфраструктурная поддержка</Select.Option>
                            <Select.Option value="consulting">Консультационная поддержка</Select.Option>
                            <Select.Option value="export_support">Поддержка экспорта</Select.Option>
                            <Select.Option value="innovation_support">Инновационная поддержка</Select.Option>
                            <Select.Option value="none">Меры поддержки не оказывались</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="special_status"
                        label="Наличие особого статуса"
                    >
                        <Select placeholder="Выберите статус">
                            <Select.Option value="technopark">Технопарк</Select.Option>
                            <Select.Option value="industrial_park">Индустриальный парк</Select.Option>
                            <Select.Option value="industrial_complex">Промышленный комплекс</Select.Option>
                            <Select.Option value="none">Нет</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="confirmed"
                        label="Подтвержден"
                        rules={[{ required: true, message: 'Укажите статус' }]}
                    >
                        <Select placeholder="Выберите статус">
                            <Select.Option value="confirmed">Подтвержден пользователем</Select.Option>
                            {/* <Select.Option value="user_confirmed">Подтвержден пользователем</Select.Option> */}
                            <Select.Option value="not_confirmed">Не подтвержден</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};
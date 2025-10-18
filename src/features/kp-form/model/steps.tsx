import { Row, Col, Form, Input, Select, InputNumber } from "antd";

export const steps = [
    // Шаг 1: Ключевые реквизиты
    {
        title: 'Ключевые реквизиты',
        content: (
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="inn"
                        label="ИНН"
                        rules={[{ required: true, message: 'Укажите ИНН!' }]}
                    >
                        <Input
                            placeholder="ИНН..."
                            type="number"
                        />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="Наименование организации"
                        rules={[{ required: true, message: 'Укажите наименование организации!' }]}
                    >
                        <Input placeholder="Наименование организации..." />
                    </Form.Item>

                    <Form.Item
                        name="organization_type"
                        label="Тип организации"
                    >
                        <Select placeholder="Тип организации...">
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
                </Col>
            </Row>
        ),
    },
    // Шаг 2: Отрасль
    {
        title: 'Отрасль',
        content: (
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="main_industry"
                        label="Основная отрасль"
                        rules={[{ required: true, message: 'Выберите основную отрасль!' }]}
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
                        name="main_subindustry"
                        label="Подотрасль (Основная)"
                        rules={[{ required: true, message: 'Выберите подотрасль!' }]}
                    >
                        <Select placeholder="Выберите подотрасль">
                            <Select.Option value="food_manufacturing">Производство пищевых продуктов</Select.Option>
                            <Select.Option value="textile">Текстильное производство</Select.Option>
                            <Select.Option value="chemical">Химическое производство</Select.Option>
                            <Select.Option value="metalworking">Металлообработка</Select.Option>
                            <Select.Option value="electronics">Электроника и электротехника</Select.Option>
                            <Select.Option value="machinery">Машиностроение</Select.Option>
                            <Select.Option value="automotive">Автомобилестроение</Select.Option>
                            <Select.Option value="pharmaceutical">Фармацевтическое производство</Select.Option>
                            <Select.Option value="construction_materials">Производство строительных материалов</Select.Option>
                            <Select.Option value="woodworking">Деревообработка</Select.Option>
                            <Select.Option value="software_development">Разработка программного обеспечения</Select.Option>
                            <Select.Option value="it_services">IT-услуги и консалтинг</Select.Option>
                            <Select.Option value="telecom">Телекоммуникации</Select.Option>
                            <Select.Option value="retail_trade">Розничная торговля</Select.Option>
                            <Select.Option value="wholesale_trade">Оптовая торговля</Select.Option>
                            <Select.Option value="ecommerce">Электронная коммерция</Select.Option>
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
                </Col>
            </Row>
        ),
    },
    // Шаг 3: Финансовые и производственные показатели
    {
        title: 'Финансовые и производственные показатели',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="revenue"
                        label="Выручка предприятия, тыс. руб"
                    >
                        <InputNumber
                            placeholder="Выручка предприятия"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>

                    <Form.Item
                        name="net_profit"
                        label="Чистая прибыль (убыток), тыс. руб."
                    >
                        <InputNumber
                            placeholder="Чистая прибыль"
                            style={{ width: '100%' }}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="production_capacity_utilization"
                        label="Уровень загрузки производственных мощностей, %"
                    >
                        <InputNumber
                            placeholder="Уровень загрузки"
                            style={{ width: '100%' }}
                            min={0}
                            max={100}
                        //formatter={value => `${value}%`}
                        //parser={value => value?.replace('%', '') as any}
                        />
                    </Form.Item>

                    <Form.Item
                        name="moscow_investments"
                        label="Инвестиции в Мск, тыс. руб."
                    >
                        <InputNumber
                            placeholder="Инвестиции в Москву"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    // Шаг 4: Персонал
    {
        title: 'Персонал',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="moscow_staff"
                        label="Среднесписочная численность персонала, работающего в Москве, чел"
                    >
                        <InputNumber
                            placeholder="Численность в Москве"
                            style={{ width: '100%' }}
                            min={0}
                        />
                    </Form.Item>

                    <Form.Item
                        name="moscow_salary_fund"
                        label="Фонд оплаты труда сотрудников, работающих в Москве, тыс. руб."
                    >
                        <InputNumber
                            placeholder="Фонд оплаты труда по Москве"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="moscow_average_salary"
                        label="Средняя з.п. сотрудников, работающих в Москве, тыс.руб."
                    >
                        <InputNumber
                            placeholder="Средняя зарплата по Москве"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    // Шаг 5: Налоговая информация
    {
        title: 'Налоговая информация',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="moscow_taxes"
                        label="Налоги, уплаченные в бюджет Москвы (без акцизов), тыс.руб."
                    >
                        <InputNumber
                            placeholder="Налоги в бюджет Москвы"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>

                    <Form.Item
                        name="profit_tax"
                        label="Налог на прибыль, тыс.руб."
                    >
                        <InputNumber
                            placeholder="Налог на прибыль"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>

                    <Form.Item
                        name="property_tax"
                        label="Налог на имущество, тыс.руб."
                    >
                        <InputNumber
                            placeholder="Налог на имущество"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>

                    <Form.Item
                        name="land_tax"
                        label="Налог на землю, тыс.руб."
                    >
                        <InputNumber
                            placeholder="Налог на землю"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="personal_income_tax"
                        label="НДФЛ, тыс.руб."
                    >
                        <InputNumber
                            placeholder="НДФЛ"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>

                    <Form.Item
                        name="transport_tax"
                        label="Транспортный налог, тыс.руб."
                    >
                        <InputNumber
                            placeholder="Транспортный налог"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>

                    <Form.Item
                        name="other_taxes"
                        label="Прочие налоги, тыс.руб."
                    >
                        <InputNumber
                            placeholder="Прочие налоги"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>

                    <Form.Item
                        name="excise_taxes"
                        label="Акцизы, тыс. руб."
                    >
                        <InputNumber
                            placeholder="Акцизы"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    // Шаг 6: Экспортная деятельность
    {
        title: 'Экспортная деятельность',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="export_supplies"
                        label="Наличие поставок продукции на экспорт"
                    >
                        <Select placeholder="Выберите вариант">
                            <Select.Option value="yes">Да</Select.Option>
                            <Select.Option value="no">Нет</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="export_volume"
                        label="Объем экспорта, тыс. руб."
                    >
                        <InputNumber
                            placeholder="Объем экспорта"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item
                        name="export_volume_previous_year"
                        label="Объем экспорта (млн руб.) за предыдущий календарный год"
                    >
                        <InputNumber
                            placeholder="Объем экспорта за предыдущий год"
                            style={{ width: '100%' }}
                            min={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            parser={value => value?.replace(/\s?/g, '') as any}
                        />
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    // Шаг 7: Географическая привязка
    {
        title: 'Географическая привязка',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="production_coords"
                        label="Координаты адреса производства"
                    >
                        <Input placeholder="Широта, долгота" />
                    </Form.Item>

                    <Form.Item
                        name="district"
                        label="Округ"
                    >
                        <Select placeholder="Выберите округ">
                            <Select.Option value="central">Центральный округ</Select.Option>
                            <Select.Option value="northern">Северный округ</Select.Option>
                            <Select.Option value="north_eastern">Северо-Восточный округ</Select.Option>
                            <Select.Option value="eastern">Восточный округ</Select.Option>
                            <Select.Option value="south_eastern">Юго-Восточный округ</Select.Option>
                            <Select.Option value="southern">Южный округ</Select.Option>
                            <Select.Option value="south_western">Юго-Западный округ</Select.Option>
                            <Select.Option value="western">Западный округ</Select.Option>
                            <Select.Option value="north_western">Северо-Западный округ</Select.Option>
                            <Select.Option value="zelenograd">Зеленоградский округ</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="region"
                        label="Район"
                    >
                        <Select placeholder="Выберите район">
                            <Select.Option value="arbat">Арбат</Select.Option>
                            <Select.Option value="basmanny">Басманный</Select.Option>
                            <Select.Option value="zamoskvorechye">Замоскворечье</Select.Option>
                            <Select.Option value="krasnoselsky">Красносельский</Select.Option>
                            <Select.Option value="meshchansky">Мещанский</Select.Option>
                            <Select.Option value="presnensky">Пресненский</Select.Option>
                            <Select.Option value="tagansky">Таганский</Select.Option>
                            <Select.Option value="tverskoy">Тверской</Select.Option>
                            <Select.Option value="khamovniki">Хамовники</Select.Option>
                            <Select.Option value="yakimanka">Якиманка</Select.Option>
                            <Select.Option value="aeroport">Аэропорт</Select.Option>
                            <Select.Option value="begovoy">Беговой</Select.Option>
                            <Select.Option value="beskudnikovsky">Бескудниковский</Select.Option>
                            <Select.Option value="voikovsky">Войковский</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    // Шаг 8: Служебная информация
    {
        title: 'Служебная информация',
        content: (
            <Row gutter={16}>
                <Col span={12}>
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
                        name="confirmed"
                        label="Подтвержден"
                    >
                        <Select placeholder="Выберите статус">
                            <Select.Option value="confirmed">Подтвержден</Select.Option>
                            <Select.Option value="user_confirmed">Подтвержден пользователем</Select.Option>
                            <Select.Option value="not_confirmed">Не подтвержден</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="confirmed_by"
                        label="Кем подтвержден"
                    >
                        <Select placeholder="Выберите источник">
                            <Select.Option value="fsin">ФСИН</Select.Option>
                            <Select.Option value="rosstat">Росстат</Select.Option>
                            <Select.Option value="user">Пользователь</Select.Option>
                            <Select.Option value="fns">ФНС</Select.Option>
                            <Select.Option value="minpromtorg">Минпромторг</Select.Option>
                            <Select.Option value="moscow_government">Правительство Москвы</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="last_modified_date"
                        label="Дата последнего изменения"
                    >
                        <Input type="date" />
                    </Form.Item>
                </Col>
            </Row>
        ),
    }
];
import { Row, Col, Form, Input, Select, InputNumber, DatePicker } from "antd";

export const steps = [
    // Шаг 1: Ключевые реквизиты
    {
        title: 'Ключевые реквизиты',
        content: (
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="ИНН"
                        label="ИНН"
                        rules={[{ required: true, message: 'Укажите ИНН!' }]}
                    >
                        <Input
                            placeholder="ИНН..."
                            type="number"
                        />
                    </Form.Item>

                    <Form.Item
                        name="Наименование организации"
                        label="Наименование организации"
                        rules={[{ required: true, message: 'Укажите наименование организации!' }]}
                    >
                        <Input placeholder="Наименование организации..." />
                    </Form.Item>

                    <Form.Item
                        name="full_name"
                        label="Полное наименование организации"
                        rules={[{ required: true, message: 'Укажите полное наименование организации!' }]}
                    >
                        <Input placeholder="Полное наименование организации..." />
                    </Form.Item>

                    <Form.Item
                        name="Вид организации"
                        label="Тип организации"
                    >
                        <Select placeholder="Тип организации...">
                            <Select.Option value="ООО">ООО</Select.Option>
                            <Select.Option value="АО">АО</Select.Option>
                            <Select.Option value="ПАО">ПАО</Select.Option>
                            <Select.Option value="НАО">НАО</Select.Option>
                            <Select.Option value="ИП">ИП</Select.Option>
                            <Select.Option value="ГУП">ГУП</Select.Option>
                            <Select.Option value="МУП">МУП</Select.Option>
                            <Select.Option value="ПК">ПК</Select.Option>
                            <Select.Option value="ПТ">ПТ</Select.Option>
                            <Select.Option value="Казенное учреждение">Казенное учреждение</Select.Option>
                            <Select.Option value="Бюджетное учреждение">Бюджетное учреждение</Select.Option>
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
                        name="Основная отрасль"
                        label="Основная отрасль"
                        rules={[{ required: true, message: 'Выберите основную отрасль!' }]}
                    >
                        <Select placeholder="Выберите основную отрасль">
                            <Select.Option value="Промышленное производство">Промышленное производство</Select.Option>
                            <Select.Option value="Строительство">Строительство</Select.Option>
                            <Select.Option value="Информационные технологии">Информационные технологии</Select.Option>
                            <Select.Option value="Торговля">Торговля</Select.Option>
                            <Select.Option value="Транспорт и логистика">Транспорт и логистика</Select.Option>
                            <Select.Option value="Финансовые услуги">Финансовые услуги</Select.Option>
                            <Select.Option value="Здравоохранение">Здравоохранение</Select.Option>
                            <Select.Option value="Образование">Образование</Select.Option>
                            <Select.Option value="Сельское хозяйство">Сельское хозяйство</Select.Option>
                            <Select.Option value="Энергетика">Энергетика</Select.Option>
                            <Select.Option value="Медицина">Медицина</Select.Option>
                            <Select.Option value="Пищевая промышленность">Пищевая промышленность</Select.Option>
                            <Select.Option value="Химическая промышленность">Химическая промышленность</Select.Option>
                            <Select.Option value="Металлургия">Металлургия</Select.Option>
                            <Select.Option value="Машиностроение">Машиностроение</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="Наличие особого статуса"
                        label="Наличие особого статуса"
                    >
                        <Select placeholder="Выберите статус">
                            <Select.Option value="Технопарк">Технопарк</Select.Option>
                            <Select.Option value="Индустриальный парк">Индустриальный парк</Select.Option>
                            <Select.Option value="Промышленный комплекс">Промышленный комплекс</Select.Option>
                            <Select.Option value="Сведения отсутствуют">Сведения отсутствуют</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="Данные об оказанных мерах поддержки"
                        label="Данные об оказанных мерах поддержки"
                    >
                        <Select
                            placeholder="Выберите меры поддержки"
                        >
                            <Select.Option value={"Да"}>Да</Select.Option>
                            <Select.Option value={"Нет"}>Нет</Select.Option>
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
                        name="Выручка предприятия, тыс. руб"
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
                        name="Чистая прибыль (убыток),тыс. руб."
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
                        name="Уровень загрузки производственных мощностей"
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
                        name="Инвестиции в Мск  тыс. руб."
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
                        name="Среднесписочная численность персонала, работающего в Москве, чел"
                        label="Среднесписочная численность персонала, работающего в Москве, чел"
                    >
                        <InputNumber
                            placeholder="Численность в Москве"
                            style={{ width: '100%' }}
                            min={0}
                        />
                    </Form.Item>

                    <Form.Item
                        name="Фонд оплаты труда  сотрудников, работающих в Москве, тыс. руб."
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
                        name="Средняя з.п. сотрудников, работающих в Москве,  тыс.руб."
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
                        name="Налоги, уплаченные в бюджет Москвы (без акцизов), тыс.руб."
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
                        name="Налог на прибыль, тыс.руб."
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
                        name="Налог на имущество, тыс.руб."
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
                        name="Налог на землю, тыс.руб."
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
                        name="НДФЛ, тыс.руб."
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
                        name="Транспортный налог, тыс.руб."
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
                        name="Прочие налоги"
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
                        name="Акцизы, тыс. руб."
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
                        name="Наличие поставок продукции на экспорт"
                        label="Наличие поставок продукции на экспорт"
                    >
                        <Select placeholder="Выберите вариант">
                            <Select.Option value="Да">Да</Select.Option>
                            <Select.Option value="Нет">Нет</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="Объем экспорта, тыс. руб."
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
                        name="Объем экспорта (млн руб.) за предыдущий календарный год"
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
                        name="Координаты адреса производства"
                        label="Координаты адреса производства"
                    >
                        <Input placeholder="Широта, долгота" />
                    </Form.Item>

                    <Form.Item
                        name="Округ"
                        label="Округ"
                    >
                        <Input placeholder="Округ..." />
                        {/* <Select placeholder="Выберите округ">
                            <Select.Option value="ЦАО">Центральный административный округ (ЦАО)</Select.Option>
                            <Select.Option value="САО">Северный административный округ (САО)</Select.Option>
                            <Select.Option value="СВАО">Северо-Восточный административный округ (СВАО)</Select.Option>
                            <Select.Option value="ВАО">Восточный административный округ (ВАО)</Select.Option>
                            <Select.Option value="ЮВАО">Юго-Восточный административный округ (ЮВАО)</Select.Option>
                            <Select.Option value="ЮАО">Южный административный округ (ЮАО)</Select.Option>
                            <Select.Option value="ЮЗАО">Юго-Западный административный округ (ЮЗАО)</Select.Option>
                            <Select.Option value="ЗАО">Западный административный округ (ЗАО)</Select.Option>
                            <Select.Option value="СЗАО">Северо-Западный административный округ (СЗАО)</Select.Option>
                            <Select.Option value="ЗелАО">Зеленоградский административный округ (ЗелАО)</Select.Option>
                        </Select> */}
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="Район"
                        label="Район"
                    >
                        <Input placeholder="Район..." />
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
                        name="Год"
                        label="Год"
                    >
                        <Select placeholder="Выберите год">
                            <Select.Option value={2024}>2024</Select.Option>
                            <Select.Option value={2023}>2023</Select.Option>
                            <Select.Option value={2022}>2022</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="confirmation_status"
                        label="Подтвержден"
                        rules={[{ required: true, message: 'Укажите статус!' }]}
                    >
                        <Select placeholder="Выберите статус">
                            <Select.Option value="Подтвержден">Подтвержден пользователем</Select.Option>
                            <Select.Option value="Не подтвержден">Не подтвержден</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="Кем подтвержден"
                        label="Кем подтвержден"
                    >
                        <Input placeholder="Кем подтвержден..." />
                    </Form.Item>

                    <Form.Item
                        name="Дата последнего изменения"
                        label="Дата последнего изменения"
                    >
                        <DatePicker
                            style={{ width: "100%" }}
                            format={{
                                format: 'DD.MM.YYYY'
                            }}
                        />
                    </Form.Item>
                </Col>
            </Row>
        ),
    }
];
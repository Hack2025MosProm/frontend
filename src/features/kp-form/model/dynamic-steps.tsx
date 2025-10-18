import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Row, Col, Form, Input, DatePicker, Select, Space, Button } from "antd";

export const steps = [
    {
        title: 'Организация',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="name"
                        label="Наименование организации"
                        rules={[{ required: true, message: 'Укажите наименование организации!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="fullname"
                        label="Полное наименование организации"
                        rules={[{ required: true, message: 'Укажите полное наименование организации!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="inn"
                        label="ИНН"
                        rules={[{ required: true, message: 'Укажите ИНН!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="register_date"
                        label="Дата регистрации"
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="status"
                        label="Статус организации"
                    >
                        <Select placeholder="Статус организации...">
                            <Select.Option value={1}>Действующая</Select.Option>
                            <Select.Option value={2}>Ликвидирована</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="status_msp"
                        label="Статус МСП"
                    >
                        <Input placeholder='Статус МСП...' />
                    </Form.Item>

                    <Form.Item
                        name="special_status"
                        label="Наличие особого статуса"
                    >
                        <Input placeholder='Наличие особого статуса...' />
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    {
        title: 'Структура и руководство',
        content: (
            <>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="leader"
                            label="Руководитель"
                        >
                            <Input placeholder="ФИО руководителя" />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="parent_organization"
                            label="Головная организация"
                        >
                            <Input placeholder="Наименование головной организации" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="parent_inn"
                            label="ИНН Головной организации"
                        >
                            <Input placeholder="ИНН головной организации" />
                        </Form.Item>
                    </Col>
                </Row>
            </>
        ),
    },
    {
        title: 'Адрес',
        content: (
            <>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="legal_address"
                            label="Юридический адрес"
                        >
                            <Input placeholder="Юридический адрес" />
                        </Form.Item>

                        <Form.Item
                            name="production_address"
                            label="Адрес производства"
                        >
                            <Input placeholder="Адрес производства" />
                        </Form.Item>

                        <Form.Item
                            name="additional_site_address"
                            label="Адрес дополнительной площадки"
                        >
                            <Input placeholder="Адрес дополнительной площадки" />
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

                    <Col span={12}>
                        <Form.Item
                            name="legal_address_coords"
                            label="Координаты юридического адреса"
                        >
                            <Input placeholder="Координаты юридического адреса" />
                        </Form.Item>

                        <Form.Item
                            name="production_address_coords"
                            label="Координаты адреса производства"
                        >
                            <Input placeholder="Координаты адреса производства" />
                        </Form.Item>

                        <Form.Item
                            name="additional_site_coords"
                            label="Координаты адреса дополнительной площадки"
                        >
                            <Input placeholder="Координаты дополнительной площадки" />
                        </Form.Item>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="latitude"
                                    label="Координаты (широта)"
                                >
                                    <Input type="number" placeholder="Широта" step="any" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="longitude"
                                    label="Координаты (долгота)"
                                >
                                    <Input type="number" placeholder="Долгота" step="any" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        ),
    },
    {
        title: 'Отрасль и деятельность',
        content: (
            <>
                <Row gutter={16}>
                    <Col span={12}>
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
                            name="main_okved"
                            label="Основной ОКВЭД"
                            rules={[{ required: true, message: 'Укажите основной ОКВЭД!' }]}
                        >
                            <Input placeholder="Введите ОКВЭД" />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="okved_activity_type"
                            label="Вид деятельности по основному ОКВЭД"
                        >
                            <Input placeholder="Вид деятельности" />
                        </Form.Item>

                        <Form.Item
                            name="production_okved"
                            label="Производственный ОКВЭД"
                            rules={[{ required: true, message: 'Укажите производственный ОКВЭД!' }]}
                        >
                            <Input placeholder="Введите производственный ОКВЭД" />
                        </Form.Item>
                    </Col>
                </Row>
            </>
        ),
    },
    {
        title: 'Контакты',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="management_contact"
                        label="Контактные данные руководства"
                    >
                        <Input placeholder="Телефон или контакты руководства" />
                    </Form.Item>

                    <Form.Item
                        name="employee_contact"
                        label="Контакт сотрудника организации"
                    >
                        <Input placeholder="Телефон или контакты сотрудника" />
                    </Form.Item>

                    <Form.Item
                        name="emergency_contact"
                        label="Контактные данные ответственного по ЧС"
                    >
                        <Input placeholder="Телефон ответственного по ЧС" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="website"
                        label="Сайт"
                    >
                        <Input placeholder="https://example.com" type="url" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Электронная почта"
                    >
                        <Input placeholder="email@example.com" type="email" />
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    {
        title: 'Финансовые показатели',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="revenue"
                        label="Выручка предприятия, тыс. руб."
                    >
                        <Form.List name="revenue">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите выручку' }]}
                                            >
                                                <Input placeholder="Выручка, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить выручку за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="net_profit"
                        label="Чистая прибыль (убыток), тыс. руб."
                    >
                        <Form.List name="net_profit">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите прибыль' }]}
                                            >
                                                <Input placeholder="Чистая прибыль, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить прибыль за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="total_salary_fund"
                        label="Фонд оплаты труда всех сотрудников организации, тыс. руб"
                    >
                        <Form.List name="total_salary_fund">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите фонд оплаты труда' }]}
                                            >
                                                <Input placeholder="Фонд оплаты труда, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить фонд оплаты труда за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="moscow_salary_fund"
                        label="Фонд оплаты труда сотрудников, работающих в Москве, тыс. руб."
                    >
                        <Form.List name="moscow_salary_fund">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите фонд оплаты труда по Москве' }]}
                                            >
                                                <Input placeholder="Фонд оплаты труда по Москве, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить фонд оплаты труда по Москве за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="average_salary"
                        label="Средняя з.п. всех сотрудников организации, тыс.руб."
                    >
                        <Form.List name="average_salary">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите среднюю зарплату' }]}
                                            >
                                                <Input placeholder="Средняя зарплата, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить среднюю зарплату за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="moscow_average_salary"
                        label="Средняя з.п. сотрудников, работающих в Москве, тыс.руб."
                    >
                        <Form.List name="moscow_average_salary">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите среднюю зарплату по Москве' }]}
                                            >
                                                <Input placeholder="Средняя зарплата по Москве, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить среднюю зарплату по Москве за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="moscow_investments"
                        label="Инвестиции в Мск, тыс. руб."
                    >
                        <Form.List name="moscow_investments">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите инвестиции' }]}
                                            >
                                                <Input placeholder="Инвестиции в Москву, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить инвестиции за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="export_volume"
                        label="Объем экспорта, тыс. руб."
                    >
                        <Form.List name="export_volume">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите объем экспорта' }]}
                                            >
                                                <Input placeholder="Объем экспорта, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить объем экспорта за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    {
        title: 'Налоговая информация',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="moscow_taxes"
                        label="Налоги, уплаченные в бюджет Москвы (без акцизов), тыс.руб."
                    >
                        <Form.List name="moscow_taxes">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите сумму налогов' }]}
                                            >
                                                <Input placeholder="Налоги в бюджет Москвы, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить налоги за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="profit_tax"
                        label="Налог на прибыль, тыс.руб."
                    >
                        <Form.List name="profit_tax">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите налог на прибыль' }]}
                                            >
                                                <Input placeholder="Налог на прибыль, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить налог на прибыль за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="property_tax"
                        label="Налог на имущество, тыс.руб."
                    >
                        <Form.List name="property_tax">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите налог на имущество' }]}
                                            >
                                                <Input placeholder="Налог на имущество, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить налог на имущество за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="land_tax"
                        label="Налог на землю, тыс.руб."
                    >
                        <Form.List name="land_tax">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите налог на землю' }]}
                                            >
                                                <Input placeholder="Налог на землю, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить налог на землю за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="personal_income_tax"
                        label="НДФЛ, тыс.руб."
                    >
                        <Form.List name="personal_income_tax">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите НДФЛ' }]}
                                            >
                                                <Input placeholder="НДФЛ, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить НДФЛ за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="transport_tax"
                        label="Транспортный налог, тыс.руб."
                    >
                        <Form.List name="transport_tax">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите транспортный налог' }]}
                                            >
                                                <Input placeholder="Транспортный налог, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить транспортный налог за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="other_taxes"
                        label="Прочие налоги, тыс.руб."
                    >
                        <Form.List name="other_taxes">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите прочие налоги' }]}
                                            >
                                                <Input placeholder="Прочие налоги, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить прочие налоги за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        name="excise_taxes"
                        label="Акцизы, тыс. руб."
                    >
                        <Form.List name="excise_taxes">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите акцизы' }]}
                                            >
                                                <Input placeholder="Акцизы, тыс. руб." type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить акцизы за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>
                </Col>
            </Row>
        )
    },
    {
        title: 'Персонал',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="total_staff"
                        label="Среднесписочная численность персонала (всего по компании), чел"
                    >
                        <Form.List name="total_staff">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите численность персонала' }]}
                                            >
                                                <Input placeholder="Численность персонала, чел" type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить численность за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="moscow_staff"
                        label="Среднесписочная численность персонала, работающего в Москве, чел"
                    >
                        <Form.List name="moscow_staff">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'year']}
                                                rules={[{ required: true, message: 'Укажите год' }]}
                                            >
                                                <Input placeholder="Год" type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'amount']}
                                                rules={[{ required: true, message: 'Укажите численность в Москве' }]}
                                            >
                                                <Input placeholder="Численность в Москве, чел" type="number" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Добавить численность по Москве за год
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>
                </Col>
            </Row>
        )
    },
    {
        title: "Имущество",
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="cadastral_number_zu"
                        label="Кадастровый номер ЗУ"
                    >
                        <Input placeholder="Кадастровый номер земельного участка" />
                    </Form.Item>

                    <Form.Item
                        name="area_zu"
                        label="Площадь ЗУ"
                    >
                        <Input type="number" placeholder="Площадь земельного участка" />
                    </Form.Item>

                    <Form.Item
                        name="permitted_use_zu"
                        label="Вид разрешенного использования ЗУ"
                    >
                        <Select placeholder="Выберите вид использования">
                            <Select.Option value="residential">Для жилищного строительства</Select.Option>
                            <Select.Option value="commercial">Для коммерческого использования</Select.Option>
                            <Select.Option value="industrial">Для промышленного производства</Select.Option>
                            <Select.Option value="agricultural">Для сельскохозяйственного использования</Select.Option>
                            <Select.Option value="recreation">Для рекреационных целей</Select.Option>
                            <Select.Option value="transport">Для транспортной инфраструктуры</Select.Option>
                            <Select.Option value="public_business">Для общественно-деловых целей</Select.Option>
                            <Select.Option value="production">Производственная деятельность</Select.Option>
                            <Select.Option value="energy">Энергетика</Select.Option>
                            <Select.Option value="special">Специальное назначение</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="ownership_type_zu"
                        label="Вид собственности ЗУ"
                    >
                        <Select placeholder="Выберите вид собственности">
                            <Select.Option value="private">Частная собственность</Select.Option>
                            <Select.Option value="state">Государственная собственность</Select.Option>
                            <Select.Option value="municipal">Муниципальная собственность</Select.Option>
                            <Select.Option value="federal">Федеральная собственность</Select.Option>
                            <Select.Option value="lease">Аренда</Select.Option>
                            <Select.Option value="permanent_use">Постоянное (бессрочное) пользование</Select.Option>
                            <Select.Option value="lifetime_heritable">Пожизненное наследуемое владение</Select.Option>
                            <Select.Option value="shared_ownership">Общая долевая собственность</Select.Option>
                            <Select.Option value="joint_ownership">Общая совместная собственность</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="owner_zu"
                        label="Собственник ЗУ"
                    >
                        <Input placeholder="Собственник земельного участка" />
                    </Form.Item>

                    <Form.Item
                        name="cadastral_number_oks"
                        label="Кадастровый номер ОКСа"
                    >
                        <Input placeholder="Кадастровый номер объекта капитального строительства" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="area_oks"
                        label="Площадь ОКСов"
                    >
                        <Input type="number" placeholder="Площадь объектов капитального строительства" />
                    </Form.Item>

                    <Form.Item
                        name="permitted_use_oks"
                        label="Вид разрешенного использования ОКСов"
                    >
                        <Select placeholder="Выберите вид использования">
                            <Select.Option value="residential_building">Жилой дом</Select.Option>
                            <Select.Option value="apartment_building">Многоквартирный дом</Select.Option>
                            <Select.Option value="office_building">Офисное здание</Select.Option>
                            <Select.Option value="commercial_building">Торговое здание</Select.Option>
                            <Select.Option value="industrial_building">Производственное здание</Select.Option>
                            <Select.Option value="warehouse">Складское помещение</Select.Option>
                            <Select.Option value="administrative_building">Административное здание</Select.Option>
                            <Select.Option value="educational_building">Образовательное учреждение</Select.Option>
                            <Select.Option value="medical_building">Медицинское учреждение</Select.Option>
                            <Select.Option value="cultural_building">Культурное учреждение</Select.Option>
                            <Select.Option value="sports_building">Спортивное сооружение</Select.Option>
                            <Select.Option value="hotel">Гостиница</Select.Option>
                            <Select.Option value="restaurant">Ресторан/кафе</Select.Option>
                            <Select.Option value="garage">Гараж</Select.Option>
                            <Select.Option value="production_workshop">Производственный цех</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="building_type"
                        label="Тип строения и цель использования"
                    >
                        <Input placeholder="Тип строения и цель использования" />
                    </Form.Item>

                    <Form.Item
                        name="ownership_type_oks"
                        label="Вид собственности ОКСов"
                    >
                        <Select placeholder="Выберите вид собственности">
                            <Select.Option value="private">Частная собственность</Select.Option>
                            <Select.Option value="state">Государственная собственность</Select.Option>
                            <Select.Option value="municipal">Муниципальная собственность</Select.Option>
                            <Select.Option value="federal">Федеральная собственность</Select.Option>
                            <Select.Option value="lease">Аренда</Select.Option>
                            <Select.Option value="operational_management">Оперативное управление</Select.Option>
                            <Select.Option value="economic_management">Хозяйственное ведение</Select.Option>
                            <Select.Option value="shared_ownership">Общая долевая собственность</Select.Option>
                            <Select.Option value="joint_ownership">Общая совместная собственность</Select.Option>
                            <Select.Option value="condominium">Кондоминиум</Select.Option>
                            <Select.Option value="commercial_lease">Коммерческая аренда</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="owner_oks"
                        label="Собственник ОКСов"
                    >
                        <Input placeholder="Собственник объектов капитального строительства" />
                    </Form.Item>

                    <Form.Item
                        name="production_area"
                        label="Площадь производственных помещений, кв.м."
                    >
                        <Input type="number" placeholder="Площадь производственных помещений" />
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    {
        title: 'Производственная деятельность',
        content: (
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="product_types"
                        label="Название (виды производимой продукции)"
                    >
                        <Input placeholder="Виды производимой продукции" />
                    </Form.Item>

                    <Form.Item
                        name="okpd2_codes"
                        label="Перечень производимой продукции по кодам ОКПД 2"
                    >
                        <Input placeholder="Коды ОКПД 2 с подсказкой" />
                    </Form.Item>

                    <Form.Item
                        name="product_segments"
                        label="Перечень производимой продукции по типам и сегментам"
                    >
                        <Input placeholder="Типы и сегменты продукции" />
                    </Form.Item>

                    <Form.Item
                        name="product_catalog"
                        label="Каталог продукции"
                    >
                        <Input placeholder="Файл или ссылка на каталог" />
                    </Form.Item>

                    <Form.Item
                        name="standardized_products"
                        label="Стандартизированная продукция"
                    >
                        <Select placeholder="Выберите вариант">
                            <Select.Option value="yes">Да</Select.Option>
                            <Select.Option value="no">Нет</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="government_order"
                        label="Наличие госзаказа"
                    >
                        <Select placeholder="Выберите вариант">
                            <Select.Option value="yes">Да</Select.Option>
                            <Select.Option value="no">Нет</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="production_capacity_utilization"
                        label="Уровень загрузки производственных мощностей"
                    >
                        <Input type="number" placeholder="%" min={0} max={100} addonAfter="%" />
                    </Form.Item>

                    <Form.Item
                        name="export_supplies"
                        label="Наличие поставок продукции на экспорт"
                    >
                        <Select placeholder="Выберите вариант">
                            <Select.Option value="yes">Да</Select.Option>
                            <Select.Option value="no">Нет</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="export_volume"
                        label="Объем экспорта (млн руб.) за предыдущий календарный год"
                    >
                        <Input type="number" placeholder="Объем экспорта в млн руб." />
                    </Form.Item>

                    <Form.Item
                        name="importing_countries"
                        label="Перечень государств-импортеров"
                    >
                        <Input placeholder="Страны-импортеры" />
                    </Form.Item>
                </Col>
            </Row>
        ),
    },
    {
        title: 'Меры поддержки',
        content: (
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="support_measures_info"
                        label="Данные об оказанных мерах поддержки"
                    >
                        <Select placeholder="Выберите вариант">
                            <Select.Option value="yes">Да</Select.Option>
                            <Select.Option value="no">Нет</Select.Option>
                            <Select.Option value="no_info">Сведения отсутствуют</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        ),
    }
];
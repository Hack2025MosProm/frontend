//import axiosBase from "@/config/axios"
import axiosBase from "@/config/axios";
import axios from "axios";
import dayjs from "dayjs";

export interface Organization {
    // Основная информация
    inn: string;
    name: string;
    organization_type: string;
    main_industry: string;
    main_subindustry: string;
    special_status: string;
    support_measures: string[];

    // Финансовые показатели
    revenue: number;
    net_profit: number;
    production_capacity_utilization: number;
    moscow_investments: number;

    // Персонал и зарплаты
    moscow_staff: number;
    moscow_salary_fund: number;
    moscow_average_salary: number;

    // Налоговая информация
    moscow_taxes: number;
    profit_tax: number;
    property_tax: number;
    land_tax: number;
    personal_income_tax: number;
    transport_tax: number;
    other_taxes: number;
    excise_taxes: number;

    // Экспортная деятельность
    export_supplies: string;
    export_volume: number;
    export_volume_previous_year: number;

    // Географическая информация
    production_coords: string;
    district: string;
    region: string;

    // Служебная информация
    year: number;
    confirmed: string;
    confirmed_by: string;
    last_modified_date: string;
}


export interface CompanyJsonData {
    "№": number;
    "ИНН": number;
    "Наименование организации": string;
    "Основная отрасль": string;
    "Подотрасль (Основная)": string;
    "Данные об оказанных мерах поддержки": string;
    "Наличие особого статуса": string;
    "Выручка предприятия, тыс. руб": number;
    "Чистая прибыль (убыток),тыс. руб.": number;
    "Среднесписочная численность персонала, работающего в Москве, чел": number;
    "Фонд оплаты труда сотрудников, работающих в Москве, тыс. руб.": number;
    "Средняя з.п. сотрудников, работающих в Москве, тыс.руб.": number;
    "Налоги, уплаченные в бюджет Москвы (без акцизов), тыс.руб.": number;
    "Налог на прибыль, тыс.руб.": number;
    "Налог на имущество, тыс.руб.": number;
    "Налог на землю, тыс.руб.": number;
    "НДФЛ, тыс.руб.": number;
    "Транспортный налог, тыс.руб.": number;
    "Прочие налоги": number;
    "Акцизы, тыс. руб.": number;
    "Инвестиции в Мск тыс. руб.": number;
    "Объем экспорта, тыс. руб.": number;
    "Уровень загрузки производственных мощностей": number;
    "Наличие поставок продукции на экспорт": string;
    "Объем экспорта (млн руб.) за предыдущий календарный год": number;
    "Координаты адреса производства": string;
    "Округ": string;
    "Район": string;
    "Год": number;
    "Подтвержден": string;
    "Кем подтвержден": string;
    "Вид организации": string;
    "Дата последнего изменения": string;
    number: number;
}

export interface Company {
    id: number;
    inn: number;
    name: string;
    full_name: string;
    year: number;
    spark_status: string;
    main_industry: string;
    company_size_final: string;
    organization_type: string;
    support_measures: boolean;
    special_status: string;
    confirmation_status: string;
    confirmed_at: string | null;
    confirmer_identifier: string | null;
    json_data: CompanyJsonData;
    created_at: string;
    updated_at: string;
}

// Альтернативный вариант с английскими названиями полей для json_data
export interface CompanyJsonDataEn {
    number: number;
    inn: number;
    organizationName: string;
    mainIndustry: string;
    mainSubindustry: string;
    supportMeasuresData: string;
    specialStatus: string;
    revenue: number;
    netProfit: number;
    averageHeadcount: number;
    payrollFund: number;
    averageSalary: number;
    taxesPaid: number;
    profitTax: number;
    propertyTax: number;
    landTax: number;
    personalIncomeTax: number;
    transportTax: number;
    otherTaxes: number;
    exciseTaxes: number;
    investments: number;
    exportVolume: number;
    productionCapacityUtilization: number;
    hasExportSupplies: string;
    exportVolumePreviousYear: number;
    productionCoordinates: string;
    district: string;
    area: string;
    year: number;
    confirmed: string;
    confirmedBy: string;
    organizationType: string;
    lastModifiedDate: string;
}

export interface CompanyEn {
    id: number;
    inn: number;
    name: string;
    fullName: string;
    year: number;
    sparkStatus: string;
    mainIndustry: string;
    companySize: string;
    organizationType: string;
    supportMeasures: boolean;
    specialStatus: string;
    confirmationStatus: string;
    confirmedAt: string | null;
    confirmerIdentifier: string | null;
    jsonData: CompanyJsonDataEn;
    createdAt: string;
    updatedAt: string;
}


export const organizationApi = {
    getAll: async () => {
        return axios.get('/organizations.json');
    },
    getCompanies: async () => {
        const { data } = await axiosBase.get('/companies');

        const companies = data?.companies || [];
        const parsed = companies.map((c: any) => {
            const json = c?.json_data || {}
            
            return ({
                ...c,
                ...json,
                ['Дата последнего изменения']: json['Дата последнего изменения'] ?  dayjs(json['Дата последнего изменения']) : undefined
            })
        });
        return parsed;
    }
}
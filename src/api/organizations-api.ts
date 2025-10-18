//import axiosBase from "@/config/axios"
import axiosBase from "@/config/axios";
import axios from "axios";

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

export const organizationApi = {
    getAll: async () => {
        return axios.get('/organizations.json');
    },
    getCompanies: async () => {
        return axiosBase.get('/companies')
    }
}
import React, { createContext, useContext, useEffect, useState, type ReactNode, } from 'react';
import { organizationApi, type Company, } from '@/api/organizations-api';

interface CompaniesContextType {
    companies: Company[];
    companiesUnique: Company[];
    selectedCompanies: Company[];
    selectedIds: number[]
    loading: boolean;
    error: string | null;
    refreshCompanies: (filters?: Record<string, any>) => Promise<void>;

    // Методы для выбранных компаний
    toggleCompany: (companyId: number) => void;
    selectCompany: (companyId: number) => void;
    selectCompanies: (companyId: number[]) => void;
    deselectCompany: (companyId: number) => void;
    selectAll: () => void;
    deselectAll: () => void;
    isSelected: (companyId: number) => boolean;
}

const CompaniesContext = createContext<CompaniesContextType | undefined>(undefined);

interface CompaniesProviderProps {
    children: ReactNode;
}

export const CompaniesProvider: React.FC<CompaniesProviderProps> = ({ children }) => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const selectedCompanies = companies.filter(company => selectedIds.includes(company.id));

    const loadCompanies = async (filters?: Record<string, any>) => {
        try {
            setLoading(true);
            setError(null);
            const data = await organizationApi.getCompanies(filters);
            setCompanies(data);

            const uni = getUniqueCompaniesByInn(data);
            setSelectedIds(uni.map((d: any) => d.id))
        } catch (err) {
            setError('Ошибка при загрузке компаний');
            console.error('Failed to load companies:', err);
        } finally {
            setLoading(false);
        }
    };

    const refreshCompanies = async (filters?: Record<string, any>) => {
        await loadCompanies(filters);
    };

    // Методы для выбранных компаний
    const toggleCompany = (companyId: number) => {
        setSelectedIds(prev =>
            prev.includes(companyId)
                ? prev.filter(id => id !== companyId)
                : [...prev, companyId]
        );
    };

    const selectCompany = (companyId: number) => {
        setSelectedIds(prev =>
            prev.includes(companyId) ? prev : [...prev, companyId]
        );
    };

    const selectCompanies = (companyIds: number[]) => {
        setSelectedIds(companyIds);
    }

    const deselectCompany = (companyId: number) => {
        setSelectedIds(prev => prev.filter(id => id !== companyId));
    };

    const selectAll = () => {
        setSelectedIds(companies.map(company => company.id));
    };

    const deselectAll = () => {
        setSelectedIds([]);
    };

    const isSelected = (companyId: number) => {
        return selectedIds.includes(companyId);
    };

    function getUniqueCompaniesByInn(companies: any[]): any[] {
        const uniqueMap = new Map<number, any>();

        companies.forEach(company => {
            const inn = company.inn;
            if (!uniqueMap.has(inn)) {
                uniqueMap.set(inn, company);
            }
        });

        return Array.from(uniqueMap.values());
    }

    useEffect(() => {
        loadCompanies();
    }, []);

    const value: CompaniesContextType = {
        companies,
        companiesUnique: getUniqueCompaniesByInn(companies),
        selectedCompanies,
        loading,
        error,
        selectedIds,
        refreshCompanies,
        selectCompanies,
        toggleCompany,
        selectCompany,
        deselectCompany,
        selectAll,
        deselectAll,
        isSelected,
    };

    return (
        <CompaniesContext.Provider value={value}>
            {children}
        </CompaniesContext.Provider>
    );
};

export const useCompanies = () => {
    const context = useContext(CompaniesContext);

    if (context === undefined) {
        throw new Error('useCompanies must be used within a CompaniesProvider');
    }

    return context;
};
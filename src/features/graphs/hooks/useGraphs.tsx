import { graphsApi } from "@/api";
import { useAuth, useCompanies } from "@/providers";
import { message } from "antd";
import { useEffect, useState } from "react"

interface GraphData {
    company_ids: number[];
    graph_data: {
        data: any;
        layout: any;
    }
    graph_type: string;
    id: number;
    user_id: number;
}

export const useGraphs = () => {
    const [loading, setLoading] = useState(false);
    const { selectedIds } = useCompanies();
    const [items, setItems] = useState<GraphData[]>([]);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) return;
        if (!Array.isArray(selectedIds) || selectedIds.length === 0) return;
        fetchGraphs(selectedIds);
    }, [selectedIds, isAuthenticated])

    const fetchGraphs = async (ids: number[]) => {
        try {
            setLoading(true);
            const res = await graphsApi.getAll(ids);
            setItems(res);
        } catch (err) {
            console.log(err);
            message.warning("Не удалось получить графики")
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        graphs: items,
        refetch: fetchGraphs,
    }
}
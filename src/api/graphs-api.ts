import axiosBase from "@/config/axios"

function getUniqueGraphsByType(graphs: any[]): any[] {
    const uniqueMap = new Map<string, any>();

    graphs.forEach(graph => {
        const graphType = graph.graph_type;
        if (!uniqueMap.has(graphType)) {
            uniqueMap.set(graphType, graph);
        }
    });

    return Array.from(uniqueMap.values());
}

export const graphsApi = {
    getAll: async (ids: number[]) => {
        // генерация
        await axiosBase.post('/graphs/generate-all', ids);
        let { data } = await axiosBase.get('/graphs');
        return getUniqueGraphsByType(data);
    }
}
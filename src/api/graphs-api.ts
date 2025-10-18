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
        let { data } = await axiosBase.get('/graphs');
        if (Array.isArray(data) && data?.length > 0) {
            let promises: Promise<any>[] = [];

            data?.forEach(g => {
                promises.push(axiosBase.delete(`/graphs/${g.id}`))
            });

            await Promise.all(promises);
        }

        await axiosBase.post('/graphs/generate-all', ids);

        return getUniqueGraphsByType(data);
    }
}
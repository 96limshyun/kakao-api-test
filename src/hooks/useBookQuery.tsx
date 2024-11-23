import { useQuery } from "@tanstack/react-query";

import { TargetType } from "@/types/targetAPI";

export const fetchAPI = async (target: TargetType, query: string) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}target=${target}&query=${query}`,
        {
            headers: {
                Authorization: `KakaoAK ${import.meta.env.VITE_REST_API_KEY}`,
            },
        }
    );
    const data = await response.json();
    return data;
};

const useBookQuery = (target: TargetType, query: string) => {
    return useQuery({
        queryKey: ["bookSearch", target, query],
        queryFn: () => fetchAPI(target, query),
        enabled: !!query,
    });
};

export default useBookQuery;

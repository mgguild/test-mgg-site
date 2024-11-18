import { useEffect, useState } from "react";
import useRefresh from "./useRefresh";
import { Validator } from "config/constants/types";

const url = "https://ronin-node-server.vercel.app";

interface RoninData {
    validator: Validator;
    market: any;
    price?: string;
    totalStaked?: string;
    apr?: string;
}

const useFetchRoninData = () => {
    const { fastRefresh } = useRefresh();
    const [roninData, setRoninData] = useState<RoninData>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching validator data...");
                let response = await fetch(`${url}/getValidator`, {
                    headers: { "content-type": "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch validator data");
                }

                const validatorData = await response.json();
                console.log("Validator data:", validatorData);

                console.log("Fetching market data...");
                response = await fetch(`${url}/getRoninMarket`, {
                    headers: { "content-type": "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch market data");
                }

                const marketData = await response.json();
                console.log("Market data structure:", marketData);

                const rawTotalStaked = validatorData.Validator?.totalStaked ? validatorData.Validator.totalStaked.toString() : "";
                console.log("Raw Total Staked (before truncation):", rawTotalStaked);

                const truncatedTotalStaked = rawTotalStaked.length > 18 ? rawTotalStaked.slice(0, -18) : rawTotalStaked;
                console.log("Truncated Total Staked (after removing 18 digits):", truncatedTotalStaked);

                const formattedTotalStaked = truncatedTotalStaked
                    ? parseFloat(truncatedTotalStaked).toLocaleString("en-US", { maximumFractionDigits: 0 })
                    : "TBA";

                const formattedApr = validatorData.Validator?.apr
                    ? parseFloat(validatorData.Validator.apr).toFixed(2)
                    : "TBA";

                const formattedPrice =
                    marketData.data?.price && !isNaN(Number(marketData.data.price))
                        ? Number(marketData.data.price).toFixed(2)
                        : "TBA";

                console.log("Formatted price:", formattedPrice);

                setRoninData({
                    validator: validatorData.Validator,
                    market: marketData.data,
                    price: formattedPrice,
                    totalStaked: formattedTotalStaked,
                    apr: formattedApr,
                });
            } catch (error) {
                console.error("Error fetching Ronin data:", error);
            }
        };

        fetchData();
    }, [fastRefresh]);

    return roninData;
};

export default useFetchRoninData;

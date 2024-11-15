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
                    throw new Error('Failed to fetch validator data');
                }

                const validatorData = await response.json();
                console.log("Validator data:", validatorData);

                console.log("Fetching market data...");
                response = await fetch(`${url}/getRoninMarket`, {
                    headers: { "content-type": "application/json" }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch market data');
                }

                const marketData = await response.json();
                console.log("Market data:", marketData);

                // Debugging price
                const rawPrice = marketData.data?.price ? marketData.data.price.toString() : "";
                console.log("Raw Price (before truncation):", rawPrice);

                // Remove last 14 digits from price
                const truncatedPrice = rawPrice.length > 14 ? rawPrice.slice(0, -14) : rawPrice;
                console.log("Truncated Price (after removing 14 digits):", truncatedPrice);

                // Debugging totalStaked
                const rawTotalStaked = validatorData.Validator?.totalStaked ? validatorData.Validator.totalStaked.toString() : "";
                console.log("Raw Total Staked (before truncation):", rawTotalStaked);

                // Remove last 18 digits from totalStaked
                const truncatedTotalStaked = rawTotalStaked.length > 18 ? rawTotalStaked.slice(0, -18) : rawTotalStaked;
                console.log("Truncated Total Staked (after removing 18 digits):", truncatedTotalStaked);

                // Format the values
                const formattedPrice = truncatedPrice ? parseFloat(truncatedPrice).toFixed(2) : "TBA";
                const formattedTotalStaked = truncatedTotalStaked ? parseFloat(truncatedTotalStaked).toLocaleString('en-US', { maximumFractionDigits: 0 }) : "TBA";
                const formattedApr = validatorData.Validator?.apr ? parseFloat(validatorData.Validator.apr).toFixed(2) : "TBA";

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

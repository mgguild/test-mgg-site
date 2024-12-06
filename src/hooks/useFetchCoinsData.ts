import { useEffect, useState } from "react";
import useRefresh from "./useRefresh";
import { RONValidator, CMCQuoteData, RIOValidatorDelegation } from "config/constants/types";

const url = "https://ronin-node-server.vercel.app";

interface CoinsData {
    validator: RONValidator | RIOValidatorDelegation;
    market: CMCQuoteData;
    price?: string;
    totalStaked?: string;
    apr?: string;
    aprLive?: string;
}

const formatTotalStaked = (value: string) => {
    if (!value) return "TBA";
    try {
        const scaledValue = parseFloat(value) / 1e18;
        // Format to 2 decimal places with commas
        return scaledValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " RIO";
    } catch (error) {
        console.error("Error formatting total staked:", error);
        return "TBA";
    }
};

const useFetchCoinsData = () => {
    const { fastRefresh } = useRefresh();
    const [RONData, setRONData] = useState<CoinsData>();
    const [RIOData, setRIOData] = useState<CoinsData>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                //FETCH VALIDATOR DATA
                //RON VALIDATOR
                console.log("Fetching RON validator data...");
                let response = await fetch(`${url}/getRoninValidator`, {
                    headers: { "content-type": "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch validator data");
                }

                const RONValidatorData = await response.json();
                console.log("RON Validator data:", RONValidatorData);

                //RIO VALIDATOR
                console.log("Fetching RIO validator data...");
                response = await fetch(`${url}/getRioValidator`, {
                    headers: { "content-type": "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch validator data");
                }

                const res = await response.json();
                const RIOValidatorData: RIOValidatorDelegation = res.data;
                console.log("RIO Validator data:", RIOValidatorData);

                //FETCH MARKET DATA
                console.log("Fetching market data...");
                response = await fetch(`${url}/getCoinsMarket`, {
                    headers: { "content-type": "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch market data");
                }

                const raw2TotalStaked = RIOValidatorData.delegation_responses.length > 0 ? RIOValidatorData.delegation_responses[0].balance.amount : "";
                console.log("Raw Total Staked:", raw2TotalStaked);

                const formatted2TotalStaked = formatTotalStaked(raw2TotalStaked);
                console.log("Formatted Total Staked:", formatted2TotalStaked);

                const marketData = await response.json();
                console.log("Market data structure:", marketData);

                const rawTotalStaked = RONValidatorData.Validator?.totalStaked ? RONValidatorData.Validator.totalStaked.toString() : "";
                console.log("Raw Total Staked (before truncation):", rawTotalStaked);

                const truncatedTotalStaked = rawTotalStaked.length > 18 ? rawTotalStaked.slice(0, -18) : rawTotalStaked;
                console.log("Truncated Total Staked (after removing 18 digits):", truncatedTotalStaked);

                const formattedTotalStaked = truncatedTotalStaked
                    ? parseFloat(truncatedTotalStaked).toLocaleString("en-US", { maximumFractionDigits: 0 })
                    : "TBA";

                const formattedApr = RONValidatorData.Validator?.apr
                    ? parseFloat(RONValidatorData.Validator.apr).toFixed(2)
                    : "TBA";

                const formattedAprLive = RONValidatorData.Validator?.aprLive
                    ? parseFloat(RONValidatorData.Validator.aprLive).toFixed(2)
                    : "TBA";

                const formattedPrice =
                    marketData.data?.price && !isNaN(Number(marketData.data.price))
                        ? Number(marketData.data.price).toFixed(2)
                        : "TBA";

                console.log("Formatted price:", formattedPrice);

                setRONData({
                    validator: RONValidatorData.Validator,
                    market: marketData.data["14101"],
                    price: formattedPrice,
                    totalStaked: formattedTotalStaked,
                    apr: formattedApr,
                    aprLive: formattedAprLive,
                });

                setRIOData({
                    validator: RIOValidatorData,
                    market: marketData.data["4166"],
                    totalStaked: formatted2TotalStaked,
                })
            } catch (error) {
                console.error("Error fetching Ronin data:", error);
            }
        };

        fetchData();
    }, [fastRefresh]);

    return {RONData: RONData, RIOData: RIOData};
};

export default useFetchCoinsData;

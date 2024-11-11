import { useEffect, useState } from "react";
import useRefresh from "./useRefresh";
import { Validator } from "config/constants/types";

const url = "https://ronin-node-server.vercel.app";

interface RoninData {
    validator: Validator;
    market: any;
}

const useFetchRoninData = () => {
    const {fastRefresh} = useRefresh()
    const [roninData, setRoninData] = useState<RoninData>();

    useEffect( () => {
       const fetchData = async() => {
            try {
                var response = await fetch(`${url}/getValidator`, {
                    headers: {
                        "content-type": "application/json",
                        "Access-Control-Allow-Origin" : "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    }
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch referrals');
                }

                const validatorData = await response.json();

                response = await fetch(`${url}/getRoninMarket`, {
                    headers: {
                        "content-type": "application/json",
                        "Access-Control-Allow-Origin" : "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    }
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch referrals');
                }

                const marketData = await response.json();


                setRoninData({
                    validator: validatorData.Validator,
                    market: marketData.data
                });
            } catch (error) {
                console.error(error);
            }
       }

       fetchData();

    }, [fastRefresh])

    return roninData;
}


export default useFetchRoninData;
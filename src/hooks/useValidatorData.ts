import { useEffect, useState } from "react";
import useRefresh from "./useRefresh";
import { Validator } from "config/constants/types";

const url = "https://ronin-node-server.vercel.app/getValidator";

const useFetchValidator = () => {
    const {fastRefresh} = useRefresh()
    const Validator: Validator = null;
    const [validatorData, setValidatorData] = useState(Validator);

    useEffect( () => {
       const fetchData = async() => {
            try {
                const response = await fetch(url, {
                    headers: {
                        "content-type": "application/json",
                        "Access-Control-Allow-Origin" : "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    }
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch referrals');
                }

                const data = await response.json();
                setValidatorData(data.Validator);
            } catch (error) {
                console.error(error);
            }
       }

       fetchData();

    }, [fastRefresh])

    return validatorData;
}


export default useFetchValidator;
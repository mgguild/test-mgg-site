import axios from "axios";
import { useEffect, useState } from "react";
import useRefresh from "./useRefresh";
import { useQuery, gql } from "@apollo/client";

// const url = "https://indexer.roninchain.com/query";
// const url1 = "https://countries.trevorblades.com/";
const fetch = {
    operationName: "Validator",
    variables: {"validator": "0xea94e2f3f1b24214f9d9bfb5608084476f34d48a"},
    query: "query Validator($validator: String!) {\n  Validator(validator: $validator) {\n    address\n    admin\n    treasury\n    bridge\n    totalReward\n    totalStaked\n    totalSelfStaked\n    totalSlashed\n    blockValidated\n    commission\n    uptime\n    apr\n    status\n    isTrusted\n    totalClaimedReward\n    creditScore\n    __typename\n  }\n}"
}

const QUERY = gql`
query Validator($validator: String!){
    Validator(validator: $validator){
        address
        admin
        treasury
        bridge
        totalReward
        totalStaked
        totalSelfStaked
        totalSlashed
        blockValidated
        commission
        uptime
        apr
        status
        isTrusted
        totalClaimedReward
        creditScore
        __typename
    }
}
`

const QUERY_1 = gql`
query {
  countries {
    name
  }
}
`

const useFetchValidator = () => {
    const {fastRefresh} = useRefresh()
    const {data, loading, error} = useQuery(QUERY, {
        variables: {
            validator: "0xea94e2f3f1b24214f9d9bfb5608084476f34d48a",
        },
        context: {
            "content-type": "application/json",
            "Content-Length": "459",
            "DNT": "1"
        }
    });

    const [validatorData, setValidatorData] = useState();

    // if (loading) return "Loading...";
    if (error){
        console.error(error)
    }

    console.log(data);

    useEffect(() => {
       const fetchData = async() => {
            // try {
            //     const response = await axios.post(url1, {query1}, config);
            //     console.log(response.data);
            //     // setData(response.data);

            // } catch (error) {
            //     console.error(error);
            // }
       }

       fetchData();

    }, [data, fastRefresh])

    return validatorData;
}


export default useFetchValidator;
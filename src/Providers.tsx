// @ts-nocheck
import React from "react";
import {Web3ReactProvider} from '@web3-react/core'
import {ModalProvider} from '@metagg/mgg-uikit'
import {getLibrary} from 'utils/web3React'
import {ThemeContextProvider} from "contexts/ThemeContext";
import {ToastsProvider} from 'contexts/ToastsContext'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://indexer.roninchain.com/query",
    cache: new InMemoryCache()
})

const Providers: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <ApolloProvider client={client}>
                <ToastsProvider>
                    <ThemeContextProvider>
                        <ModalProvider>
                            {children}
                        </ModalProvider>
                    </ThemeContextProvider>
                </ToastsProvider>
            </ApolloProvider>
        </Web3ReactProvider>
    );
};

export default Providers;

import { Key, ReactNode } from "react";

export interface Address {
    1?: string
    4?: string
}

export interface PageMeta {
  title: string;
  description?: string;
  image?: string;
}

export interface RoadmapConfig {
  [key: string]: Quarter;
}

export interface Quarter {
  [key: string]: { txt: string; check: boolean }[];
}

interface DetailsConfig {
  name: string;
  description: string;
  image: string
}

export interface IEcosystems extends DetailsConfig{
  subtitle: string;
  status?: string;
  image: string;
  link?: string;
}

export interface IFigures {
  amount: string;
  subtitle: string;
}

export interface IApp {
  description: string;
}

export interface INews extends DetailsConfig  {
  image: string
  description: string;
  link?: string; 
}

export interface RevenueModelConfig extends DetailsConfig {}

export interface Partners {
  InvsBckrs: Partner;
  Partners: Partner;
}

export interface TeamsConfig {
  [key: string]: { name: string; title: string; link?: string}[];
}

export interface Partner {
  [key: string]: { name: string; logo: any; link?: string }
}


export interface ExchangesConfig {
  name: string;
  image: string;
  link: string;
}

interface CMCUSD {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  tvl: any;
  last_updated: string;
}

interface CMCUSDQuote {
  USD: CMCUSD;
}

export interface CMCQuoteData {
  quote: CMCUSDQuote;
}

export interface RONValidator {
  __typename: string;
  address: string;
  admin: string;
  apr: string;
  blockValidated: string;
  bridge: string;
  commission: string;
  creditScore: string;
  isTrusted: boolean
  status: string;
  totalClaimedReward: string;
  totalReward: string;
  totalSelfStaked: string;
  totalSlashed: string;
  totalStaked: string;
  treasury: string;
  uptime: string;
}

interface Consensus_pubkey {
  '@type': string;
  key: string;
}

interface RIODescription {
  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string
}

interface RIOCommission_rates {
  rate: string;
  max_rate: string;
  max_change_rate: string;
}

interface RIOCommison {
  commission: RIOCommission_rates;
}

export interface RIOValidator {
  totalStaked: any;
  operator_address: string;
  consensus_pubkey: Consensus_pubkey;
  jailed: boolean;
  status: string;
  tokens: string;
  delegator_shares: string;
  description: RIODescription;
  unbonding_height: string;
  unbonding_time: string;
  commission: RIOCommison;
  update_time: string;
  min_self_delegation: string;
  bond_denom: string;
}

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

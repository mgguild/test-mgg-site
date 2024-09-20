import { IEcosystems, IFigures } from "./types";

export const Ecosystems: IEcosystems[] = [
  {
    name: "PLAY-TO-EARN",
    subtitle: "Scholarship",
    description:
      "MGG empowers gamers by renting out best-in-class NFTs from promising gaming startups through our profit-sharing program.",
    image: "MetaGamers",
  },
  {
    name: "STRATEGIC INVESTMENTS",
    subtitle: "NFTs, Assets, Token Acquisition",
    description:
      "Backed by industry-leadinf partners, MGG carefully selects and acquires NFTs, tokens, and gaming assets to drive sustainable growth and deliver value to our community.",
    image: "Labs",
  },
  {
    name: "BLOCKCHAIN VALIDATION",
    subtitle: "Node Operations",
    description:
      "MGG particiaptes in the security and scability of some blockchain networks through active node operations, contributing to decentralized infrastructure and generating additional revenue for our guild members.",
    image: "Dao",
    // link: '/mgg-NFTs',
    // status: "msw.gg",
  },
  {
    name: "GAME DEVELOPMENT",
    subtitle: "NFT Games",
    description:
      "MGG also ventured into game development, creating addictive and player-centric NFT games for our community. Our flagship game, MetaSaga Warriors, is a free-to-play NFT game where you command a team of Diggers to battle enemies in the land of Permafaria. Play now at msw.gg",
    link: 'https://msw.gg',    
    image: "Warriors",
  },
];


export const Figures:IFigures[] = [
  // {
  //   amount: '$100,000+',
  //   subtitle: 'Monthly Revenue',
  // },
  {
    amount: '80+',
    subtitle: 'Renowned Gaming Partners'
  },
  {
    amount: '30+',
    subtitle: 'Acquired Early-game Assets'
  },
  {
    amount: '1,500+',
    subtitle: 'Active Scholars',
  },
  // {
  //   amount: '1,000,000+',
  //   subtitle: 'SLP Farmed per Month'
  // },
  {
    amount: '5,000+',
    subtitle: 'NFTs in the Treasury'
  }
]

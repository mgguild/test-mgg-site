import { IEcosystems, IFigures, IApp, INews } from "./types";

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
      "Backed by industry-leading partners, MGG carefully selects and acquires NFTs, tokens, and gaming assets to drive sustainable growth and deliver value to our community.",
    image: "Labs",
  },
  {
    name: "BLOCKCHAIN VALIDATION",
    subtitle: "Node Operations",
    description:
      "MGG participates in the security and scability of some blockchain networks through active node operations, contributing to decentralized infrastructure and generating additional revenue for our guild members.",
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



export const App:IApp[] = [
  {
    description: 'STAKING'  
  },
  {
    description: 'GAMEFI VAULT'  
  },
  {
    description: 'META GAMING PAD'  
  },
  {
    description: 'EARNING DASHBOARD'  
  },
  {
    description: 'BRIDGE'  
  },
  
]



export const News:INews[] = [
  {
    image: 'News1',
    description: `Metagaming Guild's Pixels Scholarship Welcomes 1,500 Scholars`,
    name: "page1",
    link: "https://medium.com/metagamingguild/metagaming-guilds-pixels-scholarship-welcomes-1-500-scholars-181bff1ad4b6",
  },
  {
    image: 'News2',
    description: 'Unveiling The Earning Mechanism Of Meatasaga Warriors With $MGG Token',
    name: "page2",
    link: "https://medium.com/metagamingguild/unveiling-the-earning-mechanism-of-metasaga-warriors-with-mgg-token-426d8870dd78",
  },
  {
    image: 'News3',
    description: 'Deep Dive Into $MGG Token: Understanding Its Utilities And Value',
    name: "page3",
    link: "https://medium.com/metagamingguild/deep-dive-into-mgg-token-understanding-its-utilities-and-value-95571164e817",
  },
  
]

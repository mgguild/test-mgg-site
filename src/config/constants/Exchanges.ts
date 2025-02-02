import { ExchangesConfig } from "./types";

import GateIo from '../../assets/logo/Exchanges/gateIo.png'
import Huobi from '../../assets/logo/Exchanges/huobi.png'
import Mexc from '../../assets/logo/Exchanges/mexc.png'
import Pancakeswap from '../../assets/logo/Exchanges/pancakeswap.png'
import Uniswap from '../../assets/logo/Exchanges/uniswap.png'
import Spookyswap from '../../assets/logo/Exchanges/spookyswap.png'
import CoinsPH from '../../assets/logo/Exchanges/coinsph_logo.png'

const Exchanges:ExchangesConfig[] = [
  // {
  //   name: 'Huobi',
  //   image: Huobi,
  //   link: 'https://www.huobi.com/en-us/exchange/mgg_usdt/'
  // },
  // {
  //   name: 'Gate.io',
  //   image: GateIo,
  //   link: 'https://www.gate.io/trade/MGG_USDT'
  // },
  // {
  //   name: 'MEXC',
  //   image: Mexc,
  //   link: 'https://www.mexc.com/'
  // },
  {
    name: 'PancakeSwap',
    image: Pancakeswap,
    link: 'https://pancakeswap.finance/swap'
  },
  {
    name: 'UniSwap',
    image: Uniswap,
    link: 'https://app.uniswap.org/#/swap?chain=mainnet'
  },
  {
    name: 'SpookySwap',
    image: Spookyswap,
    link: 'https://spooky.fi/#/swap'
  },
  {
    name: 'CoinsPH',
    image: CoinsPH,
    link: 'https://pro.coins.ph/en-ph/register/?invite_code=1277426330229629419&broker=9001'
  },
]

export default Exchanges
import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'ICE',
    tokenEarned: 'ICE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1', // cake/Vanilla
    milkshakeAddress: '0x1140A764DFB67821dFa3f9C65B44818a2ce781D7',
    contractAddress: {
      97: '0xc64DdC9C5301523d60906fF75555D628e7518F13',
      56: '0xc64DdC9C5301523d60906fF75555D628e7518F13', // MasterChef
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://icecreamswap.finance/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }
]

export default pools

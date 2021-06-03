import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ICE',
    lpAddresses: {
      97: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
      56: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
    },
    tokenSymbol: 'ICE',
    tokenAddresses: {
      97: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
      56: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ICE-BNB ICLP',
    lpAddresses: {
      97: '0x39ad45f07d3f4Ed0eB7dC287d97fac8f42185aEA', // iCLP
      56: '0x39ad45f07d3f4Ed0eB7dC287d97fac8f42185aEA',
    },
    tokenSymbol: 'ICE',
    tokenAddresses: {
      97: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
      56: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'ICE-BUSD ICLP',
    lpAddresses: {
      97: '0x59b778B183fC4DA0ECE4a6440ca1E390A063AEfC', // iCLP
      56: '0x59b778B183fC4DA0ECE4a6440ca1E390A063AEfC',
    },
    tokenSymbol: 'ICE',
    tokenAddresses: {
      97: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
      56: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 3,
    lpSymbol: 'BUSD-BNB ICLP',
    lpAddresses: {
      97: '0xdfaf4aF334AB85d43500b4E7edfA570c307b79D9', // iCLP
      56: '0xdfaf4aF334AB85d43500b4E7edfA570c307b79D9',
    },
    tokenSymbol: 'ICE',
    tokenAddresses: {
      97: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'GLTO Migration',
    lpAddresses: {
      97: '0x8212b85822f0713C52e7277C4D056A68B3722a8a', // GLTO
      56: '0x8212b85822f0713C52e7277C4D056A68B3722a8a',
    },
    tokenSymbol: 'ICE',
    tokenAddresses: {
      97: '0x4141a2741697dDEc7eB3B8fDd085c18Fe91367A1',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]
export default farms

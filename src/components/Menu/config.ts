import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'IceCreamFarm',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'IceCreamSwap',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.icecreamswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.icecreamswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Vanilla Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'VanillaIce Pool',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Roadmap & Contact Info',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Audit',
        href: 'https://icecreamswap.finance/Vanilla_Audit.pdf',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/IceCreamSwap',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/SwapIceCream',
      },
      {
        label: 'Github',
        href: 'https://github.com/icecreamswap',
      },
      {
        label: 'Docs',
        href: 'https://swapicecream.gitbook.io/icecreamswap-2-0/',
      },
      {
        label: 'FAQ',
        href: 'https://app.gitbook.com/@swapicecream/s/icecreamswap-2-0/faq',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@icecreamswap',
      },
      {
        label: 'Vault',
        href: 'https://ice-cream-swap.gitbook.io/icecreamswap/roadmap/icecream-vaults',
      },
    ],
  },
]

export default config

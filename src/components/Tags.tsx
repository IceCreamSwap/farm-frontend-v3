import React from 'react'
import { Tag as NTag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

const Tag = styled(NTag)`
  border-radius: 6px;
`

const CoreTag = () => (
  <Tag variant="primary" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const CommunityTag = () => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
)

const BinanceTag = () => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag }

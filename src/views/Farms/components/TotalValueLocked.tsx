import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { Text, Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from '@pancakeswap-libs/uikit'
import { NavLink } from 'react-router-dom'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'
import { QuoteToken } from 'config/constants/types'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const TotalValueLocked = () => {
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const cakePrice = usePriceCakeBusd()

  const maxAPY = useRef(Number.MIN_VALUE)
  const TVL = useRef(Number.MIN_VALUE)

  const getTVL = () => {
    const activeFarms = farmsLP.filter((farm) => farm.multiplier !== '0X')
    TVL.current = 0
    calculateTVL(activeFarms)

    return TVL.current.toLocaleString('en-US').slice(0, -1)
  }

  const calculateTVL = useCallback(
    (farmsToDisplay) => {
      farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        let tvl = new BigNumber(0)
        if (farm.lpTotalInQuoteToken) {
          if (farm.quoteTokenSymbol === QuoteToken.BNB) {
            tvl = bnbPrice.times(farm.lpTotalInQuoteToken)
          } else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
            tvl = cakePrice.times(farm.lpTotalInQuoteToken)
          } else {
            tvl = tvl.plus(farm.lpTotalInQuoteToken)
          }
          TVL.current += tvl.toNumber()
        }
        return tvl
      })
    },
    [bnbPrice, cakePrice],
  )

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {getTVL() ? (
          <Text
            mt="16px"
            color="secondary"
            mb="10px"
            style={{
              textAlign: 'center',
              background: '#2c2c2f',
              border: '1px solid gray',
              padding: 10,
              borderRadius: 3,
              color: 'white',
              fontSize: 20,
              lineHeight: '20px',
            }}
          >
            TVL: ${getTVL()}
          </Text>
        ) : (
          <Skeleton animation="pulse" variant="rect" height="44px" />
        )}
      </div>
    </>
  )
}

export default TotalValueLocked

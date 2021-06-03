import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { CAKE_PER_BLOCK } from 'config'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 10px;
  background: #850085;
  border: 1px solid #464549;
  border-radius: 3px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Vanilla Stats')}
        </Heading>
        <Row>
          <Text fontSize="16px" style={{ opacity: 0.8, color: '#EAE2FC' }}>
            {TranslateString(536, 'Total Vanilla Supply')}
          </Text>
          {cakeSupply && <CardValue fontSize="18px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="16px" style={{ opacity: 0.8, color: '#EAE2FC' }}>
            {TranslateString(538, 'Total Vanilla Burned')}
          </Text>
          <CardValue fontSize="18px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="16px" style={{ opacity: 0.8, color: '#EAE2FC' }}>
            {TranslateString(540, 'New Vanilla/block')}
          </Text>
          <CardValue fontSize="18px" decimals={2} value={1.25} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats

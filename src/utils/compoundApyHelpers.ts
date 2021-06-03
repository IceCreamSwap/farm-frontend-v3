const roundToTwoDp = (number) => Math.round(number * 100) / 100

export const calculateCakeEarnedPerThousandDollars = ({ numberOfDays, farmApy, cakePrice }) => {
  // Everything here is worked out relative to a year, with the asset compounding daily
  const timesCompounded = 365
  //   We use decimal values rather than % in the math for both APY and the number of days being calculates as a proportion of the year
  const apyAsDecimal = farmApy / 100
  const daysAsDecimalOfYear = numberOfDays / timesCompounded
  //   Calculate the starting CAKE balance with a dollar balance of $1000.
  const principal = 1000 / cakePrice

  // This is a translation of the typical mathematical compounding APY formula. Details here: https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
  const finalAmount = principal * (1 + apyAsDecimal / timesCompounded) ** (timesCompounded * daysAsDecimalOfYear)

  // To get the cake earned, deduct the amount after compounding (finalAmount) from the starting CAKE balance (principal)
  const interestEarned = finalAmount - principal
  return roundToTwoDp(interestEarned)
}

export const apyModalRoi = ({ amountEarned, amountInvested }) => {
  const percentage = (amountEarned / amountInvested) * 100
  // return percentage.toFixed(2);
  return formatApy(percentage)
}

// Stolen from the big-brains of beefy team
export const formatApy = (_apy) => {
  if (!_apy) return `???`

  const apy = _apy

  const order = apy < 1 ? 0 : Math.floor(Math.log10(apy) / 3)
  const units = ['', 'k', 'M', 'B', 'T', 'Q', 'Q', 'S', 'S']
  const num = apy / 1000 ** order

  return `${num.toFixed(2)}${units[order] ? units[order] : ''}`
}

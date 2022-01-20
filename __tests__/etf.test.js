const { binanceEtfIcons } = require('..')

describe('binanceEtfIcons', () => {
  test(`has('btcup') should return true`, () => {
    expect(binanceEtfIcons.has('btcup')).toEqual(true)
  })
})

const { binanceCurrencyIcons } = require('..')

describe('binanceCurrencyIcons', () => {
  test(`has('eur') should return true`, () => {
    expect(binanceCurrencyIcons.has('eur')).toEqual(true)
  })
})

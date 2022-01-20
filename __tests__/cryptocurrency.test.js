const { binanceCryptoIcons } = require('..')

describe('binanceCryptoIcons', () => {
  test(`has('btc') should return true`, () => {
    expect(binanceCryptoIcons.has('btc')).toEqual(true)
  })
})

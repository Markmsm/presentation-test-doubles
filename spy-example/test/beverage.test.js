const beverage = require('../beverage')

describe('Beverage test', () => {
    test('isBeer() should return true if called with "beer"', () => {
        const beverageSpy = jest.spyOn(beverage, 'isBeer')

        beverage.isBeer('beer')

        expect(beverageSpy).toHaveBeenCalledTimes(1)
        expect(beverageSpy).toHaveBeenCalledWith('beer')
        expect(beverageSpy).toHaveReturnedWith(true)
    })
})
import FastHttp from '../src/fast-http'

/**
 * Dummy test
 */
describe('FastHttp test', () => {
    it('works if true is truthy', () => {
        expect(true).toBeTruthy()
    })

    it('DummyClass is instantiable', () => {
        expect(new FastHttp()).toBeInstanceOf(FastHttp)
    })
})

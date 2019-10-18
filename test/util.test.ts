import { isDate, isPlainObject, mergeOptions } from '../src/utils/util'
import { Options } from '../src/options'

describe('util test', () => {
    it('isDate() should be Date', () => {
        const examples = ['2019-11-11', {}, new Date(), new Date('2019')]
        const exp = [false, false, true, true]
        for (let i = 0; i < examples.length; i++) {
            const example = examples[i]
            expect(isDate(example)).toEqual(exp[i])
        }
    })
    it('isPlainObject() should be boolean', function() {
        const examples = [
            {},
            JSON.parse('{}'),
            Object.create(null),
            Object.create({}),
            new Array(5).fill(1),
            new Date(),
            String('1'),
            '',
            new Map(),
            new Set()
        ]
        const exp: boolean[] = [
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false
        ]
        for (let i = 0; i < examples.length; i++) {
            const example = examples[i]
            console.log(i, isPlainObject(example))
            expect(isPlainObject(example)).toEqual(exp[i])
        }
    })
    it('mergeOptions() should be Date', () => {
        const examples: Options[] = [
            {
                credentials: 'include',
                redirect: 'follow',
                referrer: 'no-referrer'
            }
        ]
        const examples1: Options[] = [
            {
                host: '11',
                header: { 'content-type': 'application/json;charset=utf8' },
                mode: 'cors',
            }
        ]
        const exp: Options[] = [
            {
                host: '11',
                header: { 'content-type': 'application/json;charset=utf8' },
                mode: 'cors',
                credentials: 'include',
                redirect: 'follow',
                referrer: 'no-referrer'
            }
        ]
        for (let i = 0; i < examples.length; i++) {
            const example = examples[i]
            const example1 = examples1[i]
            expect(mergeOptions(example, example1)).toEqual(exp[i])
        }
    })
})

import { buildUrl, encode } from '../src/utils/url'

describe('url test', () => {
    it('buildUrl() should be string', () => {
        const url = '/post'
        const params1 = { name: 'jack' }
        const params2 = { name: '?%' }
        const params3 = { name: 10 }
        const params4 = { name: [] }
        const params5 = { name: ['jack'] }
        const params6 = { name: ['tom', 'mary'] }
        const params7 = { name: null }
        const params8 = { name: undefined }
        const params9 = { name: { age: 22 } }
        const params10 = { name: 'jack', age: 22, sex: true }
        expect(buildUrl(url, params1)).toEqual('/post?name=jack')
        expect(buildUrl(url, params2)).toEqual('/post?name=?%')
        expect(buildUrl(url, params3)).toEqual('/post?name=10')
        expect(buildUrl(url, params4)).toEqual('/post')
        expect(buildUrl(url, params5)).toEqual('/post?name[]=jack')
        expect(buildUrl(url, params6)).toEqual('/post?name[]=tom&name[]=mary')
        expect(buildUrl(url, params7)).toEqual('/post')
        expect(buildUrl(url, params8)).toEqual('/post')
        expect(buildUrl(url, params9)).toEqual('/post?name={"age":22}')
        expect(buildUrl(url, params10)).toEqual('/post?name=jack&age=22&sex=true')
    })

    it('encode() should be string', function() {
        const strs = ['`~!@#$%^&*()_+-={}|":?><,./;\'[]\\', 1234567890,'1234567890qwertyuioplkjhgfdsazxcvbnm'];
        const res: string[] = [
            "%60~!@%23$%25%5E%26*()_%2B-%3D%7B%7D%7C%22:%3F%3E%3C,.%2F%3B'[]%5C",
            "1234567890",
            "1234567890qwertyuioplkjhgfdsazxcvbnm"
        ];
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i] + ''
            expect(encode(str)).toEqual(res[i])
        }
    })
})

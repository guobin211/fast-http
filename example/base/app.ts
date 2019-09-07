import FastHttp from '../../src/fast-http'

const fast = new FastHttp()
console.log(fast)
fast.get('/example/get', {
    params: {
        name: 'jack',
        age: 11
    }
}).then(res => console.log(res)).catch(e => console.log(e))

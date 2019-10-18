import FastHttp from '../../src/fast-http'

const fast = new FastHttp()

fast.delete('/extend/delete', { name: 'jack', age: 22 }).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})

// fast.put('/extend/put', { name: 'jack', age: 22 }).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })
//
// fast.put('/extend/put', { person: ['jack', 'tom'], age: 22 }).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })

/*buffer*/
// (window as any).handleFileChange = (source: HTMLInputElement) => {
//     if (source.files) {
//         const file = source.files[0]
//         const reader = new FileReader()
//         reader.readAsArrayBuffer(file)
//         reader.onload = (res: any) => {
//             fast.post('/example/buffer', res.target.result).then(res => {
//                 console.log(res)
//             }).catch(e => {
//                 console.log(e)
//             })
//         }
//     }
// }
// console.log(fast)
// fast.post('/example/post', { name: 'jack', age: 22 }).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })
// fast.post('/example/post', { name: ['jack', 'tom'], age: 22 }).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })
// fast.post('/example/post', {
//     person: {
//         name: ['tom', 'jack']
//     }, age: {
//         sex: [0, 1]
//     }
// }).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })
// fast.get('/example/get', {
//     params: {
//         name: 'jack',
//         age: 11
//     }
// }).then(res => console.log(res)).catch(e => console.log(e))
// fast.get('/example/get', {
//     url: '',
//     params: {
//         name: 'jack',
//         age: 11
//     }
// }, {
//     host: 'http://localhost:8080'
// }).then(res => console.log('get ', res)).catch(e => console.log('get err', e))
// fast.get('/get', {
//     url: '/example',
//     params: {
//         name: 'jack',
//         age: 11
//     }
// }, {
//     host: 'http://localhost:8080'
// }).then(res => console.log(res)).catch(e => console.log(e))
// fast.get('/example/get', {
//     url: '',
//     params: {
//         name: 'jack',
//         age: 11
//     }
// }, {
//     host: 'http://localhost:8080'
// }).then(res => console.log('get ', res)).catch(e => console.log(e))
//
// fast.get('/example/get', {
//     url: '',
//     params: {
//         name: ['jack', 'tom'],
//         age: 11
//     }
// }, {
//     host: 'http://localhost:8080'
// }).then(res => console.log('get ', res)).catch(e => console.log(e))
//
// fast.get('/example/get', {
//     url: '',
//     params: {
//         name: ['', ''],
//         age: 11
//     }
// }, {
//     host: 'http://localhost:8080'
// }).then(res => console.log('get ', res)).catch(e => console.log(e))

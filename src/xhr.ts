/**
 * xhr
 *
 * @author GuoBin on 2019-07-27
 */
import { FastRequestConfig } from './types'

export default function xhr(config: FastRequestConfig) {
    const { data = null, url, method = 'get' } = config
    const request = new XMLHttpRequest()
    request.open(method.toLocaleUpperCase(), url, true)
    request.send(data)
}

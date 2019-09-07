export function fetch(url: string, options: any) {
    return window.fetch(url, {
        keepalive: true
    })
}

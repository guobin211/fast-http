interface ResolvedFn<T> {
    (val: T): T | Promise<T>
}

interface RejectedFn<T> {
    (error: any): any
}

interface InterceptorManager<T> {
    resolved: ResolvedFn<T>
    rejected?: RejectedFn<T>
}

export default class Interceptor<T> {
    private readonly _interceptors: Array<InterceptorManager<T> | null>

    constructor() {
        this._interceptors = []
    }

    use(resolved: ResolvedFn<T>, rejected?: RejectedFn<T>): number {
        this._interceptors.push({
            resolved,
            rejected
        })
        return this._interceptors.length - 1
    }

    eject(id: number): void {
        if (this._interceptors[id]) {
            this._interceptors[id] = null
        }
    }

    private forEach(fn: (interceptor: InterceptorManager<T>) => void) {
        this._interceptors.forEach(interceptor => {
            if (interceptor !== null) {
                fn(interceptor)
            }
        })
    }
}

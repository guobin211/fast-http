interface ResolvedFn<T> {
    (val: T): T | Promise<T>;
}
interface RejectedFn<T> {
    (error: any): any;
}
export default class Interceptor<T> {
    private readonly _interceptors;
    constructor();
    use(resolved: ResolvedFn<T>, rejected?: RejectedFn<T>): number;
    eject(id: number): void;
    private forEach;
}
export {};

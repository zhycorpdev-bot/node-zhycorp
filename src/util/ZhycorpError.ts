export default class ZhycorpError extends Error {
    public constructor(public name: string, message?: string) {
        super(message);
    }
}

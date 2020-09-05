export default class ZhycorpError extends Error {
    name: string;
    constructor(name: string, message?: string);
}

export default class ResponseError {
    constructor(message, description, stack) {
        this.success = false;
        this.message = message;
        this.description = description;
        this.stack = err.stack
    }
}
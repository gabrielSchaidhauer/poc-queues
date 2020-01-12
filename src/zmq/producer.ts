import { Publisher } from "zeromq";

export default class ZeroProducer {
    private publisher: Publisher;
    constructor() {
        this.publisher = new Publisher;
        this.publisher.bind('tcp://127.0.0.1:3000');
    }

    async sendMessage(message: string) {
            await this.publisher.send(["kitty cats", message])
    }
}
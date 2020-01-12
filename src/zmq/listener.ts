import { Subscriber } from 'zeromq';

export default class ZeroListener {
    private subscriber: Subscriber
    constructor() {
        this.subscriber = new Subscriber;
        this.subscriber.connect("tcp://127.0.0.1:3000");
        this.subscriber.subscribe("kitty cats");
    }

    async listen() {
        for await (const response of this.subscriber) {
            console.log(response[1].toString());
        }
    }
}
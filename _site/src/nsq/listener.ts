
import nsq, { Message } from 'nsqjs';

const enum Events {
    MESSAGE = 'message',
    ERROR = 'error'
}

 export default class NsqListener {
    
    private reader: nsq.Reader;
    
    constructor() {
        this.reader = new nsq.Reader('poc-topic', 'poc-channel', {
            lookupdHTTPAddresses: '127.0.0.1:4161'
        });
    }

    listen() {
        this.reader.connect();
        this.reader.on(Events.MESSAGE, this.onMessage);
        this.reader.on(Events.ERROR, this.onError);
    }

    private onMessage(msg: Message) {
        console.log(msg.body.toString());
        msg.finish();
    }

    private onError(err: Error) {
        console.error(err);
    }
}
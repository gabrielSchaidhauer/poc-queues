import nsq from 'nsqjs';

const enum Events {
    READY = 'ready',
    CLOSED = 'closed'
}

export default class NsqWriter {

    private writer: nsq.Writer;

    constructor() {
        this.writer = new nsq.Writer('127.0.0.1', 4150);
        this.writer.connect();
        this.writer.on(Events.CLOSED, this.onClose);
        this.writer.on(Events.READY, () => this.write('Started Listening'));
    }

    public write(msg: string) {
        this.writer.publish('poc-topic', msg);
    }

    private onClose() {
        this.writer = new nsq.Writer('127.0.0.1', 4150);
        this.writer.connect();
        this.writer.on(Events.CLOSED, this.onClose);
    }
}
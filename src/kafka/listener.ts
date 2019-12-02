import { KafkaConsumer }  from 'node-rdkafka';

export default class KafkaListener {
    private consumer: KafkaConsumer;
    constructor () {
        this.consumer = new KafkaConsumer({
            'group.id': 'kafka',
            'metadata.broker.list': 'localhost:9092'
        }, {});
    }

    public listen() {
        this.consumer.connect({
            'group.id': 'kafka',
            'metadata.broker.list': 'localhost:9092'
        }, (err, data) => {
            console.log('err',err);
            console.log('data', data);
        });
        this.consumer.on('ready', () => this.onReady());
    }

    private onReady() {
        console.log('Ready');
        this.consumer.subscribe(['test']);
        console.log('teste');
        this.consumer.consume();
        console.log('consumindo');
    }

    /*private onData(data: any) {
        console.log('listening');
        console.log(data);
    }*/
}
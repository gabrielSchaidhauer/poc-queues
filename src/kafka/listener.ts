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
        });
        this.consumer.on('ready', () => this.onReady());
        this.consumer.on('data', this.onData)
    }

    private onReady() {
        console.log('ready listener');
        this.consumer.subscribe(['test']);
        this.consumer.consume();
    }

    private onData(data: any) { 
        console.log(data.value.toString());
    }
}
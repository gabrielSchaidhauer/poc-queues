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
        this.consumer.connect();
        this.consumer.on('ready', () => {
            this.consumer.subscribe(['test-topic']);
            this.consumer.consume();
        });
    }
}
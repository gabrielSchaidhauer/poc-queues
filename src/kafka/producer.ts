import { Producer } from 'node-rdkafka';
export default class KafkaProducer {
    private producer: Producer;


    constructor() {
        console.log('consrtucted')
        this.producer = new Producer({
            'metadata.broker.list': 'localhost:9092',
            'dr_cb': true
        });
    }

    produce(message: string) {
        this.producer.on('error', console.log)
        this.producer.on('ready', () => {
            this.producer.produce('test', null, Buffer.from(message));
            this.producer.disconnect();
        });
        this.producer.connect();
    }
}
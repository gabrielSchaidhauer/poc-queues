
import express from 'express';
import bodyParser from 'body-parser';
import NsqListener from './nsq/listener';
import NsqWriter from './nsq/writer';
import NsqResource from './resources/NsqResource';
import KafkaResource from './resources/KafkaResource';
import KafkaListener from './kafka/listener';
import KafkaProducer from './kafka/producer';
import ZeroListener from './zmq/listener';
import ZeroProducer from './zmq/producer';
import ZeroResource from './resources/ZeroResource';

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// NSQ
if (process.argv.includes('--nsq')) {
    console.log('starting NSQ at /nsq');
    const nsqWriter = new NsqWriter();
    const nsqlistener = new NsqListener();
    nsqlistener.listen();
    new NsqResource(nsqWriter, server);
}

// Kafka
if (process.argv.includes('--kafka')) {
    console.log('starting kafka at /kafka');
    const kafkaListener = new KafkaListener();
    const kafkaProducer = new KafkaProducer();
    kafkaListener.listen();
    new KafkaResource(kafkaProducer, server);
}

// ZeroMQ
if (process.argv.includes('--zero')) {
    console.log('starting ZeroMQ at /zero');
    const zeroListener = new ZeroListener();
    const zeroProducer = new ZeroProducer();
    zeroListener.listen();
    new ZeroResource(zeroProducer, server);
}

server.listen(3000);
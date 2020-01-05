
import express from 'express';
// import NsqListener from './nsq/listener';
// import NsqWriter from './nsq/writer';
// import NsqResource from './resources/NsqResource';
import KafkaListener from './kafka/listener';
import KafkaProducer from './kafka/producer';
import bodyParser from 'body-parser';
import KafkaResource from './resources/KafkaResource';

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Handlers
// const nsqWriter = new NsqWriter();
// const nsqlistener = new NsqListener();
const kafkaListener = new KafkaListener();
const kafkaProducer = new KafkaProducer();

// nsqlistener.listen();
kafkaListener.listen();

// Resources
// new NsqResource(nsqWriter, server);
new KafkaResource(kafkaProducer, server);


server.listen(3000);
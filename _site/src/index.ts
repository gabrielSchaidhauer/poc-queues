
import express from 'express';
import NsqListener from './nsq/listener';
import NsqWriter from './nsq/writer';
import NsqResource from './resources/NsqResource';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Handlers
const writer = new NsqWriter();
const listener = new NsqListener();

listener.listen();

// Resources
new NsqResource(writer, server);


server.listen(3000);
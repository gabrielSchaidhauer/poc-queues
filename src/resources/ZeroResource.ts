import ZeroProducer from "../zmq/producer";
import { Express } from 'express';

export default class ZeroResource {
    constructor(private producer: ZeroProducer, private router: Express) {
        this.router.post('/zero', (req, res) => this.post(req, res));
    }

    post(req: any, res: any) {
        this.producer.sendMessage(req.body.message);
        res.status(201).end();
    }
}
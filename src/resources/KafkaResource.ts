import KafkaProducer from "../kafka/producer";
import core from 'express';

export default class KafkaResource {
    constructor(
        private producer: KafkaProducer,
        private router: core.Express
    ) {
        this.router.post('/kafka', (req, res) => this.post(req, res));
    }

    private post(req: any, res: any) {
        this.producer.produce(req.body.message);
        res.status(201).end();
    }
}
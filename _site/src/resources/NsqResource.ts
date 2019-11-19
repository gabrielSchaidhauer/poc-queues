import NsqWriter from "../nsq/writer";
import core  from 'express';

export default class NsqResource {
    constructor(private writer: NsqWriter, private router: core.Express) {
        this.router.post('/nsq', (req, res) => this.post(req, res));
    }

    private post(req: any, res: any) {
        this.writer.write(req.body.message);
        res.status(201).end();
    }
}
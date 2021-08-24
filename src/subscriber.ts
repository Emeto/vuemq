import {Amqp} from "./amqp";

export class Subscriber {
    private amqp: Amqp;
    private _message: string;

    constructor() {
        this.amqp = new Amqp();
    }

    private init(): void {
        this.amqp.createChannel();
    }

    public consumeMessage(): void {
        this.amqp.currentChannel
            .assertQueue(this.amqp.config.queue)
            .then(r => {
                this.amqp.currentChannel
                    .consume(this.amqp.config.queue, msg => {
                        if (msg !== null) {
                            this._message = msg.content.toString();
                            this.amqp.currentChannel.ack(msg);
                        }
                    })
                    .then(r => {
                        console.log(r);
                    })
            })
    }

    get message(): string {
        return this._message;
    }
}

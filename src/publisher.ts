import {Amqp} from "./amqp";

export class Publisher {
    private amqp: Amqp;

    constructor() {
        this.amqp = new Amqp();
    }

    private init(): void {
        this.amqp.createChannel();
    }

    public sendMessage(message: string): void {
        this.amqp.currentChannel
            .assertQueue(this.amqp.config.queue)
            .then(r => {
                return this.amqp.currentChannel
                    .sendToQueue(this.amqp.config.queue, Buffer.from(message));
            })
    }
}

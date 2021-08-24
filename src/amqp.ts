import {config} from './app.config';
import {IConfig} from "./global/interfaces/IConfig";
import {Channel, connect} from "amqplib";
import {Connection} from "amqplib";

export class Amqp {
    public config: IConfig;
    public currentChannel: Channel;

    constructor() {
        this.config = config;
    }

    public connect(): Promise<Connection> {
        return connect(this.config.url);
    }

    public createChannel() {
        this.connect()
            .then(c => {
                console.log('Connection to ' + this.config.url + ':' + this.config.port + ' successful');
                return c.createChannel();
            })
            .then(ch => {
                console.log('Channel created');
                this.currentChannel = ch;
            })
            .catch(console.warn);
    };

    public closeConnection(): void {
        this.currentChannel.close()
            .then(r => {
                console.log('Connection to channel closed : ' + r);
            });
    }
}

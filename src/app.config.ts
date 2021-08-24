import {IConfig} from "./global/interfaces/IConfig";

export const config: IConfig = {
    url: 'amqp://localhost',
    port: 5672,
    queue: 'messaging'
}

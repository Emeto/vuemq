import Vue from "vue";
import {Publisher} from "./publisher";
import {Subscriber} from "./subscriber";
import App from "./components/App.vue";

export class Core {
    public init(): void {
        new Vue({
            render: (h) => h(App)
        }).$mount('#app');

        Core.initEnvironment();
    }

    private static initEnvironment(): void {
        Vue.prototype.$publisher = new Publisher();
        Vue.prototype.$subscriber = new Subscriber();

        Vue.prototype.$publisher.init();
        Vue.prototype.$subscriber.init();
    }
}

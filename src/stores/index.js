import CounterStore from './counter';
// mobx-router
// import { RouterStore } from 'mobx-router';

class RootStore {
    constructor() {
        this.counter = new CounterStore(this);
        // this.router = new RouterStore();
    }
}

export default RootStore;

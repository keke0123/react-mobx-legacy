import {observable, action, computed} from 'mobx';

export default class CounterStore {
    constructor(root) {
        this.root = root;
        console.log('root', this.root);
    }

    @observable 
    number = 0;

    @action
    increase = () => {
        this.number++;
    }

    @action
    decrease = () => {
        this.number--;
    }

    @computed
    get parseData() {
        return this.number+'점';
    }
}

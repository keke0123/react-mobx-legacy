import React from 'react';
import { observer, inject } from 'mobx-react';

// @inject('counter')
@inject(store => {
    console.log('store', store);
    return {};
})
@observer
class Test1 extends React.Component {
    constructor(props, refs) {
        super(props);
        console.log('this', this);
    }
    render() {
        return <div>Test1 page</div>;
    }
}

export default Test1;

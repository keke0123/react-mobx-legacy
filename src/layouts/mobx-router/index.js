import React from 'react';
import { inject, observer } from 'mobx-react';
import Fruit from '../../views/fruit';
import Test1 from '../../views/test1';
import views from '../../router';

class LayoutMobxRouter extends React.Component {
    render() {
        console.log('init');
        const { store } = this.props;
        const {
            router: { params, goTo }
        } = store;
        console.log('this', this);
        console.log('params', params);
        console.log('get', params.get);
        console.log('tab', params.tab);

        let linkToPage = tab => {
            console.log('link');
            console.log('tab', tab);
            goTo(views.mainPage, { tab: tab }, store);
        };

        return (
            <div>
                <h2>layout page - mobx router</h2>
                <div>
                    <button onClick={() => linkToPage('test1')}>test1</button>
                    <button onClick={() => linkToPage('fruit')}>fruit</button>
                </div>
                {(() => {
                    switch (params.tab) {
                        case 'test1':
                            return <div>test1</div>;
                        default:
                            return <div>fruit</div>;
                    }
                })()}
            </div>
        );
    }
}

export default inject('store')(observer(LayoutMobxRouter));

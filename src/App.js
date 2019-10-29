import React from 'react';
import './App.css';
import TopLayout from './layouts';
// mobx-router
import { RouterStore, MobxRouter, startRouter } from 'mobx-router';
import views from './router';
// mobx
import { Provider } from 'mobx-react';
import RootStore from './stores';
let rootStore = new RootStore();
// import CounterStore from './stores/counter';
// const counter = new CounterStore();
rootStore = {
    ...rootStore,
    router: new RouterStore()
};
startRouter(views, rootStore);
console.log('rootStore', rootStore);

function App() {
    return (
        <Provider store={rootStore}>
            <div className="App">
                App page
                <MobxRouter />
                {/* <TopLayout></TopLayout> */}
            </div>
        </Provider>
    );
}

export default App;

import React from 'react';
import './App.css';
import TopLayout from './layouts';
// mobx
import {Provider} from 'mobx-react';
import RootStore from './stores';
const rootStore = new RootStore();
// import CounterStore from './stores/counter';
// const counter = new CounterStore();

function App() {
  return (
    <Provider rootStore={rootStore}>
      <div className="App">
        App page
        <TopLayout></TopLayout>
      </div>
    </Provider>
  );
}

export default App;

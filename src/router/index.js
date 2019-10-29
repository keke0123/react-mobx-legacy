import React from 'react';
import { Route } from 'mobx-router';

// components
import LayoutMobxRouter from '../layouts/mobx-router';

const views = {
    mainPage: new Route({
        path: '/:tab',
        component: <LayoutMobxRouter />,
        onEnter: (route, params, store, queryParams) => {
            console.log('entering page');
            console.log('route', route);
            console.log('params', params);
            console.log('queryParams', queryParams);
        },
        beforeExit: (route, params, store, queryParams) => {
            console.log('exiting page');
            console.log('params', params);
        },
        onParamsChange: (route, params, store, queryParams) => {
            console.log('params changed to', params);
        }
    })
};

export default views;

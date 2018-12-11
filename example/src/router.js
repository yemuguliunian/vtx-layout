import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

import { NotFound, Nodata } from './components/layout';

const routes = [{
    path: '/curd',
    component: () => import('./routes/CURD'),
}, {
    path: '/tree',
    exact : false,
    component: () => import('./routes/TREE'),
}, {
    path: '/view',
    component: () => import('./routes/VIEW'),
}, {
    path: '/404',
    component: () => NotFound,
}, {
    path: '/nodata',
    component: () => Nodata,
}, {
    path: '/report',
    component: () => import('./routes/REPORT'),
}];

function RouterConfig({ history, app }) {
    return (
        <Router history={history}>
            <Switch>
                {
                    routes.map(({path, title, exact = true, ...other}, index) => {
                        return (
                            <Route 
                                key={index} 
                                path={path} 
                                exact={exact}
                                component={dynamic({
                                    app,
                                    ...other
                                })}
                            />
                        )
                    })
                }
            </Switch>
        </Router>
    );
}

export default RouterConfig;

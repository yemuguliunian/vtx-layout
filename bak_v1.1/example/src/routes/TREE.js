import React from 'react';
import { Router, Switch, Route, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import app from '../index.js';

import { VtxGrid, VtxDatagrid, VtxTree } from 'vtx-ui';
import { 
    Page, Flex
} from '../components/layout';

function CURD() {
    
    const routes = [{
        path : '/tree/page',
        models: () => [],
        component: () => import('./CURD')
    }];

    return (
        <Page title="左右布局">
            <Flex>
                <Flex.Left space={10} width={250}>
                    <VtxTree
                        isShowSearchInput 
                        data={[{
                            name : '测试树',
                            key : 'root',
                            children : [{
                                name : '测试树节点一',
                                key : 'root1',
                            }]
                        }]}
                        isExpandAll="openAll"
                    />
                </Flex.Left>
                <Flex.Right leftWidth={250}>
                    <Switch>
                        <Redirect from='/tree' exact to='/tree/page'/>
                        {
                            routes.map(({path, exact = true, ...other}, index) => {
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
                </Flex.Right>
            </Flex>
        </Page>
    );
}

export default CURD;

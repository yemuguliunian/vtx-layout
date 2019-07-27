import React from 'react';

import { VtxGrid, } from 'vtx-ui';
import { 
    Page, Iframe
} from '../components/layout';

import { Input, message } from 'antd';

function CURD() {
    return (
        <Page title="CURD快速布局">
        	<VtxGrid gridweight={[1]} titles={['测试']}>
        		<Input/>
    		</VtxGrid>
            <Iframe top={48} src=""/>
        </Page>
    );
}

export default CURD;

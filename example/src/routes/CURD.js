import React from 'react';

import { VtxGrid, VtxDatagrid } from 'vtx-ui';
import { 
    Page, BtnWrap, Content, TableWrap, 
    TimeBox, CountDown
} from '../components/layout';

import { Input, message, Button } from 'antd';

function CURD() {
    return (
        <Page title="CURD快速布局">
        	<VtxGrid gridweight={[1]} titles={['测试']}>
        		<Input/>
    		</VtxGrid>
            <Content top={48}>
                {/*按钮*/}
                <BtnWrap >
                	<Button >新增</Button>
                    <Button >查看</Button>
                	<Button >编辑</Button>
                    <Button >删除</Button>
                    <Button >导入</Button>
                    <Button >导出</Button>
                    <Button >同步</Button>
                </BtnWrap>
                {/*表格*/}
            	<TableWrap top={48}>
                    <VtxDatagrid 
                        title={() => {
                            return (
                                <span>
                                    <CountDown 
                                        count={10} manual={true}
                                        refresh={() => {
                                            message.info('这边执行刷新操作');
                                        }}
                                    />
                                    <TimeBox/>
                                </span>
                            )
                        }}
                        columns={[
                            {title : '测试', dataIndex : 'key', key : 'key'},
                            {title : '操作', dataIndex : 'action', key : 'action'},
                        ]}
                        dataSource={[]}
                        autoFit
                    />
                </TableWrap>
            </Content>
        </Page>
    );
}

export default CURD;

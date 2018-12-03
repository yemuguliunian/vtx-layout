import React from 'react';

import { VtxGrid, VtxDatagrid } from 'vtx-ui';
import { 
    Page, RadioWrap, Content, Cell
} from '../components/layout';

import { Radio, message, Input } from 'antd';
const RadioGroup = Radio.Group;

function VIEW() {
    return (
        <Page title="查看页面示例">
            <RadioWrap >
            	<RadioGroup >
                    <Radio value={1}>苏州大型处置单位一</Radio>
                    <Radio value={2}>苏州大型处置单位二</Radio>
                    <Radio value={3}>苏州大型处置单位三</Radio>
                    <Radio value={4}>苏州大型处置单位四</Radio>
                    <Radio value={5}>苏州大型处置单位五</Radio>
                    <Radio value={6}>苏州大型处置单位六</Radio>
                    <Radio value={7}>苏州大型处置单位七</Radio>
                    <Radio value={8}>苏州大型处置单位八</Radio>
                    <Radio value={9}>苏州大型处置单位九</Radio>
                    <Radio value={10}>苏州大型处置单位十</Radio>
                </RadioGroup>
            </RadioWrap>
            <Content top={60}>
                <Cell space="0 10px">
                    <h5>苏州大型处置单位趋势图</h5>
                </Cell>
                <Cell>
                    <Cell.Item>
                        <Cell.Item.Title>测试：</Cell.Item.Title>
                        <Cell.Item.Body>
                            <Input />
                        </Cell.Item.Body>
                    </Cell.Item>
                    <Cell.Item>
                        <Cell.Item.Title>测试：</Cell.Item.Title>
                        <Cell.Item.Body>
                            <Input />
                        </Cell.Item.Body>
                    </Cell.Item>
                </Cell>
            </Content>
        </Page>
    );
}

export default VIEW;

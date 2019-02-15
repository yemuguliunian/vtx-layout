# 快速布局

## 安装
$ npm install rc-layout --save

## 使用
```javascript
// 容器
$ import { Page } from 'rc-layout';
$ import { RadioWrap } from 'rc-layout';
$ import { BtnWrap } from 'rc-layout';
$ import { Content } from 'rc-layout';
$ import { TableWrap } from 'rc-layout';
$ import { ModalBodyWrap } from 'rc-layout';
$ import { Flex } from 'rc-layout';
$ import { Form } from 'rc-layout';

// 小部件
$ import { TimeBox } from 'rc-layout';
$ import { CountDown } from 'rc-layout';

// 其它
$ import { ReactDoucmentTitle } from 'rc-layout';
$ import { ScrollableRow } from 'rc-layout';

// 基础页面
$ import { Nodata } from 'rc-layout';
$ import { NotFound } from 'rc-layout';
$ import { Report } from 'rc-layout';
```

## API

- [Page](#Page)
- [Content](#Content)
- [BtnWrap](#BtnWrap)
- [TableWrap](#TableWrap)
- [RadioWrap](#RadioWrap)
- [ModalBodyWrap](#ModalBodyWrap)
- [Flex](#Flex)
- [Form](#Form)
- [CountDown](#CountDown)
- [TimeBox](#TimeBox)
- [Nodata](#Nodata)
- [NotFound](#NotFound)
- [Report](#Report)

### Page
页面

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| title     | HTML title | string | |

### Content
内容

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| top     | 元素的顶部边缘 | number | |
| scrollY | Y轴是否可滚动 | boolean | false |
| relative | 是否相对定位 | boolean | false |
| height | 高度 | number | |

### BtnWrap
按钮块

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| top     | 元素的顶部边缘 | number | |

### TableWrap
表格容器

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| top     | 元素的顶部边缘 | number | |
| relative | 是否相对定位 | boolean | false |
| height | 高度（相对定位时生效） | number | |

### RadioWrap
顶部radio容器

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| space     | 内间距 | number\|string  | |
| shadow | 是否显示阴影 | boolean | true |

### ModalBodyWrap
moadl Body内容容器(主要设置了Y轴可滚动，高度设置为50vh)

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| loading | 加载中 | boolean | false |

### Flex
左右布局

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |

### Form
表单
```js
<Form label="名称" required>
	<Input style={{width : '200px'}}/>
</Form>
```

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| label | 标题 | string | |
| labelWidth | 标题宽度 | number | - |
| required | 必须 | boolean | false |
| bold | 粗体 | boolean | true |
| labelStyle | label style | object | |
| labelClass | label className | string | |
| contentClass | props.children className | string | |

#### Flex.Left
| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| width | 宽 | number | 250 |

#### Flex.Right
| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
|leftWidth | 宽（和Flex.Left width一致）| number | 250 |

### CountDown
倒计时刷新数据

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| count | 多少秒计时 | number | 10 |
| manual | 是否显示手动刷新 | boolean | true | 
| isDestroy | 是否直接销毁定时器（适用于tab切换场景）| boolean | false |
| refresh | 刷新回调函数，在此执行数据刷新 | function | |

### TimeBox
时间沙盒

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
|..| |||

### Nodata
无数据

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| tip | 提示语 | string | 暂无数据 |
| src | 图片 |  string | |

### NotFound
404

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| title | 标题 | string | Page Not Found |
| content | 内容 |  string | Sorry, but the page you are looking for has note been found. Try checking the URL for error|

### Report
| 参数        | 说明           | 类型  | 默认值 |
| ------------- |-------------| -----|-----|
| className     | className | string  | |
| style     | style | object  | |
| top     | 元素的顶部边缘 | number | |
| src     | 规定在 iframe 中显示的文档的 URL | string | |

## 示例
#### 1，基础CURD布局
##### 效果图
![CURD][1]
##### 使用方法
```javascript
import React from 'react';
import { VtxGrid, VtxDatagrid } from 'vtx-ui';
import { 
    Page, BtnWrap, Content, TableWrap, 
    Button, TimeBox, CountDown
} from 'rc-layout';

import { Input, message } from 'antd';

function CURD() {
    return (
        <Page title="CURD快速布局">
        	<VtxGrid gridweight={[1]} titles={['测试']}>
        		<Input/>
    		</VtxGrid>
            <Content top={48}>
                {/*按钮*/}
                <BtnWrap >
                    <Button fType="add">新增</Button>
                    <Button fType="view">查看</Button>
                    <Button fType="edit">编辑</Button>
                    <Button fType="delete">删除</Button>
                    <Button fType="import">导入</Button>
                    <Button fType="export">导出</Button>
                    <Button icon="sync">同步</Button>
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
```
#### 2，左右布局
##### 效果图
![CURD][2]
##### 使用方法
```javascript
import { Page, Flex } from 'rc-layout';

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
            {/*curd示例*/}
        </Flex.Right>
    </Flex>
</Page>
```
#### 3，其它
##### 效果图
![CURD][3]
##### 使用方法
```javascript
import { Page, RadioWrap, Content, Cell } from 'rc-layout';

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
```

  [1]: https://yemuguliunian.github.io/rc-layout/doc/demo/curd.png
  [2]: https://yemuguliunian.github.io/rc-layout/doc/demo/tree.png
  [3]: https://yemuguliunian.github.io/rc-layout/doc/demo/view.png

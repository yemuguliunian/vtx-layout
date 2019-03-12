/**
 * CURD 头部按钮块容器
 * props
 * style : 行内样式
 * className : className
 * space : 内间距
 * top : 元素的顶部边缘
 */
import React from 'react';
import '../assets/style/index.less';

import Basic from '../Basic';
import container from '../Container';

const BtnWrap = container(
    {componentClass : "vtx_btn_wrap"}
)(Basic);

export default BtnWrap;


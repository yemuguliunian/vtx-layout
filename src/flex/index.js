/**
 * 左右快速布局
 * 这边采用的Flex布局
 * 需考虑是否支持flex布局，故采用两套布局
 */
import React from 'react';
import './index.less';

import Basic from '../Basic';
import Left from './Left';
import Right from './Right';
import container from '../Container';
import { isCompatible } from '../util/element';

// 是否兼容flex 兼容和不兼容两套布局样式
const Flex = container(
	{componentClass : isCompatible('flex') ? 'vtx_flex_layout' : 'vtx_flex_layout_d'}
)(Basic);

Flex.Right = Right;
Flex.Left = Left;

export default Flex;



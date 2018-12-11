/**
 * 外围容器一些基础样式封装
 * 快速开发使用，适用于CURD类型页面的快速布局
 * 也提供了一些小部件，如倒计时刷新数据，计时等
 */

// 容器
export { default as Page } from './wrap/Page';
export { default as RadioWrap } from './wrap/RadioWrap';
export { default as BtnWrap } from './wrap/BtnWrap';
export { default as Content } from './wrap/Content';
export { default as TableWrap } from './wrap/TableWrap';
export { default as ModalBodyWrap } from './wrap/ModalBodyWrap';
export { default as Flex } from './flex';
export { default as Cell } from './cell';

// 小部件
export { default as Button } from './pendant/Button';
export { default as TimeBox } from './pendant/TimeBox';
export { default as CountDown } from './pendant/CountDown';

// 其它
export { default as ReactDoucmentTitle } from './other/react-doucment-title.js';
export { default as ScrollableRow } from './other/scrollableRow';

// 基础页面
export { default as Nodata } from './page/Nodata';
export { default as NotFound } from './page/NotFound';
export { default as Report } from './page/Report';
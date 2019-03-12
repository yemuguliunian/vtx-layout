/**
 * 外围容器一些基础样式封装
 * 快速开发使用，适用于CURD类型页面的快速布局
 * 也提供了一些小部件，如倒计时刷新数据，计时等
 */

/************************容器**************************/
// 页面
export { default as Page } from './page';
// 顶部radio容器
export { default as RadioWrap } from './radioWrap';
// 按钮块
export { default as BtnWrap } from './btnWrap';
// 内容
export { default as Content } from './content';
// 表格容器
export { default as TableWrap } from './tableWrap';
// 左右布局 
export { default as Flex } from './flex';
// cell
export { default as Cell } from './cell';
// 表单布局
export { default as Form } from './form';


/************************部件**************************/
// 时间沙盒
export { default as TimeBox } from './timeBox';
// 倒计时刷新数据
export { default as CountDown } from './countDown';


/************************其他**************************/
// title处理封装
export { default as ReactDoucmentTitle } from './reactDocumentTitle';
// 溢出滚动(x轴)
export { default as ScrollableRow } from './scrollableRow';
// 骨架屏
export { default as Skeleton } from './skeleton';


/************************容器**************************/
// 无数据
export { default as Nodata } from './nodata';
// 404
export { default as NotFound } from './notFound';
// 报表
export { default as Report } from './report';


// 化学式
export { default as ChemicalFormula } from './chemicalFormula';
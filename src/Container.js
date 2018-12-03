/**
 * 高阶组件
 */
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

function getDisplayName(WrappedComponend) {
	return WrappedComponend.displayName ||
		   WrappedComponend.name ||
		   'Component';
}

function Container(params={}) {

	let { componentClass } = params;

	return function HOCFactory(WrappedComponend) {
		return class HOC extends React.Component {

			static displayName = `HOC(${getDisplayName(WrappedComponend)})`

			render() {
				const {
					style, className, top, space
				} = this.props;

				let wrapClass = classnames({
					[componentClass] : true
				}, className);

				const newStyle = {
					top : top,
					padding : space,
					...style
				};

				let newProps = {
					className : wrapClass,
					style : newStyle
				};
				return <WrappedComponend {...this.props} {...newProps}/>
			}
		}
	}
}

Container.propTypes = {
	top : PropTypes.number, // 元素的顶部边缘 
    space : PropTypes.number || PropTypes.string, // 内间距
    style : PropTypes.object
};

export default Container;


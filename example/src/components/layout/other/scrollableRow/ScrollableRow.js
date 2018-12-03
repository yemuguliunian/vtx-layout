/**
 * DIV x轴溢出滚动
 * FORK rc-tabs/ScrollableTabBarNode.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import './ScrollableRow.less';
import { Icon } from 'antd';

import debounce from 'lodash/debounce';

export function isTransformSupported(style) {
    return 'transform' in style ||
        'webkitTransform' in style ||
        'MozTransform' in style;
}

export function setTransform(style, v) {
    style.transform = v;
    style.webkitTransform = v;
    style.mozTransform = v;
}

export default class ScrollableRow extends React.Component {

	static defaultProps = {
		prefixCls : 'scroll-row'
	}

	constructor(props) {
    	super(props);
    	this.offset = 0;

	    this.state = {
	      	next: false,
	      	prev: false
	    };
  	}

  	getRef = (name) => {
        return this[name];
    }

    saveRef = (name) => {
        return (node) => {
            if (node) {
                this[name] = node;
            }
        };
    }

  	componentDidMount() {
        this.componentDidUpdate();
        this.debouncedResize = debounce(() => {
            this.setNextPrev();
        }, 200);
        this.resizeEvent = window.addEventListener('resize', this.debouncedResize);
  	}

  	componentDidUpdate(prevProps) {
        const props = this.props;
        const nextPrev = this.setNextPrev();
  	}

    setNextPrev = () => {
        const navNode = this.getRef('nav');
        const navNodeW = navNode.scrollWidth;
        const containerW = this.getRef('container').offsetWidth;
        const navWrapNodeW = this.getRef('navWrap').offsetWidth;

        let { offset } = this;
        const minOffset = containerW - navNodeW;
        let { next, prev } = this.state;
        if (minOffset >= 0) {
            next = false;
            this.setOffset(0, false);
            offset = 0;
        } else if (minOffset < offset) {
            next = true;
        } else {
            next = false;
            const realOffset = navWrapNodeW - navNodeW;
            this.setOffset(realOffset, false);
            offset = realOffset;
        }

        if (offset < 0) {
            prev = true;
        } else {
            prev = false;
        }
        this.setNext(next);
        this.setPrev(prev);
        return {
            next, prev
        };
    }

    setOffset = (offset, checkNextPrev = true) => {
        const target = Math.min(0, offset);
        if (this.offset !== target) {
            this.offset = target;
            let navOffset = {};
            const navStyle = this.getRef('nav').style;
            const transformSupported = isTransformSupported(navStyle);
            if (transformSupported) {
                navOffset = {
                    value: `translate3d(${target}px,0,0)`,
                };
            } else {
                navOffset = {
                    name: 'left',
                    value: `${target}px`,
                };
            }
            if (transformSupported) {
                setTransform(navStyle, navOffset.value);
            } else {
                navStyle[navOffset.name] = navOffset.value;
            }
            if (checkNextPrev) {
                this.setNextPrev();
            }
        }
    }

    setPrev(v) {
        if (this.state.prev !== v) {
            this.setState({
                prev: v
            });
        }
    }

    setNext(v) {
        if (this.state.next !== v) {
            this.setState({
                next: v
            });
        }
    }

    prev = (e) => {
        const navWrapNodeW = this.getRef('navWrap').offsetWidth;
        const { offset } = this;
        this.setOffset(offset + navWrapNodeW);
    }

    next = (e) => {
        const navWrapNodeW = this.getRef('navWrap').offsetWidth;
        const { offset } = this;
        this.setOffset(offset - navWrapNodeW);
    }

  	render() {
  		const { next, prev } = this.state;
  		const { prefixCls, prevIcon, nextIcon } = this.props;

  		const showNextPrev = prev || next;

        // 前
        const prevButton = (
            <span
                onClick={prev ? this.prev : null}
                unselectable="unselectable"
                className={classnames({
                    [`${prefixCls}-prev`]: true,
                    [`${prefixCls}-btn-disabled`]: !prev,
                    [`${prefixCls}-arrow-show`]: showNextPrev,
                })}
            >
                <span className={`${prefixCls}-prev-icon`} >
                    <Icon type="left" />
                </span>
            </span>
        );
        // 后
        const nextButton = (
            <span
                onClick={next ? this.next : null}
                unselectable="unselectable"
                className={classnames({
                    [`${prefixCls}-next`]: true,
                    [`${prefixCls}-btn-disabled`]: !next,
                    [`${prefixCls}-arrow-show`]: showNextPrev,
                })}
            >
                <span className={`${prefixCls}-next-icon`}>
                    <Icon type="right" />
                </span>
            </span>
        );

  		return (
  			<div
  				className={classnames({
  					[`${prefixCls}-container`] : true,
  					[`${prefixCls}-container-scrolling`] : showNextPrev
  				})}
  				ref={this.saveRef('container')}
  			>  
                {prevButton}
                {nextButton}
                <div className={`${prefixCls}-nav-wrap`} ref={this.saveRef('navWrap')}>
                    <div className={`${prefixCls}-nav-scroll`}>
                        <div className={`${prefixCls}-nav`} ref={this.saveRef('nav')}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
  			</div>
		)
  	}

    componentWillUnmount = () => {
        this.resizeEvent = window.removeEventListener('resize', this.debouncedResize);
    }
}


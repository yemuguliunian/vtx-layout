/**
 *  title处理封装 ReactDocumentTitle
 */

import React from 'react'
import PropTypes from 'prop-types'

export default class ReactDocumentTitle extends React.Component {

    setTitle() {
        const { title } = this.props
        document.title = title
    }

    componentDidMount() {
        this.setTitle()
    }

    componentDidUpdate() {
        this.setTitle()
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

ReactDocumentTitle.propTypes = {
    title: PropTypes.string.isRequired
}
/**
 * 404提示页面
 */
import React from 'react';
import '../assets/style/index.less';

function NotFound(props) {

	const { title, content } = props;

	return (
		<div className="vtx_404_page">
			<div className="middle_box">
				<h1>404</h1>
				<h3>{title || 'Page Not Found'}</h3>
				<div>
					{
						content ||
						`Sorry, but the page you are looking for has note been found. 
						Try checking the URL for error`
					}
				</div>
			</div>
		</div>
	)
}

export default NotFound;
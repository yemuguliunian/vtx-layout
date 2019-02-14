import React from 'react';

import { 
    Form
} from '../components/layout';

import { Input } from 'antd';

function Test() {

	return (
		<div>
			<Form
				required
				label='测试'
			>
				<Input style={{width : '200px'}}/>
			</Form>
			<Form
				label='短信内容'
			>
				2019年02月13日，主城区共处理生活垃圾9,044.78吨（含沼渣843.74吨）。其中：重庆同兴垃圾处理有限公司1,233.89吨，丰盛垃圾焚烧厂2,850.45吨，重庆三峰百果园环保发电有限公司3,020.48吨，黑石子填埋场1,939.96吨（含沼渣843.74吨）。（通过界石中转站转运3,987.86吨）。
			</Form>
		</div>
	)
}

export default Test;
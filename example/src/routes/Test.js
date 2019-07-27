import React from 'react';

import { 
    Form, Skeleton, CountUp
} from '../components/layout';

import { Input, Button } from 'antd';

class Test extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			count: 172.1235
		}
	}

	add = (e) => {
		this.setState({
			count: this.state.count + 100
		})
	}

	minus = () => {
		this.setState({
			count: this.state.count - 100.123
		})
	}

	render() {

		const { count } = this.state;
		
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
				<div style={{width : '600px', padding: '10px'}}>
					<Skeleton active>
						<Form
							label='短信内容'
						>
							2019年02月13日，主城区共处理生活垃圾9,044.78吨（含沼渣843.74吨）。其中：重庆同兴垃圾处理有限公司1,233.89吨，丰盛垃圾焚烧厂2,850.45吨，重庆三峰百果园环保发电有限公司3,020.48吨，黑石子填埋场1,939.96吨（含沼渣843.74吨）。（通过界石中转站转运3,987.86吨）。
						</Form>
					</Skeleton>
				</div>
				<div style={{padding: '10px 20px', fontSize: '24px'}}>
					<CountUp count={6438}/>
					<br/>
					<CountUp count={72.23623} suffix="%" decimals={1} interval={20} step={10}/>
					<br/>
					<CountUp 
						count={Number(count)} 
						suffix="%" 
						decimals={3}
						format={(value) => {
							return value.toString().replace(new RegExp(`\\B(?=(?:\\d{3})+\\b)`, "g"), ',')
						}}
					/>
					<br/>
					<Button onClick={this.add}>+</Button>
					<Button onClick={this.minus}>-</Button>
				</div>
				
			</div>
		)
	}
}

export default Test;
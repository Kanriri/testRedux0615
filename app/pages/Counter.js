import React, { Component } from 'react';

import {
	View,
	Text
} from 'react-native';
import ButtonHighlight from '../widget/ButtonHighlight';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import { addAction, reduceAction, setNumAction1, setNumAction2 } from '../actions/MyAction';
// style
import CounterStyle from './style/CounterStyle';

@connect(
	state => ({
		Count: state.Count,
	}),
	dispatch => ({
		dispatch,
		...bindActionCreators({
			addAction,
			reduceAction,
			setNumAction1,
			setNumAction2,
		}, dispatch),
	})
)
export default class Counter extends Component {
	constructor (props) {
		super(props);
	}

	// 触发 加的动作
	add = (enable) => {
		this.props.addAction();
		enable();
	};

	// 触发 减的动作
	reduce = enable => {
		this.props.reduceAction();
		enable();
	};

	setNumAction1 = enable => {
		this.props.setNumAction1(999);
		enable();
	};

	// 触发 减的动作
	setNumAction2 = enable => {
		this.props.setNumAction2({ num: 555 });
		enable();
	};

	render () {
		const { Count } = this.props;
		return (
			<View style={CounterStyle.container}>
				<Text style={CounterStyle.counterTxt}>{Count.num}</Text>
				<View>
					<ButtonHighlight
						title={'+1'}
						onPress={(enable) => this.add(enable)}
					/>
					<ButtonHighlight
						title={'-1'}
						onPress={(enable) => this.reduce(enable)}
					/>
					<ButtonHighlight
						title={'set 999'}
						onPress={(enable) => this.setNumAction1(enable)}
					/>
					<ButtonHighlight
						title={'set 555'}
						onPress={(enable) => this.setNumAction2(enable)}
					/>
				</View>
			</View>
		);
	}
}

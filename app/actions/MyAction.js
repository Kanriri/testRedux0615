'use strict';
// 声明类型方便引用
import { Types } from '../config';

export function addAction () {
	return {
		type: Types.ADD
	};
}

// -1操作
export function reduceAction () {
	return {
		type: Types.REDUCE
	};
}

export function setNumAction1 (params) {
	// params 可以为任何类型，一般为对象
	return {
		type: Types.SETNUM1,
		data: params
	};
}

// 指定值
export function setNumAction2 (params) {
	// params 可以为任何类型，一般为对象
	return {
		type: Types.SETNUM2,
		data: params
	};
}

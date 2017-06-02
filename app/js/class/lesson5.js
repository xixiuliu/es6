{
	//值是否是有尽
	console.log('15',Number.isFinite(15));//true
	console.log('NaN',Number.isFinite(NaN));//false
	console.log('1/0',Number.isFinite('true'/0));//false
	console.log('NaN',Number.isNaN(NaN));//true
	console.log('0',Number.isNaN(0));//false
}

{
	//判断是否为整数==传入参数必须是数,否则会结果会出错
	console.log('25',Number.isInteger(25));//true
	console.log('25.0',Number.isInteger(25.0));//true
	console.log('25.1',Number.isInteger(25.1));//false
	console.log('25.1',Number.isInteger('25'));//false
}

{
	// 判断数值是否在-2的53次方和2的53次方之间,不包含端点值
	//MAX_SAFE_INTEGER表示最大上限
	//MIN_SAFE_INTEGER表示最小下限
	console.log(Number.MAX_SAFE_INTEGER);
	console.log(Number.MIN_SAFE_INTEGER);
	console.log('10',Number.isSafeInteger(10));//true
	console.log('a',Number.isSafeInteger('a'));//false

}

{
	//返回小数的整数部分
	console.log('4.1',Math.trunc(4.1));
	console.log('4.9',Math.trunc(4.9));
}

{
	//判断正数,负数和0---一共四种结果
	console.log('-5',Math.sign(-5));//-1
	console.log('0',Math.sign(0));//0
	console.log('5',Math.sign(5));//1
	console.log('50',Math.sign('50'));//1,字符串转换了
	console.log('foo',Math.sign('foo'));//NaN
}

{
	//立方根
	console.log('-1',Math.cbrt(-1));//-1
	console.log('8',Math.cbrt(8));//2
}
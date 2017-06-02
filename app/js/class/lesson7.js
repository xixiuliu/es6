{
	//函数参数默认值--默认值后面不能再有没有默认值的变量
	function test(x,y = 'world') {
		console.log('默认值',x,y);
	}
	test('hello');//hello world
	test('hello','kill');//hello kill
}

{
	//作用域
	let x = 'test';
	function test2(x,y=x) {
		console.log('作用域',x,y);
	}
	test2('kill');//kill kill
	test2();//undefined undefined
}

{
	//rest--后面不能再有其他参数
	function test3(...arg) {
		for(let v of arg) {
			console.log('rest',v);
		}
	}
	test3(1,2,3,4,'a');
}

{
	//把数组转成离散的值
	console.log(...[1,2,4]);//1 2 4
	console.log('a',...[1,2,4]);//
}

{
	//箭头函数--有的地方不适合用
	let arrow = v => v*2;
	let arrow2 = () => 5;//()表示没有参数

	console.log(arrow(3));//6
	console.log(arrow2());//5
}

{
	//尾调用--函数式编程(函数的最后一句话是不是函数)
	function tail(x) {
		console.log('tail',x);
	}
	function fx(x) {
		return tail(x);
	}
	fx(123);

	//作用--提升性能

}
{
	//简洁表示法
	let o = 1;
	let k = 2;
	let es5 ={
		o:o,
		k:k
	};
	let es6={
		o,
		k
	};
	console.log(es5,es6);//结果一样
	//方法
	let es5_method={
		hello:function(){
			console.log('hello');
		}
	};
	let es6_method={
		hello(){
			console.log('hello');
		}
	};
	console.log(es5_method.hello(),es6_method.hello());
}

{
	//属性表达式
	let a = 'b';
	let es5_obj = {
		a:'c',
		b:'c'
	};
	let es6_obj={
		[a]:'c'
	}
	console.log(es5_obj,es6_obj);
}

{
	// 常用新增API,Object.is()功能和===相同
	console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
	console.log('数组',Object.is([],[]),[]===[]);

	//拷贝--属性有限制，浅赋值（只修改引入地址）;只能拷贝自身属性，其他的不可以(比如继承的货不可枚举的)
	console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

	let test={k:123,o:456};
	for(let [key,value] of Object.entries(test)) {
		console.log([key,value]);
	}

}

{
	//扩展运算符--babel支持不是很友好，实际用处不大
	let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};

}
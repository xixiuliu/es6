{
	let arr = Array.of(3,6,8,9);
	console.log('arr=',arr);

	let empty = Array.of();
	console.log('empty',empty);
}


{
	//Array.from()
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);//把集合转换成数组
	pArr.forEach(function(item){
		console.log(item.textContent);
	});

	console.log(Array.from([1,3,5],function(item){
		return item*2;
	}))
}

{	
	//fill()的作用
	console.log('fill-7',[1,'a',undefined].fill(7));
	console.log('fill,pos',['a','b','c'].fill(7,1,3));
	//从1开始到3结束（位置）中间的长度都要被7替换
}

{
	//keys()和values()--有兼容问题values()
	for(let index of ['1','c','ks'].keys()) {
		console.log('keys',index);
	}
	for(let value of ['1','c','ks'].values()) {
		console.log('values',value);
	}
	for(let [index,value] of ['1','c','ks'].entries()) {
		console.log('values',index,value);
	}
}

{
	//从0位置开始替换，读取数据从第三个数据读取，读
	console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
	console.log([1,2,3,4,5,6].find(function(item){return item>3}));//只找到第一个符合的值--find()
	console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//只找到第一个符合的下标--findIndex()
}

{
	//比find更省事,是否包括这个值
	console.log('number',[1,2,NaN].includes(1));//true,NaN没有报错
	console.log('number',[1,2,NaN].includes(NaN));//true
}
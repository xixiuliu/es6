{
	console.log('a',`\u0061`);
	console.log('s',`\u20BB7`);//oXFFFF

	//用大括号将编码值包起来
	console.log('s',`\u{20BB7}`);

	
}

{
	// es5,
	let s ='𠮷';
	console.log('length',s.length);//2
	console.log('0',s.charAt(0));
	console.log('1',s.charAt(1));
	console.log('at0',s.charCodeAt(0));
	console.log('at1',s.charCodeAt(1));
	//es6
	let s1='𠮷a';
	console.log('length',s1.length);
	console.log('code0',s1.codePointAt(0));//取出码值
	console.log('code1',s1.codePointAt(1));
}

//字符串操作
{
	let str = 'string';
	console.log('includes',str.includes('c'));
	console.log('start',str.startsWith('str'));
	console.log('end',str.endsWith('ing'));
}

//字符串复制
{
	let str = 'abc';
	console.log(str.repeat(2));
}

//模板字符串
{
	let name = 'list';
	let info = 'hello world';
	let m=`i am ${name},${info}`;
	console.log(m);
}

//es7的草案，必须安装引入babel-polyfill模块es6才能执行
{
	//补白的作用
	console.log('1'.padStart(2,'0'));//最终需要输出两个长度的字符，不够补0，向前补
	console.log('1'.padEnd(2,'0'));//向后补
}

//标签模板--多语言转换
{
	let user={
		name:'list',
		info:'hello world'
	}
	console.log(abc`i am ${user.name},${user.info}`);
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}
}

//转义
{
	console.log(String.raw`Hi\n${1+2}`);//Hi\n
	console.log((`Hi\n${1+2}`));
}
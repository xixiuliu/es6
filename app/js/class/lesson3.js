{
	let regex = new RegExp('xyz','i');
	let regex2 = new RegExp(/xyz/i);//es5只能是一个参数
	console.log(regex.test('xyz123'),regex2.test('xyz123'));

	let regex3 = new RegExp(/xyz/ig,'i');//es6第二个修饰符会覆盖前一个的正则所用的修饰符
	console.log(regex3.flags);//flags会输出当前的修饰符
}

// y修饰符
{
	let s = 'bbb_bb_b';
	let a1=/b+/g;
	let a2=/b+/y;
	// 第一步都能匹配--全局匹配
	console.log('one',a1.exec(s),a2.exec(s));
	//
	console.log('two',a1.exec(s),a2.exec(s));
	console.log(a1.sticky,a2.sticky);//是否开启y修饰符
}

// u修饰符--unicode
{
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

	console.log(/\u{61}/.test('a'));
	console.log(/\u{61}/u.test('a'));
}
{
	//限制某个属性是只读的
	let readonly=function(target,name,descriptor) {
		descriptor.writeable=false;
		return descriptor;
	};

	class Test{
		@readonly
		time(){
			return '2017-03-11'
		}
	}

	let test=new Test();
	
	test.time=function(){
		console.log('reset time');
	}
	console.log('time',test.time());
}

{
	let typename=function(target,name,descriptor) {
		target.myname='hello';
	}

	@typename
	class Test{

	}

	console.log('类修饰符',Test.myname);

}

{
	let log=(type)=>{
		return function(target,name,descriptor){
			let src_method=descriptor.value;
			descriptor.value=(...arg)=>{
				src_method.apply(target,arg);
				console.info(`log ${type}`);
			}
		}
	}

	class AD{
		@log('show')
		show(){
			console.info('ad is show');
		}
		@log('click')
		click(){
			console.info('ad is click');
		}
	}


	let ad=new AD();
	ad.show();
	ad.click();
}
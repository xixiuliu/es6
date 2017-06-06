{
	// generator基本定义
	let tell=function* (){
		yield 'a';
		yield 'b';
		return 'c'
	};

	let k=tell();

	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
}

{
	let obj={};
	obj[Symbol.iterator]=function* (){
		yield 1;
		yield 2;
		yield 3;
	}

	for(let key of obj) {
		console.log('key',key);
	}
}

{
	let state=function* () {
		while(1){
			yield 'A';
			yield 'B';
			yield 'C';
		}
	}

	let status=state();
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
}

// {
// 	//结果同上
// 	let state=async function () {
// 			while(1){
// 				await 'A';
// 				await 'B';
// 				await 'C';
// 			}
// 		}

// 		let status=state();
// 		console.log(status.next());
// 		console.log(status.next());
// 		console.log(status.next());
// 		console.log(status.next());
// 		console.log(status.next());
// }

{
	let draw=function(count) {
		//具体抽奖逻辑
		console.info(`剩余${count}次`)
	}

	let residue=function* (count){
		while(count>0) {
			count--;
			yield draw(count);
		}
	}

	let star=residue(5);
	let btn=document.createElement('button');
	btn.id='start';
	btn.textContent='抽奖';
	document.body.appendChild(btn);
	document.getElementById('start').addEventListener('click',function(){
		star.next();
	},false)
}

{
	//长轮询
	let ajax=function* (){
		yield new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve({code:0})
			},200);
		})
	}

	let pull=function(){
		let generator=ajax();
		let step=generator.next();
		step.value.then(function(d){
			if(d.code!=0){
				setTimeout(function(){
					console.info('wait');
					pull()
				},1000);
			}else{
				console.info(d);
			}
		})
	}
	pull();
}
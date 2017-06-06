{
	//基本定义和生成实例
	class Parent{
		constructor(name='mukewang') {
			this.name=name;
		}
	}
	let v_parent=new Parent('v');
	console.log('构造函数和实例',v_parent);
}

{
	//继承
	class Parent{
		constructor(name='mukewang') {
			this.name=name;
		}
	}

	class Child extends Parent{

	}

	console.log('继承',new Child());
}

{
	//继承传递参数
	class Parent{
		constructor(name='mukewang') {
			this.name=name;
		}
	}

	class Child extends Parent{
		constructor(name='child') {
		super(name);//如果有super()一定是放在这个位置第一行
		//子类增加自己的属性
		this.type='child';
		}
	}

	console.log('继承传递参数',new Child('hello'));
}

{
	//getter\setter
	class Parent{
		constructor(name='mukewang') {
			this.name=name;
		}

		get longName(){
		return 'mk'+this.name
		}

		set longName(value) {
			this.name=value;
		}

	}

	let v=new Parent();
	console.log('getter',v.longName);
	v.longName='hello';
	console.log('setter',v.longName);
}

{
	//静态方法-通过类调用，而不是类的实例调用
	class Parent{
		constructor(name='mukewang') {
			this.name=name;
		}

		static tell() {
			console.log('tell');
		}
	}

	Parent.tell();

}

{
	//静态属性-没有关键词
	class Parent{
		constructor(name='mukewang') {
			this.name=name;
		}

		static tell() {
			console.log('tell');
		}
	}


	Parent.type='test';

	console.log('静态属性',Parent.type);
}
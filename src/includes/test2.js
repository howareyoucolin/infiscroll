let instance = null;

class test2{

	constructor(){
		
		if(instance !== null) throw new Error('Cant reinitialize singleton class');
		instance = {};
		this.x = 5;
		console.log(this.x);
		
	}
	
}

export default new test2();
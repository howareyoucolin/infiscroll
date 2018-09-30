const _ = {
  print() {
    console.log('PRINT');
  }
}

class test{
	
	constructor(){}
	
	echo(){
		
		console.log('echo');
		
	}
	
	
	print(){
		
		_.print();
		
	}
	
}


export default test;
import $ from 'jquery';


/**
*
* Since ES6 does not support protected properties,
* map and store all the protected properties in an private object.
*
**/
const Protected = {};


/**
*
* Class some descriptions.
*
**/
class abstractScroller{

	constructor(){
		if(typeof Protected.instance === 'undefined' || Protected.instance !== true){
			throw new Error('jScroller : Instance of a singleton class can only be created by calling the method initialize().');
		}
		Protected.y = null;
		Protected.previousY = null;
		Protected.subscribers = {};
	}
	
	static getInstance(){
		if(typeof Protected.instance !== 'undefined') throw new Error('jScroller : Cannot reinitialize a singleton class');
		Protected.instance = true;
		return Protected.instance = new this();
	}
	
	init(){
		this.setY($(window).scrollTop());
		this.onScrollListener();
	}
	
	setY(value){
		Protected.y = value;
		if(Protected.previousY !== Protected.y){
			Protected.previousY = value;
			this.notifySubscribers();
		}
	}

	getY(){
		return Protected.y;
	}
	
	onScrollListener(){
		throw new Error('jScroller : abstract method onScrollListener() must be implemented before calling.');
	}

	offScrollListener(){
		throw new Error('jScroller : abstract method offScrollListener() must be implemented before calling.');
	}
	
	subscribe(subId,funcName){
		if(!('key' in Protected.subscribers)){
			Protected.subscribers[subId] = funcName;
		}
	}

	notifySubscribers(){
		Object.keys(Protected.subscribers).forEach( (key,index) => {
		    Protected.subscribers[key]();
		});
	}
	
}

export default abstractScroller;
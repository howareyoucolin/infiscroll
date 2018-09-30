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
* This is an abstract scroller singleton class 
* and required to be implemented by its child classes
* inorder to be put in use
*
**/
class abstractScroller{


	/**
	*
	* To enforce the singleton design pattern of this class,
	* this constructor should never be called directly and it throws error if being called directly,
	* the new object initialization is handled by the getInstance() method
	*
	**/
	constructor(){
		if(typeof Protected.instance === 'undefined' || Protected.instance !== true){
			throw new Error('jScroller : Instance of a singleton class can only be created by calling the method initialize().');
		}
		Protected.y = null;
		Protected.previousY = null;
		Protected.subscribers = {};
	}
	
	
	/**
	*
	* To enforce the singleton design pattern of this class,
	* this method is designed to be restricted to be able to called only ONCE,
	* and by calling this method, it calls the constructor() to create a new instance of this class
	*
	**/
	static getInstance(){
		if(typeof Protected.instance !== 'undefined') throw new Error('jScroller : Cannot reinitialize a singleton class');
		Protected.instance = true;
		return Protected.instance = new this();
	}
	
	
	/**
	*
	* Set Y with an initial value,
	* and turn on the the scroller listener
	*
	**/
	init(){
		this.setY($(window).scrollTop());
		this.onScrollListener();
	}
	
	
	/**
	*
	* Set Y with an given value,
	* and if Y changes its value conparing to the previous one, 
	* it triggers the notifications for the subscribed functions
	* @param number scrollTop position of the window
	*
	**/
	setY(value){
		Protected.y = value;
		if(Protected.previousY !== Protected.y){
			Protected.previousY = value;
			this.notifySubscribers();
		}
	}

	
	/**
	*
	* @return number scrollTop position of the window
	*
	**/
	getY(){
		return Protected.y;
	}
	
	
	/**
	*
	* an abstract method, requires further implementation by child classes,
	* serves as a switch to turn on the the scroller listener
	*
	**/
	onScrollListener(){
		throw new Error('jScroller : abstract method onScrollListener() must be implemented before calling.');
	}

	
	/**
	*
	* an abstract method, requires further implementation by child classes,
	* serves as a switch to turn off the the scroller listener
	*
	**/
	offScrollListener(){
		throw new Error('jScroller : abstract method offScrollListener() must be implemented before calling.');
	}
	
	
	/**
	*
	* adds a function into the subscribers array 
	* @param string a unique ID for the function to be subscribed,
	* if multiple functions with a same ID will be seen as a same function,
	* and only the first function with that ID will be added to subscribers and the rest will be ignored
	* @param string the name of the function to be subscribed
	*
	**/
	subscribe(subId,funcName){
		if(!(subId in Protected.subscribers)){
			Protected.subscribers[subId] = funcName;
		}
	}
	
	
	/**
	*
	* removes a function from the subscribers array by ID
	* @param string a unique ID for the function to be subscribed,
	*
	**/
	unsubscribe(subId){
		delete Protected.subscribers[subId]; 
	}

	
	/**
	*
	* loop through all functions in the subcribers array 
	* and trigger the function calls for each single one of them
	*
	**/
	notifySubscribers(){
		Object.keys(Protected.subscribers).forEach( (key,index) => {
		    Protected.subscribers[key]();
		});
	}
	
}

export default abstractScroller;
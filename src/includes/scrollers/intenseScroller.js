import $ from 'jquery';
import abstractScroller from './abstractScroller';


/**
*
* Since ES6 does not support protected properties,
* map and store all the protected properties in an private object.
*
**/
const Protected = {};


/**
*
* Class intenseScroller, is ralatively high computation cost implementation 
* specializes in providing most frequent updates(60 times/sec) for the application with high animation demands.
* Therefore, don't use this implementation unless it's absolutely needed.
*
**/
class intenseScroller extends abstractScroller{
	
	
	/**
	*
	* Implements the abstract method in abstractScroller
	*
	**/
	onScrollListener(){
		let loop = () => {
			this.setY($(window).scrollTop());
			Protected.loopId = requestAnimationFrame(loop);
		}
		Protected.loopId = requestAnimationFrame(loop);
	}
	
	
	/**
	*
	* Implements the abstract method in abstractScroller
	*
	**/
	offScrollListener(){
		cancelAnimationFrame(Protected.loopId);
	}
	
	
}


export default intenseScroller;
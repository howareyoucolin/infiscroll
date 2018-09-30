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
* Class some descriptions.
*
**/
class intenseScroller extends abstractScroller{
	
	onScrollListener(){
		let loop = () => {
			this.setY($(window).scrollTop());
			Protected.loopId = requestAnimationFrame(loop);
		}
		Protected.loopId = requestAnimationFrame(loop);
	}
	
	offScrollListener(){
		cancelAnimationFrame(Protected.loopId);
	}
	
}


export default intenseScroller;
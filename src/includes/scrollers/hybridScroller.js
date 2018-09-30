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
class hybridScroller extends abstractScroller{
	
	onScrollListener(){
		$(window).on('scroll',() => {
			this.setY($(window).scrollTop());
		});
		$('body').on({'touchmove': () => { 
			this.setY($(window).scrollTop());
		}});
		let loop = () => {
			this.setY($(window).scrollTop());
			//Force to notify subscribers every 2 secs
			this.notifySubscribers();
			Protected.loopId = setTimeout(loop,2000);
		}
		Protected.loopId = setTimeout(loop,2000);
	}
	
	offScrollListener(){
		$(window).off('scroll');
		$('body').off('touchmove');
		clearTimeout(Protected.loopId);
	}
	
}


export default hybridScroller;
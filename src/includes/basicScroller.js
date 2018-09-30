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
class basicScroller extends abstractScroller{
	
	onScrollListener(){
		$(window).on('scroll',() => {
			this.setY($(window).scrollTop());
		});
		$('body').on({'touchmove': () => { 
			this.setY($(window).scrollTop());
		}});
	}
	
	offScrollListener(){
		$(window).off('scroll');
		$('body').off('touchmove');
	}
	
}


export default basicScroller;
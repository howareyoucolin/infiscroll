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
* Class basicScroller, the most basic scroller implementation
* it updates the scroll top value every time the window is scrolled or touchmoved 
*
**/
class basicScroller extends abstractScroller{
	
	
	/**
	*
	* Implements the abstract method in abstractScroller
	*
	**/
	onScrollListener(){
		$(window).on('scroll',() => {
			this.setY($(window).scrollTop());
		});
		$('body').on({'touchmove': () => { 
			this.setY($(window).scrollTop());
		}});
	}
	
	
	/**
	*
	* Implements the abstract method in abstractScroller
	*
	**/
	offScrollListener(){
		$(window).off('scroll');
		$('body').off('touchmove');
	}
	
	
}


export default basicScroller;
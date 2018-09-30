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
* Class hybridScroller, is implementation that combines the basic scroller and intense scroller.
* It deals some rare cases that the basic scroller fails to deal, such as the document is too short to scroll,
* or sometimes the issue with some new generated/appended dom element is being not triggered if the window is not being scrolled manually,
* with all the benefits, it takes a little bit more of computation cost than the basic one but it is totally worthy.
*
**/
class hybridScroller extends abstractScroller{
	
	
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
		let loop = () => {
			this.setY($(window).scrollTop());
			//Force to notify subscribers every 2 secs
			this.notifySubscribers();
			Protected.loopId = setTimeout(loop,2000);
		}
		Protected.loopId = setTimeout(loop,2000);
	}
	
	
	/**
	*
	* Implements the abstract method in abstractScroller
	*
	**/
	offScrollListener(){
		$(window).off('scroll');
		$('body').off('touchmove');
		clearTimeout(Protected.loopId);
	}
	
	
}


export default hybridScroller;
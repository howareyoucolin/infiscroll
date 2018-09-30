import './style.css';
import $ from 'jquery';
import scroller from './includes/scrollerAdapter';
import SyncAppendHandler from './includes/syncAppendHandler'


const syncAppendHandler = new SyncAppendHandler();
 
scroller.subscribe('Home-Infinite-Scroll',function(){
	let documentBottom = $(document).height() - $(window).height() -25;//with a 25px buffer height
	let y = scroller.getY();
	if(y >= documentBottom){
		syncAppendHandler.appendContent($('body'),'google');
	}
});




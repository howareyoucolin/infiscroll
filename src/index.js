import './style.css';
import $ from 'jquery';
import scroller from './includes/scrollerAdapter';
import SyncAppendHandler from './includes/syncAppendHandler'


let articleIndex = 0;
const articleArray = [
		'http://142.93.13.19/infiscroll/sample_data/1.html',
		'http://142.93.13.19/infiscroll/sample_data/2.html',
		'http://142.93.13.19/infiscroll/sample_data/3.html',
		'http://142.93.13.19/infiscroll/sample_data/1.html',
		'http://142.93.13.19/infiscroll/sample_data/2.html',
		'http://142.93.13.19/infiscroll/sample_data/3.html',
		'http://142.93.13.19/infiscroll/sample_data/1.html',
		'http://142.93.13.19/infiscroll/sample_data/2.html',
		'http://142.93.13.19/infiscroll/sample_data/1.html',
		'http://142.93.13.19/infiscroll/sample_data/3.html',
		'http://142.93.13.19/infiscroll/sample_data/4.html',
	];


const syncAppendHandler = new SyncAppendHandler();
 
scroller.subscribe('Home-Infinite-Scroll',function(){
	let documentBottom = $(document).height() - $(window).height() -25;//with a 25px buffer height
	let y = scroller.getY();
	if(y >= documentBottom){
		if(typeof articleArray[articleIndex] === 'undefined'){
			scroller.unsubscribe('Home-Infinite-Scroll');
			return;
		}else{
			syncAppendHandler.appendContent({
				'element' : $('body'),
				'url' : articleArray[articleIndex],
			}, () => {
				articleIndex++;
			});
		}
	}
});




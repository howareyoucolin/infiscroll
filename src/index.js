import './style.css';
import $ from 'jquery';
import scroller from './includes/scrollerAdapter';
import SyncAppendHandler from './includes/syncAppendHandler'


/**
*
* an array with some test data
*
**/
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


/**
*
* loops through the article array and appends the article to the end of the page document
* one by one (appends right before the closing tag </body>) 
*
**/
const syncAppendHandler = new SyncAppendHandler();

//"Home-Infinite-Scroll" is a unque ID passed to the scroller's subscriber array
scroller.subscribe('Home-Infinite-Scroll',function(){
	
	let documentBottom = $(document).height() - $(window).height() -25;//with a 25px buffer height
	let y = scroller.getY();
	
	//when reaches the very bottom of the page document
	if(y >= documentBottom){
		
		//when reaches the end of the article array, unsubscribe from the scroller 
		//since there is no further  excution for this function
		if(typeof articleArray[articleIndex] === 'undefined'){
			
			scroller.unsubscribe('Home-Infinite-Scroll');
			return;
			
		}else{
			
			//handles the appending process by the syncAppendHandler
			syncAppendHandler.appendContent({
				'element' : $('body'),
				'url' : articleArray[articleIndex],
			}, () => {
				//After appending, move to the next item of the article array
				articleIndex++;
			});
			
		}
	}
	
});
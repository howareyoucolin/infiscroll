import './style.css';
import Scroller from './includes/jScroller';


let scroller = Scroller.getInstance();
scroller.init();

 
scroller.subscribe('Home-Infinite-Scroll',function(){
	console.log(scroller.getY());
});




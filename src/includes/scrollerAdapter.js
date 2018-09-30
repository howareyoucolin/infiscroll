/**
*
* It serves as a switch to use different scroller based on the need of the application
* without having to change any code in the main application code
*
* Options:
* - import Scroller from './basicScroller';
* - import Scroller from './hybridScroller';
* - import Scroller from './intenseScroller';
*
**/
import Scroller from './scrollers/hybridScroller';


const scroller = Scroller.getInstance();
scroller.init();


export default scroller;
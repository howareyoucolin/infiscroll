/**
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
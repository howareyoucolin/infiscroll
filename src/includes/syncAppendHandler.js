import $ from 'jquery';


/**
*
* jSyncAppendHandler handles appending a child element to a specific parent element one at a time syncroizely,
* while one is in the process of appending, the handler locks itself to refuse to take another appending task,
* when it finishes the appending, it reopens for new appending procedure
*
**/
class jSyncAppendHandler {

	constructor(){
		this.locked = false;
	}

	appendContent(element,url,wrap='body'){
		if(this.locked) return;
		this.locked = true;
		console.log('call appendByUrl',this.locked);
		this.locked = false;
	}

}


export default jSyncAppendHandler;
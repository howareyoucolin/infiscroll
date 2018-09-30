import $ from 'jquery';


/**
*
* syncAppendHandler handles appending a child element to a specific parent element one at a time syncroizely,
* while one is in the process of appending, the handler locks itself to refuse to take another appending task,
* when it finishes the appending, it reopens for new appending procedure
*
**/
class syncAppendHandler {

	constructor(){
		this.locked = false;
	}

	appendContent(config = {},callback){
		
		if(this.locked) return;
		this.locked = true;
		
		//Check configurations
		if(typeof config.element === 'undefined') throw new Error('syncAppendHandler.appendContent : config.element is null and required to be set to a value!');
		if(typeof config.url === 'undefined') throw new Error('syncAppendHandler.appendContent : config.url is null and required to be set to a value!');
		
		//Set configuration vars
		let element = config.element;
		let url = config.url;

		$.get(url, function(data){
			element.append($(data));
		});
		
		callback();
		this.locked = false;
	}

}


export default syncAppendHandler;
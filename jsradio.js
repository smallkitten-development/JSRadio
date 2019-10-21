// jsradio written using JS classes
// 10/21/19

var sinceMidnight = moment().clone().startOf('day');
var millisecondsSinceMidnight = moment().diff(sinceMidnight, 'silliseconds');

class jsradio {
	constructor(source) {
		this.source = source;
	}

	start() {
		if (millisecondsSinceMidnight < 43200000) { // if its before 12pm
			var audio = new Howl({src: [this.source]});
			audio.once('load', function(){
				audio.seek(millisecondsSinceMidnight);
				audio.play();
			});
		} else  { // after 12pm
			millisecondsSinceMidnight = millisecondsSinceMidnight - 43200000;
			
			var audio = new Howl({src: [this.source]});
			audio.once('load', function(){
				audio.seek(millisecondsSinceMidnight);
				audio.play();
			});
		}
	}
}
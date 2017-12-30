

class MMStatsView{
	constructor(outlets){
		this.outlets = outlets;
	}
	updateStats(stats){
		for(var key in stats){
			if(this.outlets[key]){
				this.outlets[key].querySelector('span').innerText = parseInt(stats[key]);
			}
		}
	}
}
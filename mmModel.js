

class MMModel{
	constructor(){
		this.stats = {
			accuracy: 0,
			matches: 0,
			totalCards: 0,
			totalGames: 0,
			totalAttempts: 0
		}
	}
	getStats(stat){
		if( this.stats.hasOwnProperty(stat)){
			return this.stats[stat];
		}
	}
	updateAccuracy(){
		this.stats.accuracy = (this.stats.matches / this.stats.totalAttempts) * 100;		
	}
	incrementAttempts(){
		this.stats.totalAttempts++;
		this.updateAccuracy();
	}
	incrementMatches(){
		this.stats.matches++;
		this.updateAccuracy();
	}
	incrementTotalGames(){
		this.stats.totalGames++;
	}
	setTotalCards(newCount){
		if(!isNaN(newCount))
		this.stats.totalCards= parseInt(newCount);
	}
}
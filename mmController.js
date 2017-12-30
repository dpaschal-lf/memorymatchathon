

class MMController{
	constructor(cardImages, outlets){
		this.cardImages = cardImages;
		this.cardRevertTime = 3000;
		this.clickedCards = [];
		const defaultOutlets = ['game', 'gameCount','accuracy','matches'];
		this.outlets = {};
		for(var i=0; i<defaultOutlets.length; i++){
			if( outlets[ defaultOutlets[i]] === undefined){
				console.error(defaultOutlets[i] + ' must be included');
				return false;
			}
			this.outlets[ defaultOutlets[i] ] = document.querySelector( outlets[defaultOutlets[i]]);
		}
		this.model = new MMModel(  );
		this.model.setTotalCards(cardImages.length);
		this.view = {};
		this.view.cards = new MMCardView(this.outlets.game, this.handleCardClick.bind(this) );
		this.view.cards.createCards( this.randomizeArray(cardImages));
		this.view.stats = new MMStatsView(this.outlets);
	}
	randomizeArray(targetArray){
		const newArray = [];
		const array = targetArray.slice();
		while(array.length){
			let randomNum = (Math.random() * array.length) >> 0;
			newArray[newArray.length] = array.splice(randomNum,1)[0];
		}
		return newArray;
	}
	readyNextRound(){
		this.clickedCards.length=0;
	}
	handleCardClick(card){
		if(this.clickedCards.length<2){
			this.view.cards.revealCard(card);
		}
		this.clickedCards.push(card);

		if(this.clickedCards.length===2){
			this.model.incrementAttempts()
			if(this.view.cards.getCardID(this.clickedCards[0]) === this.view.cards.getCardID( this.clickedCards[1] )){
				this.readyNextRound();
			   	this.model.incrementMatches();
				if(this.model.getStats('matches') === this.model.getStats('totalCards')){
					this.win();
				}
			}
			else {
				setTimeout(this.revertCards.bind(this),this.cardRevertTime);
			}
		}
		this.view.stats.updateStats({
			matches: this.model.getStats('matches'),
			accuracy: this.model.getStats('accuracy'),
			gameCount: this.model.getStats('totalGames'),
		})
	}
	revertCards(){
		this.clickedCards.forEach(card =>{
			this.view.cards.revertCard(card);
		});
		this.readyNextRound();
	}
	win(){
		alert('you win!');

		this.cardsCanClick= true;
		this.matches = 0;
		this.init();
	}	
}